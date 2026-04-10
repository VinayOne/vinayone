export interface PortfolioNavItem {
  path: string;
  label: string;
  icon: string;
  highlighted?: boolean;
}

export const PORTFOLIO_NAV_ITEMS: PortfolioNavItem[] = [
  {
    path: 'vinay-profile',
    label: 'Profile',
    icon: 'account_circle',
  },
  {
    path: 'skills',
    label: 'Skills',
    icon: 'psychology',
  },
  {
    path: 'experience',
    label: 'Experience',
    icon: 'work_history',
  },
  {
    path: 'projects',
    label: 'Projects',
    icon: 'rocket_launch',
  },
  {
    path: 'javascript-algorithms',
    label: 'JavaScript Algos',
    icon: 'terminal',
  },
  {
    path: 'contact',
    label: 'Query / Contact',
    icon: 'mark_email_read',
    highlighted: true,
  },
];
