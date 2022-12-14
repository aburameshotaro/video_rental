import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmsComponent } from './films/films.component';
import { RentalsComponent } from './rentals/rentals.component';
import { UsersComponent } from './users/users.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo:'/login'},
  {path: 'login', component:LoginComponent},
  {path: 'login/register', component:RegisterComponent},
  {path: 'films', component:FilmsComponent},
  {path: 'rentals', component:RentalsComponent},
  {path: 'users', component: UsersComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes,{ useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
