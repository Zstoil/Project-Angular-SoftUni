import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { UserModule } from './user/user.module';
import { MainComponent } from './main/main.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    UserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }