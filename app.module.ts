import { HttpClientModule } from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { StorageService } from "./storage.service";
import { MovieComponent } from "./movie/movie.component";
import { MovieDetailsComponent } from "./movie/movie-details/movie-details.component";
import { SearchPipe } from "./search.pipe";
import { MoviesService } from "./movies.service";
import { MoviesListComponent } from "./movies-list/movies-list.component";
import { UserService } from "./shared/user.service";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
const routes: Routes = [
  { path: "", component: MoviesListComponent },
  { path: "movies", component: MoviesListComponent },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    MovieDetailsComponent,
    SearchPipe,
    MoviesListComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,

    RouterModule.forRoot(routes)
  ],
  providers: [StorageService, MoviesService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule {}
