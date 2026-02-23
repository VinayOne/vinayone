import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { ApiService } from './api.service';

@NgModule({ declarations: [
        FooterComponent,
        NavbarComponent,
        SidebarComponent
    ],
    exports: [
        FooterComponent,
        NavbarComponent,
        SidebarComponent
    ], imports: [CommonModule,
        RouterModule], providers: [ApiService, provideHttpClient(withInterceptorsFromDi())] })
export class ComponentsModule { }
