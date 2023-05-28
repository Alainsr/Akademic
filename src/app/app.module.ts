import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ResidenciaComponent } from './pages/residencia/residencia.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LoginComponent } from './pages/login/login.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { UserNavComponent } from './components/user-nav/user-nav.component';
import { FilterPipe } from './pipes/filter.pipe';
import { SearchComponent } from './components/search/search.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { PersonalComponent } from './pages/personal/personal.component';
import { AuthService } from './auth.service';
import { MaterialModule } from './material/material.module';
import { MatAutocompleteModule } from "@angular/material/autocomplete";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ResidenciaComponent,
    SidebarComponent,
    LoginComponent,
    FooterComponent,
    UserNavComponent,
    FilterPipe,
    SearchComponent,
    PersonalComponent,
    
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule,
    MatAutocompleteModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
