import { Component } from "@angular/core";

@Component ({
    selector:'login',
    templateUrl:"../views/login.component.html"
})

export class LoginComponent {
    user:string;
    password:string;

    authenticate(){
        console.log('user:' + this.user);
        console.log('password:' + this.password)

    }
}