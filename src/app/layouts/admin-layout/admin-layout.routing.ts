import { Routes } from '@angular/router';

import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { SkillsComponent } from 'app/skills/skills.component';
import { ExperienceComponent } from '../../experience/experience.component';
import { DemosComponent } from '../../demos/demos.component';
import { JavascriptAlgorithmsComponent } from '../../javascript-algorithms/javascript-algorithms.component';
import { ContactComponent } from '../../contact/contact.component';

export const AdminLayoutRoutes: Routes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'skills',
    //     component: SkillsComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }    
    { path: 'vinay-profile',   component: UserProfileComponent },
    { path: 'skills',      component: SkillsComponent },
    { path: 'experience',     component: ExperienceComponent },
    { path: 'project-demos',     component: DemosComponent },
    { path: 'javascript-algorithms',     component: JavascriptAlgorithmsComponent },
    { path: 'contact',        component: ContactComponent },
];
