import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from '../components/login.component';
import { BannerComponent } from '../components/banner.component';
import { RegisterComponent } from '../components/register.component';
import { DeleteComponent } from '../components/delete.component';
import { PrincipalComponent} from '../components/principal';
import { ArticComponent } from '../components/alta.producto.componet';
import { DeleteProductComponent } from '../components/deleteProduct';
import { UsuariosComponent } from '../components/usuarios.component';
import { ReportComponent } from '../components/report.component';
import { from } from 'rxjs';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BannerComponent,
    RegisterComponent,
    DeleteComponent,
    PrincipalComponent,
    ArticComponent,
    DeleteProductComponent,
    UsuariosComponent,
    ReportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    NgxDatatableModule,
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
