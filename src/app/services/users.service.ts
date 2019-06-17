
//todos los servicios deben usar el Injectable
import { Injectable } from '@angular/core';

//y agregamos la libreria de Http que la usaremos para agregar información en nuestra petición de los headers
import { Http, Headers } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable()

export class UserService {
  private url: string;
  private port: string;

  constructor(private _http: Http) {
    this.url = '/api';
  };

  loginUser(payload: any) {
    let headers: Headers = new Headers();
    const url = this.url + '/login/user/'; //CONEXION CON EL URL QUE ES EL HTTP Y EL PATH QUE AGREGAMOS PARA ESTA PAGINA

    headers.append('Content-Type', 'application/json');
    //

    return this._http.post(url, payload, { headers: headers })
      .pipe(
        map(
          res => {
            const data = res.text() ? res.json() : [{}];

            return data;
          }
        )
      )
  };

  //FUNCION REGISRTER USER
  registerUser(payload: any) {
    let headers: Headers = new Headers();
    const url = this.url + '/register/user/'; //CONEXION CON EL URL QUE ES EL HTTP Y EL PATH QEU AGREGAMOS PARA ESTA PAGINA

    headers.append('Content-Type', 'application/json');
    //

    return this._http.post(url, payload, { headers: headers })
      .pipe(
        map(
          res => {
            const data = res.text() ? res.json() : [{}];

            return data;
          }
        )
      )
  };

  //FUNCION LOGUEAR USUARIOS
  findUser(payload: any){
    let headers: Headers = new Headers()
    const url = this.url + '/find/user/' //USE LA MISMA URL DEL SERIVICO CREADO

    return this._http.post(url, payload, { headers: headers })
      .pipe(
        map(
          res => {
            const data = res.text() ? res.json() : [{}]

            return data
          }
        )
      )
  };


  //FUNCION DELETE USER
  deleteUser(payload: any) {
    let headers: Headers = new Headers();
    const url = this.url + '/delete/user/';

    headers.append('Content-Type', 'application/json');

    return this._http.post(url, payload, { headers: headers })
      .pipe(
        map(
          res => {
            const data = res.text() ? res.json() : [{}];

            return data;
          }
        )
      )
  };

  //FUNCION REGITRAR NUEVO ARTICULO
  new_Article(payload: any) {
    let headers: Headers = new Headers();
    const url = this.url + '/new_article/'; 
    headers.append('Content-Type', 'application/json');
    return this._http.post(url, payload, { headers: headers })
      .pipe(
        map(
          res => {
            const data = res.text() ? res.json() : [{}];

            return data;
          }
        )
      )
  };

  //FUNCION DELETE PRODUCT
  deleteProduct(payload: any) {
    let headers: Headers = new Headers();
    const url = this.url + '/deleteProduct/';

    headers.append('Content-Type', 'application/json');

    return this._http.post(url, payload, { headers: headers })
      .pipe(
        map(
          res => {
            const data = res.text() ? res.json() : [{}];

            return data;
          }
        )
      )
  };

 // ---------------------------------------------------------------------------->

  //FUNCION OBTENER TODOS LOS PRODUCTOS
  allProducts() {
    let headers: Headers = new Headers();
    const url = this.url + '/getAllProducts';

    headers.append('Content-Type', 'application/json');

    return this._http.get(url, { headers: headers })
      .pipe(
        map(
          res => {
            const data = res.text() ? res.json() : [{}];

            return data;
          }
        )
      )
  };

  //FUNCION OBTENER LOS PRODUCTOS POR FECHA DE CRAECION 
  dateProducts(startDate:string, endDate:string) {
    let headers: Headers = new Headers();
    const url = this.url + '/getProductsByRangeDate/' + startDate + '/' + endDate;

    headers.append('Content-Type', 'application/json');

    return this._http.get(url, { headers: headers })
      .pipe(
        map(
          res => {
            const data = res.text() ? res.json() : [{}];

            return data;
          }
        )
      )
  };

  //FUNCION OBTENER LOS PRODUCTOS POR FECHA DE CRAECION 
  getProductsByName(producto: string) {
    let headers: Headers = new Headers();
    const url = this.url + '/getProductsByName/' + producto;

    headers.append('Content-Type', 'application/json');

    return this._http.get(url, { headers: headers })
      .pipe(
        map(
          res => {
            const data = res.text() ? res.json() : [{}];

            return data;
          }
        )
      )
  };


  //FUNCION OBTENER LOS PRODUCTOS POR FECHA DE CRAECION 
  getProductsBySku(sku:string) {
    let headers: Headers = new Headers();
    const url = this.url + '/getProductsBySku/' + sku;

    headers.append('Content-Type', 'application/json');

    return this._http.get(url, { headers: headers })
      .pipe(
        map(
          res => {
            const data = res.text() ? res.json() : [{}];

            return data;
          }
        )
      )
  };


}