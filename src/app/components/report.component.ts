import { Component } from "@angular/core";
import { UserService } from "../services/users.service";
import { ResourceLoader } from '@angular/compiler';


@Component({
    selector: 'report',
    templateUrl: "../views/report.html",
    providers: [UserService]
})

export class ReportComponent {

    listProducts = [];
    nameProduct: string;
    skuProduct: string;
    dateProduct: string;

    startDate: string;
    endDate: string;

    constructor(private _userService: UserService) {
        this.nameProduct = ''
        this.skuProduct = ''

        this.startDate = ''
        this.endDate = ''
    }

    ngOnInit() {
        this._userService.allProducts().subscribe(
            data => {
                if (data) {
                    this.listProducts = data;
                    console.log(data)
                }
            }, err => {
                console.log(err);
            })
    }

    filterProducts() {

        //FILTRAR POR NOMBRE DEL PRODUCTO
        //LA VALIDACION DEBE CONTENER LOS  DOS CAMPOS ANTERIORES EN ESTE CASO SKU Y DATE DEBEN ESTAR VACIOS PARA
        //COMPLETAR LA VALIDACION 
        if (this.skuProduct == '' && this.startDate == '' && this.endDate =='') {
            this._userService.getProductsByName(this.nameProduct).subscribe(
                data => {
                    if (data) {
                        this.listProducts = data;
                        this.nameProduct = " ";

                    }
                }, err => {
                    console.log(err);
                })
        }

        //FILTRAR POR SKU
        //LA VALIDACION DEBE CONTENER LOS  DOS CAMPOS ANTERIORES EN ESTE CASO PRODUCT Y DATE DEBEN ESTAR VACIOS PARA
        //COMPLETAR LA VALIDACION 
        if (this.nameProduct == '' && this.startDate == '' && this.endDate =='') {
            this._userService.getProductsBySku(this.skuProduct).subscribe(
                data => {
                    if (data) {
                        this.listProducts = data;

                        this.skuProduct = " ";
                    }
                }, err => {
                    console.log(err);
                })
        }

        //FILTRAR POR RANGO DE FECHA
        //LA VALIDACION DEBE CONTENER LOS  DOS CAMPOS ANTERIORES EN ESTE CASO PRODUCT Y SKU DEBEN ESTAR VACIOS PARA
        //COMPLETAR LA VALIDACION 

        if (this.nameProduct == '' && this.skuProduct == '') {
            this._userService.dateProducts(this.startDate, this.endDate).subscribe(
                data => {
                    if (data) {
                        this.listProducts = data;
                        this.startDate = " ";
                        this.endDate = " ";
                    }
                }, err => {
                    console.log(err);
                })
        }

    }

    //FUNCION DELETE PRODUCT
    deleteOneProduct(sku){
        // console.log("SKU", sku, "NO")
        // console.log(sku)

        this._userService.deleteProduct(sku).subscribe(
            data => {
                if (data) {
                    sku = data;
                    console.log(data)
                }
            }, err => {
                console.log(err);
            })
    }

}


