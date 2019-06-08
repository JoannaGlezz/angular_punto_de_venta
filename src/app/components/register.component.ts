import { Component } from "@angular/core";
import { UserService } from "../services/users.service";
import { reject } from 'q';

@Component({
    selector: 'register',
    templateUrl: "../views/register.component.html",
    providers: [UserService]
})

export class RegisterComponent {
    name: string;
    lastName: string;
    user: string;
    email: string;
    password: string;
    confirmPassword: string;
    message: string;

    constructor(private _userService: UserService) { //PRIVATE LIMITA A ESTA CLASE 

        this.name = ''
        this.lastName = ''
        this.user = ''
        this.email = ''
        this.password = ''
        this.confirmPassword = ''
    }

    register() {

        let payload: any = {};

        //validacion de los campos llenos 
        if (this.name == '' || this.user == '' || this.email == '' || this.password == '') {
            this.message = ("No se llenaron todos los campos")
            return
        }

        //VALIDACION PARA NO DUPLICAR USUARIOS
        payload.user = this.user
        payload.email = this.email
        
        new Promise((resolve, reject) => {
            this._userService.findUser(payload).subscribe(response => {
                if (response.message == null) {
                    resolve()
                } else {
                    reject('El usuario ya existe')
                }
            }, error => {
                console.log('Ocurrio un error en registerUser', error)
                reject(error)
            })
        })
        
        .then(res => {

            //VALIDACION DE CONFIRMACION DE PASSWORD
            if (this.password != this.confirmPassword) {
                throw new Error('Confirmacion de password incorrecta')
            }

            //ESTE PAYLOAD ESTA LIGADO AL PAYLOAD QUE CREAMOS ANTES DE LOS IFS
            payload.name = this.name
            payload.lastName = this.lastName
            payload.user = this.user
            payload.email = this.email
            payload.password = this.password
            payload.confirmPassword = this.confirmPassword


            //ACCEDIENDO AL SERVICIO
            this._userService.registerUser(payload).subscribe(data => {
                if (data) {
                    // this.message = 'Registro Exitoso'
                    this.name = ''
                    this.lastName = ''
                    this.user = ''
                    this.email = ''
                    this.password = ''
                    this.confirmPassword = ''

                    alert("Registro Exitoso!")
                }
            }, err => {
                console.log(err)
            })

        }
        
        ).catch(error => {
            console.log('Error en registerUser', error)
            this.message = error
        } )






    }
}