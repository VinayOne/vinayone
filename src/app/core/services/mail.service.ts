import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';

import { environment } from '../../../environments/environment';

export interface ContactRequest {
  name: string;
  contactnumber: string;
  email: string;
  howfoundme: string;
  feedback: string;
}

@Injectable({
  providedIn: 'root',
})
export class MailService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = environment.apiUrl;

  sendMail(payload: ContactRequest) {
    return this.http
      .post<{ message: string }>(`${this.baseUrl}/mail`, payload)
      .pipe(
        catchError((error) => {
          const message =
            error?.error?.message ??
            `Request failed with status ${error?.status ?? 'unknown'}.`;

          return throwError(() => new Error(message));
        }),
      );
  }
}
