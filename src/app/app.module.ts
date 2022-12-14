import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FilmsComponent } from './films/films.component';
import { RentalsComponent } from './rentals/rentals.component';
import { UsersComponent } from './users/users.component';
import { LoginComponent } from './login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { AddEditUsersComponent } from './users/add-edit-users/add-edit-users.component';
import { AddRentalsComponent } from './rentals/add-rentals/add-rentals.component';
import { AddEditFilmsComponent } from './films/add-edit-films/add-edit-films.component';
import { FullDescriptionComponent } from './films/full-description/full-description.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FilmsComponent,
    RentalsComponent,
    UsersComponent,
    LoginComponent,
    AddEditUsersComponent,
    AddRentalsComponent,
    AddEditFilmsComponent,
    FullDescriptionComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
