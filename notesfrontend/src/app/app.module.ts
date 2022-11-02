import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ViewNotesComponent } from './view-notes/view-notes.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


// import { ReactiveFormsModule } from '@angular/forms';
// import { Injectable } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateNotesComponent } from './create-notes/create-notes.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { EditComponent } from './edit/edit.component';
import { RatingsComponent } from './ratings/ratings.component';


@NgModule({
  declarations: [
    AppComponent,
    CreateNotesComponent,
    HomeComponent,
    NavbarComponent,
    ViewNotesComponent,
    EditComponent,
    RatingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule

    //BrowserAnimationsModule,
    
    // Injectable,
    


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
