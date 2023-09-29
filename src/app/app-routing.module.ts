import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './ui/pages/home/home.component';
import { ReportComponent } from './ui/pages/report/report.component';
import { NotFoundComponent } from './ui/pages/not-found/not-found.component';

const routes: Routes = [
  {path: '',redirectTo: '/home',pathMatch: 'full'},
  {path: 'home', component:HomeComponent},
  {path: 'report',component:ReportComponent},
  { path: 'notfound', component: NotFoundComponent }, 
  { path: '**', redirectTo: '/notfound' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
