import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
import { RegisterComponent } from './register.component';
import { DeleteComponent } from './delete.component';
import { PrincipalComponent } from './principal';
import { ArticComponent } from './alta.producto.componet';
import { DeleteProductComponent } from './deleteProduct';
import{ UsuariosComponent } from './usuarios.component';
import { ReportComponent } from '../components/report.component';

import { from } from 'rxjs';

const routes: Routes = [//RUTAS QUE VAN A IR EN EL NAVEGADOR, 
  {path:'principal', component: PrincipalComponent},
  {path:'login', component: LoginComponent},
  {path:'register', component: RegisterComponent},
  {path: 'delete', component: DeleteComponent},
  {path: 'altaP', component: ArticComponent},
  {path: 'deleteProduct', component: DeleteProductComponent},
  {path: 'usuarios', component: UsuariosComponent},
  {path: 'report', component: ReportComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
