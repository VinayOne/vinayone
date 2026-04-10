import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-profile',
  imports: [RouterLink],
  templateUrl: './profile.html',
  styleUrl: './profile.scss',
})
export class Profile {
  protected readonly linkedInUrl = 'https://www.linkedin.com/in/vinayone/';
  protected readonly githubUrl = 'https://github.com/VinayOne';
  protected readonly fiverrUrl = 'https://www.fiverr.com/vinayone_india';
  protected readonly resumeUrl =
    'https://docs.google.com/document/d/1UY61CBp3TW-763S6fvUY5BgvL5fS1d3FNSGe1q_sZSU/edit?usp=sharing';
  protected readonly resumePdfUrl =
    'https://drive.google.com/file/d/1jzQcCPVehsBpy-ON6Uw1vxS1A9w0vwid/view?usp=sharing';

  protected openLinkedInProfile(): void {
    this.openExternalLink(this.linkedInUrl);
  }

  protected openGithubProfile(): void {
    this.openExternalLink(this.githubUrl);
  }

  protected openFiverrProfile(): void {
    this.openExternalLink(this.fiverrUrl);
  }

  protected openResume(): void {
    this.openExternalLink(this.resumeUrl);
  }

  protected openResumePdf(): void {
    this.openExternalLink(this.resumePdfUrl);
  }

  private openExternalLink(url: string): void {
    window.open(url, '_blank', 'noopener,noreferrer');
  }
}
