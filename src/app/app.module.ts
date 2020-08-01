import { ValidationService } from './validation.service';
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
import { ContentTopComponent } from './content-top/content-top.component';

import { AngularFireAuthModule } from '@angular/fire/auth';
import { FormsModule } from '@angular/forms';
import { SummaryComponent } from './summary/summary.component';
import { StepperComponent } from './stepper/stepper.component';
import { ExpensesStepperComponent } from './expenses-stepper/expenses-stepper.component';
import { HowToUseComponent } from './how-to-use/how-to-use.component';
import { MainContentComponent } from './main-content/main-content.component';


@NgModule({
  declarations: [
    AppComponent,
    MakeABudgetHeaderComponent,
    IncomeComponent,
    LayoutComponent,
    BannerComponent,
    ContentTopComponent,
    SummaryComponent,
    StepperComponent,
    ExpensesStepperComponent,
    HowToUseComponent,
    MainContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AngularFireAuthModule,
    FormsModule
  ],
  providers: [FormDataService, ValidationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
