import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { PORTFOLIO_NAV_ITEMS } from '../../../core/navigation/portfolio-nav';

@Component({
  selector: 'app-footer',
  imports: [DatePipe, RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  protected readonly navItems = PORTFOLIO_NAV_ITEMS;
  protected readonly year = new Date();
}
