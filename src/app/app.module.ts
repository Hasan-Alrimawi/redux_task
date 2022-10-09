import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FormComponent } from './components/form/form.component';
import { TesterComponent } from './views/tester/tester.component';
import { StoreModule } from '@ngrx/store';
import { reducer } from './reducers/changer.reducers';
import { FormsModule } from '@angular/forms';
import { appState } from './app.state';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FormComponent,
    TesterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(
      {state:reducer}
    ),
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
