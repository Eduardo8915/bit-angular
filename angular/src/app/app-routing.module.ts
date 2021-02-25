import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { CharactersComponent } from './pages/characters/characters.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    pathMatch:'full'
  },
  {
    path:'contact-us',
    component: ContactUsComponent

  },
  {
    path:'characters',
    component: CharactersComponent

  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'dashboard',
    component: DashboardComponent

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
