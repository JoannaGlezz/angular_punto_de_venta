import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
import { RegisterComponent } from './register.component';
import { DeleteComponent } from './delete.component';
import { PrincipalComponent } from './principal'

const routes: Routes = [
  {path:'principal', component: PrincipalComponent},
  {path:'login', component: LoginComponent},
  {path:'register', component: RegisterComponent},
  {path: 'delete', component: DeleteComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
