import { Component } from "@angular/core";
import { UserService } from  "../services/users.service";

@Component ({
    selector:'register',
    templateUrl:"../views/register.component.html",
    providers: [UserService]
})

export class RegisterComponent {
    name:string;
    lastName: string;
    user:string;
    email:string;
    password:string;
    confirmPassword: string;
    message: string;

    constructor(private _userService: UserService){ //PRIVATE LIMITA A ESTA CLASE 

           this.name=''
           this.lastName=''
           this.user=''
           this.email=''
           this.password=''
           this.confirmPassword=''
       }

    register(){

        let payload: any={};

            //validacion de los campos llenos 
            if(this.name != '' && this.user != '' && this.email != '' && this.password != ''){
                if(this.password === this.confirmPassword){//VALIDACION DE CONFIRMACION DE PASSWORD
                    
                    //ESTE PAYLOAD ESTA LIGADO AL PAYLOAD QUE CREAMOS ANTES DE LOS IFS
                    payload.name = this.name
                    payload.lastName = this.lastName
                    payload.user = this.user
                    payload.email = this.email
                    payload.password = this.password
                    payload.confirmPassword = this.confirmPassword

                    console.log(payload)

                        this._userService.registerUser(payload)
                            .subscribe(
                                data =>{
                                    if(data){
                                        console.log(data)
                                    }
                                },
                                err =>{
                                    console.log(err)
                                }
                            )

                }else{
                    this.message = 'Error en confirmacion de password'
                }
            }
    
    }
}