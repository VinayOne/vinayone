import { Component, input, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { LayoutStateService } from '../../../core/layout/layout-state.service';
import { type PortfolioNavItem } from '../../../core/navigation/portfolio-nav';

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar {
  readonly items = input.required<PortfolioNavItem[]>();

  private readonly layout = inject(LayoutStateService);

  protected closeMobileMenu(): void {
    this.layout.closeMobileMenu();
  }
}
