import { Component } from "@angular/core";
import { UserService } from "../services/users.service";

@Component({
    selector: 'deleteProduct',
    templateUrl: "../views/deleteProduct.html",
    providers: [UserService]
})

export class DeleteProductComponent {
    sku: string;
    message: string;

    constructor(private _userService: UserService) {

        this.sku = ''
    }

    deleteProduct() {

        // console.log('funciona')

        let payload: any = {};

        if (this.sku != '') {

            payload.sku = this.sku

            this._userService.deleteProduct(payload)
                .subscribe(
                    data => {
                        if (data) {
                            console.log(data)

                            this.sku = ''
                        }
                    },
                    err => {
                        console.log(err)
                    }
                )

        } else {
            this.message = 'No se ingresaron datos para eliminar'
        }
    }

}