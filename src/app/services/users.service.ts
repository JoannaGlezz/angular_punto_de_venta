
//todos los servicios deben usar el Injectable
import { Injectable } from '@angular/core';

//y agregamos la libreria de Http que la usaremos para agregar información en nuestra petición de los headers
import { Http, Headers } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable()

export class UserService{
    private url:string;
    private port:string;
   
    constructor(private _http:Http){
      this.url = '/api';
    }

    loginUser(payload:any){
      let headers: Headers = new Headers();
      this.url += '/login/user/'; //CONEXION CON EL URL QUE ES EL HTTP Y EL PATH QEU AGREGAMOS PARA ESTA PAGINA
   
      headers.append('Content-Type', 'application/json');
      //
   
      return this._http.post(this.url, payload, {headers: headers})
        .pipe(
          map(
            res=>{
              const data = res.text() ? res.json() : [{}];
   
              return data;
            }
          )
        )
    }
   
    registerUser(payload:any){
      let headers: Headers = new Headers();
      this.url += '/register/user/'; //CONEXION CON EL URL QUE ES EL HTTP Y EL PATH QEU AGREGAMOS PARA ESTA PAGINA
   
      headers.append('Content-Type', 'application/json');
      //
   
      return this._http.post(this.url, payload, {headers: headers})
        .pipe(
          map(
            res=>{
              const data = res.text() ? res.json() : [{}];
   
              return data;
            }
          )
        )
    }
    deleteUser(payload:any){
      let headers: Headers = new Headers();
      this.url += '/delete/user';
   
      headers.append('Content-Type', 'application/json');
   
      return this._http.post(this.url, payload, {headers: headers})
        .pipe(
          map(
            res=>{
              const data = res.text() ? res.json() : [{}];
   
              return data;
            }
          )
        )
    }
   }