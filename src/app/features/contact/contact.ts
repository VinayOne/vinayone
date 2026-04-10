import { Component, inject } from '@angular/core';
import { take } from 'rxjs';
import {
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { MailService } from '../../core/services/mail.service';

@Component({
  selector: 'app-contact',
  imports: [
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatSnackBarModule,
  ],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  private readonly formBuilder = inject(NonNullableFormBuilder);
  private readonly mailService = inject(MailService);
  private readonly snackBar = inject(MatSnackBar);

  protected readonly url = 'https://www.fiverr.com/vinayone_india';
  protected readonly linkedInUrl = 'https://www.linkedin.com/in/vinayone/';
  protected readonly githubUrl = 'https://github.com/VinayOne';
  protected readonly whatsAppNumber = '919333393383';
  protected readonly whatsAppMessage =
    'Hi Vinay, I visited your portfolio and would like to discuss an opportunity.';
  protected readonly whatsAppUrl = `https://wa.me/${this.whatsAppNumber}?text=${encodeURIComponent(this.whatsAppMessage)}`;
  protected readonly options = [
    'Found on Google',
    'I followed a link',
    'From LinkedIn or GitHub',
    'Someone referred me',
  ];

  protected submitted = false;
  protected submitting = false;

  protected readonly contactForm = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(4)]],
    contactnumber: ['', [Validators.required, Validators.minLength(9)]],
    email: [
      '',
      [
        Validators.required,
        Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i),
      ],
    ],
    howfoundme: ['', Validators.required],
    feedback: ['', Validators.required],
  });

  protected getFiverrProfile(): void {
    window.open(this.url, '_blank', 'noopener,noreferrer');
  }

  protected openWhatsAppChat(): void {
    window.open(this.whatsAppUrl, '_blank', 'noopener,noreferrer');
  }

  protected onSubmit(): void {
    this.submitted = true;

    if (this.contactForm.invalid || this.submitting) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.submitting = true;

    this.mailService
      .sendMail(this.contactForm.getRawValue())
      .pipe(take(1))
      .subscribe({
        next: () => {
          this.contactForm.reset({
            name: '',
            contactnumber: '',
            email: '',
            howfoundme: '',
            feedback: '',
          });
          this.submitted = false;
          this.submitting = false;
          this.showNotification('SUCCESS - Your message sent!');
        },
        error: (error: Error) => {
          this.submitting = false;
          this.showNotification(
            error.message || 'Unable to send your message right now.',
          );
        },
      });
  }

  private showNotification(message: string): void {
    this.snackBar.open(message, 'Close', {
      duration: 4500,
      horizontalPosition: 'left',
      verticalPosition: 'bottom',
    });
  }
}
