import { Component } from '@angular/core';

@Component({
    selector: 'app-user-profile',
    templateUrl: './user-profile.component.html',
    styleUrls: ['./user-profile.component.css'],
    standalone: false
})
export class UserProfileComponent {
  readonly linkedInUrl = 'https://www.linkedin.com/in/vinayone/';
  readonly githubUrl = 'https://github.com/VinayOne';
  readonly fiverrUrl = 'https://www.fiverr.com/vinayone_india';
  readonly resumeUrl = 'https://docs.google.com/document/d/1UY61CBp3TW-763S6fvUY5BgvL5fS1d3FNSGe1q_sZSU/edit?usp=sharing';
  readonly resumePdfUrl = 'https://drive.google.com/file/d/1jzQcCPVehsBpy-ON6Uw1vxS1A9w0vwid/view?usp=sharing';

  openLinkedInProfile(): void {
    this.openExternalLink(this.linkedInUrl);
  }

  openGithubProfile(): void {
    this.openExternalLink(this.githubUrl);
  }

  openFiverrProfile(): void {
    this.openExternalLink(this.fiverrUrl);
  }

  openResume(): void {
    this.openExternalLink(this.resumeUrl);
  }

  openResumePdf(): void {
    this.openExternalLink(this.resumePdfUrl);
  }

  private openExternalLink(url: string): void {
    window.open(url, '_blank', 'noopener,noreferrer');
  }
}
