import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {MselectorComponent} from '../components/mselector/mselector.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatSelectModule, MatInputModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {ProviderService} from '../components/mselector/Provider';

@NgModule({
  declarations: [
    AppComponent,
    MselectorComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatInputModule
  ],
  exports: [
    MselectorComponent
  ],
  providers: [ProviderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
