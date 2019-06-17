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
    producto: string;
    costo: string;
    categoria: string;
    detalles: string;
    message: string;

    constructor(private _userService: UserService) {  

        this.sku = ''
        this.producto = ''
        this.costo = ''
        this.categoria = ''
        this.detalles = ''
    }

    alta() {

        let date = new Date();
        let payload: any = {};

        //validacion de los campos llenos 
        if (this.sku == '' || this.producto == '' || this.costo == '' || this.categoria == '' || this.detalles == '') {
            this.message = ("No se llenaron todos los campos")
            return
        }

        //VALIDACION PARA NO DUPLICAR USUARIOS
        
        payload.creationDate = date
        payload.sku = this.sku
        payload.producto = this.producto
        payload.costo = this.costo
        payload.categoria = this.categoria
        payload.detalles = this.detalles


        //ACCEDIENDO AL SERVICIO
        this._userService.new_Article(payload).subscribe(data => {
            if (data) {
                // this.message = 'Registro Exitoso'
                
                this.sku =''
                this.producto = ''
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