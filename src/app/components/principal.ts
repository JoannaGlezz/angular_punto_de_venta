import { Component } from "@angular/core";
import { UserService } from  "../services/users.service";


@Component ({
    selector:'principal',
    templateUrl:"../views/principal.html",
    providers: [UserService]
})

export class PrincipalComponent {


    constructor(private _userService: UserService){ //PRIVATE LIMITA A ESTA CLASE 

        
    }
    
}