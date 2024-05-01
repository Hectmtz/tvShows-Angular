import { Routes } from '@angular/router';
import { HomePage } from './pages/home/home.page';
import { ContactPage } from './pages/contact/contact.page';
import { AboutPage } from './pages/about/about.page';
import { TvShowPage } from './pages/tv-show/tv-show.page';
import { ErrorPage } from './pages/error/error.page';
import { LoginPage } from './pages/login/login.page';
import { crudPage } from './pages/crud/crud.page';

export const routes: Routes = [
    { path: "", redirectTo: "tvShow", pathMatch: "full" },
    { path: "home", component: HomePage },
    { path: "contact", component: ContactPage },
    { path: "about", component: AboutPage },
    { path: "tvShow", component: TvShowPage },
    { path: "login", component: LoginPage },
    { path: "error", component: ErrorPage },
    { path: "crud", component: crudPage },
    { path: "**", redirectTo: "error", pathMatch: "full" }
];