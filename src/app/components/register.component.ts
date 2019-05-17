import { Component } from "@angular/core";

@Component ({
    selector:'register',
    templateUrl:"../views/register.component.html"
})

export class RegisterComponent {
    name:string;
    lastName: string;
    user:string;
    password:string;
    password2:string;

    register(){
        console.log('name:' + this.name);
        console.log('lastName:' + this.lastName);
        console.log('user:' + this.user);
        console.log('password:' + this.password)
        console.log('password:' + this.password2)

    }
}