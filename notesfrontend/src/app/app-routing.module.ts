import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { LoginComponent } from './auth/login/login.component';
// import { RegisterComponent } from './auth/register/register.component';
import { CreateNotesComponent } from './create-notes/create-notes.component';
import { EditComponent } from './edit/edit.component';
import { HomeComponent } from './home/home.component';
import { ViewNotesComponent } from './view-notes/view-notes.component';
//import { ErrorComponent } from './error/error.component'


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'create-notes', component: CreateNotesComponent},
  // {path: 'login', component: LoginComponent},
  // {path: 'register', component: RegisterComponent},
  {path: 'app-view-notes', component: ViewNotesComponent},
  {path: 'app-edit', component: EditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  //imports: [RouterModule.forRoot(routes), BrowserModule, FormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }








