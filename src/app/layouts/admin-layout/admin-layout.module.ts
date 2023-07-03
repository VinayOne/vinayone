import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { SkillsComponent } from '../../skills/skills.component';
import { ExperienceComponent } from '../../experience/experience.component';
import { DemosComponent } from '../../demos/demos.component';
import { JavascriptAlgorithmsComponent } from '../../javascript-algorithms/javascript-algorithms.component';
import { ContactComponent } from '../../contact/contact.component';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatRippleModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
  ],
  declarations: [
    UserProfileComponent,
    SkillsComponent,
    ExperienceComponent,
    DemosComponent,
    JavascriptAlgorithmsComponent,
    ContactComponent,
  ]
})

export class AdminLayoutModule {}
