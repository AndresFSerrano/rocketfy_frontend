import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ComponentsModule } from '../components/components.module';
import { ReportComponent } from './report/report.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [HomeComponent, ReportComponent,NotFoundComponent],
  imports: [
    CommonModule,
    ComponentsModule,
  ],
  exports: [HomeComponent,ReportComponent,NotFoundComponent],
  providers: [],
})
export class PageModule { }