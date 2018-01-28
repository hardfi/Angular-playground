import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ButtonModule, InputTextModule, MenubarModule, InputTextareaModule, CardModule, PanelModule, DropdownModule, CheckboxModule, RadioButtonModule, TabViewModule} from 'primeng/primeng';
import { AppComponent } from './app.component';
import { Router, RouterModule} from "@angular/router";
import { FormComponent } from './form/form.component';
import { HeaderComponent } from './header/header.component';
import { ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    MenubarModule,
    ButtonModule,
    InputTextModule,
    ReactiveFormsModule,
    InputTextareaModule,
    CardModule,
    PanelModule,
    DropdownModule,
    CheckboxModule,
    RadioButtonModule,
    TabViewModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'form', pathMatch: 'full' },
      { path: 'form', component: FormComponent},
      { path: 'cook', component: HeaderComponent },
    ]),
  ],
  exports: [
    MenubarModule,
    ButtonModule,
    InputTextModule,
    RouterModule,
    InputTextareaModule,
    CardModule,
    PanelModule,
    DropdownModule,
    CheckboxModule,
    RadioButtonModule,
    TabViewModule,
    // ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
