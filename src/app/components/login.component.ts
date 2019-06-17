import { Component } from "@angular/core";
import { UserService } from "../services/users.service";
import { Router } from '@angular/router';//importamos clase router para usarla en el constructor y despues en la funcion  en forma de objeto this


@Component({
    selector: 'login',
    templateUrl: "../views/login.component.html",
    providers: [UserService]
})

export class LoginComponent {
    email: string;
    password: string;
    message: string;

    constructor(private _userService: UserService, private router: Router) { //PRIVATE LIMITA A ESTA CLASE 

        this.email = ''
        this.password = ''
    }

    login() { //ESTE LOGIN ES LA FUNCION DEL BOTON CREADO EN EL HTML
        let payload: any = {};

        if (this.email == '' && this.password == '') {
            this.message = ("No se llenaron todos los campos")
            return
        }




        payload.email = this.email
        payload.password = this.password

        new Promise((resolve, reject) => {
            this._userService.loginUser(payload).subscribe( //LOGINUSER ES CONEXION CON EL URL QUE ES EL HTTP Y EL PATH QUE AGREGAMOS PARA ESTA PAGINA
                
                //nuevo forma de declaracion de la funcion function
                
                response => {
                    // console.log(response)
                    if (response.message == null) {
                        reject("Datos incorrectos")
                    } else {
                        resolve('Bienvenido')
                    }

                }
                , error => {
                    console.log('El servidor de backend fallo', error)
                    reject(error)
                })
        }).then(res => {
            this.router.navigateByUrl("usuarios")
        }).catch(mensajeError => {
            this.message = mensajeError
        })

    }
}