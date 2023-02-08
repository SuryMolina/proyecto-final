import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { EditpasswordComponent } from './editpassword/editpassword.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { ProgramsComponent } from './programs/programs.component';
import { SigninComponent } from './signin/signin.component';
import { UsComponent } from './us/us.component';

const routes: Routes = [
  {
    path:'home',
    component:HomeComponent,
  },
  {
    path:'us',
    component:UsComponent,
  },
  {
    path:'programs',
    component:ProgramsComponent,
  },
  {
    path:'contact',
    component:ContactComponent,
  },
  {
    path:'profile',
    component:ProfileComponent,
  },
  {
    path:'login',
    component:LoginComponent,
  },
  {
    path:'signin',
    component:SigninComponent,
  },
  {
    path:'editprofile',
    component:EditprofileComponent,
  },
  {
    path:'editpassword',
    component:EditpasswordComponent,
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
