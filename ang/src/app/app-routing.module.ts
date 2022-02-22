import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IsConnectedGuard } from './guards/is-connected.guard';
import { IsDisconnectedGuard } from './guards/is-disconnected.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MyArticlesComponent } from './my-articles/my-articles.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent, canActivate: [IsDisconnectedGuard] },
  { path: 'register', component: RegisterComponent, canActivate: [IsDisconnectedGuard]},
  { path: 'myArticles', component: MyArticlesComponent, canActivate: [IsConnectedGuard]},
  { path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
