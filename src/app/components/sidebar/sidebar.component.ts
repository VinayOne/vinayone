import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/vinay-profile', title: 'Profile',  icon:'double_arrow', class: '' },
    { path: '/skills', title: 'Skills',  icon: 'double_arrow', class: '' },
    { path: '/experience', title: 'Experience',  icon:'double_arrow', class: '' },
    { path: '/project-demos', title: 'Project Demo',  icon:'double_arrow', class: '' },
    { path: '/javascript-algorithms', title: 'JavaScript Algos',  icon:'double_arrow', class: '' },
    { path: '/contact', title: 'Query / Contact',  icon:'contact_support', class: 'active-pro' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
