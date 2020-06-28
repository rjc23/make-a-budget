import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MakeABudgetHeaderComponent } from './make-a-budget-header/make-a-budget-header.component';
import { IncomeComponent } from './income/income.component';

@NgModule({
  declarations: [
    AppComponent,
    MakeABudgetHeaderComponent,
    IncomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
