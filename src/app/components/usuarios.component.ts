import { Component } from "@angular/core";
import { UserService } from  "../services/users.service";


@Component ({
    selector:'usuarios',
    templateUrl:"../views/usuarios.html",
    providers: [UserService]
})

export class UsuariosComponent {


    // constructor(private _userService: UserService){ //PRIVATE LIMITA A ESTA CLASE 

        
    // }
    
}