import { Component } from "@angular/core";
import { UserService } from "../services/users.service";
import { reject } from 'q';

@Component({
    selector: 'new_article',
    templateUrl: "../views/altaP.html",
    providers: [UserService]
})

export class ArticComponent {
    sku: string;
    name: string;
    costo: string;
    categoria: string;
    detalles: string;
    message: string;

    constructor(private _userService: UserService) { //PRIVATE LIMITA A ESTA CLASE 

        this.sku = ''
        this.name = ''
        this.costo = ''
        this.categoria = ''
        this.detalles = ''
    }

    alta() {

        let payload: any = {};

        //validacion de los campos llenos 
        if (this.sku == '' || this.name == '' || this.costo == '' || this.categoria == '' || this.detalles == '') {
            this.message = ("No se llenaron todos los campos")
            return
        }

        //VALIDACION PARA NO DUPLICAR USUARIOS

        payload.sku = this.sku
        payload.name = this.name
        payload.costo = this.costo
        payload.categoria = this.categoria
        payload.detalles = this.detalles


        //ACCEDIENDO AL SERVICIO
        this._userService.new_Article(payload).subscribe(data => {
            if (data) {
                // this.message = 'Registro Exitoso'
                this.sku =''
                this.name = ''
                this.costo = ''
                this.categoria = ''
                this.detalles = ''

                alert("Articulo Registrado Coreectamente!")
            }
        }, err => {
            console.log(err)
        })






    }
}