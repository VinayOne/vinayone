import { Component, computed, inject } from '@angular/core';
import {
  takeUntilDestroyed,
  toSignal,
} from '@angular/core/rxjs-interop';
import { Router, RouterOutlet, NavigationEnd } from '@angular/router';
import { filter, map, startWith } from 'rxjs';

import { LayoutStateService } from '../layout-state.service';
import {
  PORTFOLIO_NAV_ITEMS,
  type PortfolioNavItem,
} from '../../navigation/portfolio-nav';
import { Footer } from '../../../shared/layout/footer/footer';
import { Navbar } from '../../../shared/layout/navbar/navbar';
import { Sidebar } from '../../../shared/layout/sidebar/sidebar';

@Component({
  selector: 'app-portfolio-shell',
  imports: [RouterOutlet, Footer, Navbar, Sidebar],
  templateUrl: './portfolio-shell.html',
  styleUrl: './portfolio-shell.scss',
})
export class PortfolioShell {
  protected readonly layout = inject(LayoutStateService);
  protected readonly navItems = PORTFOLIO_NAV_ITEMS;

  private readonly router = inject(Router);
  private readonly currentPath = toSignal(
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd),
      startWith(null),
      map(() => this.router.url.replace(/^\/+/, '')),
      map((url) => url.split('?')[0].split('#').pop() ?? ''),
    ),
    { initialValue: this.router.url.replace(/^\/+/, '') },
  );

  protected readonly pageTitle = computed(() => {
    const activeItem = this.findNavItem(this.currentPath());
    return activeItem?.label ?? 'Profile';
  });

  constructor() {
    this.router.events
      .pipe(
        filter((event): event is NavigationEnd => event instanceof NavigationEnd),
        takeUntilDestroyed(),
      )
      .subscribe(() => this.layout.closeMobileMenu());
  }

  protected toggleMobileMenu(): void {
    this.layout.toggleMobileMenu();
  }

  private findNavItem(path: string): PortfolioNavItem | undefined {
    const normalizedPath = path.replace(/^\/+/, '');
    return this.navItems.find((item) => item.path === normalizedPath);
  }
}
