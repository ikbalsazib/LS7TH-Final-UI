import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import { BlogCardComponent } from './blog-card/blog-card.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ContactReactiveComponent } from './pages/contact-reactive/contact-reactive.component';
import {HttpClientModule} from '@angular/common/http';
import { ApiBlogComponent } from './pages/api-blog/api-blog.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogCardComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ContactReactiveComponent,
    ApiBlogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatListModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
