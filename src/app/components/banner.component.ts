import { Component } from "@angular/core";
import { UserService } from  "../services/users.service";


@Component ({
    selector:'banner',
    templateUrl:"../views/banner.component.html",
    providers: [UserService]
})

export class BannerComponent {


    // constructor(private _userService: UserService){ //PRIVATE LIMITA A ESTA CLASE 

        
    // }
    
}