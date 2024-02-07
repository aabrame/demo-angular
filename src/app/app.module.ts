import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UnAutreComposantComponent } from './un-autre-composant/un-autre-composant.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { HomeComponent } from './home/home.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { FormTemplateDrivenComponent } from './form-template-driven/form-template-driven.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormReactiveComponent } from './form-reactive/form-reactive.component';

@NgModule({
  declarations: [
    AppComponent,
    UnAutreComposantComponent,
    Page1Component,
    Page2Component,
    HomeComponent,
    ParentComponent,
    ChildComponent,
    FormTemplateDrivenComponent,
    FormReactiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
