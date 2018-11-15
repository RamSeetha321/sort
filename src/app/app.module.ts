import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { RouterModule,Routes } from '@angular/router';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
 RouterModule.forRoot([
  {path:'',component:HeaderComponent},
   {path:"content",component:ContentComponent},
   {path:"header",component:HeaderComponent},
   {path:"footer",component:FooterComponent},
 ])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
