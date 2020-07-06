import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MakeABudgetHeaderComponent } from './make-a-budget-header/make-a-budget-header.component';
import { IncomeComponent } from './income/income.component';

import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LayoutComponent } from './layout/layout.component';
import { BannerComponent } from './banner/banner.component';
import { FormDataService } from './form-data.service';


@NgModule({
  declarations: [
    AppComponent,
    MakeABudgetHeaderComponent,
    IncomeComponent,
    LayoutComponent,
    BannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [FormDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
