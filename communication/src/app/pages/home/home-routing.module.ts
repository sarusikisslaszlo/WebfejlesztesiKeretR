import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', redirectTo: 'splash', pathMatch: 'full' },
    {
        path: '',
        component: HomeComponent,
        children: [
            {
                path: 'splash',
                loadChildren: () => import('./../splash-screen/splash-screen.module').then(m => m.SplashScreenModule),
            },
            {
                path: 'communications',
                loadChildren: () => import('./../communication/list/communication-list.module').then(m => m.CommunicationListModule),
            },
            {
                path: 'notification',
                loadChildren: () => import('./../notification/notification.module').then(m => m.NotificationModule),
            },
            {
                path: 'alert',
                loadChildren: () => import('./../alert/alert.module').then(m => m.AlertModule),
            }
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class HomeRoutingModule { }