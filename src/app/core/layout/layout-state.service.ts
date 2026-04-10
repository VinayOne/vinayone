import { Injectable, signal } from '@angular/core';

export type SidebarColor = 'purple' | 'azure' | 'green' | 'orange' | 'danger';

@Injectable({
  providedIn: 'root',
})
export class LayoutStateService {
  readonly sidebarColor = signal<SidebarColor>('purple');
  readonly sidebarImage = signal('assets/img/sidebar-3.jpg');
  readonly mobileMenuOpen = signal(false);

  setSidebarColor(color: SidebarColor): void {
    this.sidebarColor.set(color);
  }

  setSidebarImage(image: string): void {
    this.sidebarImage.set(image);
  }

  toggleMobileMenu(): void {
    this.mobileMenuOpen.update((open) => !open);
  }

  closeMobileMenu(): void {
    this.mobileMenuOpen.set(false);
  }
}
