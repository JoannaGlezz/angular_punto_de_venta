import { Component } from "@angular/core";
import { UserService } from  "../services/users.service";

@Component ({
    selector:'delete',
    templateUrl:"../views/delete.component.html",
    providers: [UserService]
})

export class DeleteComponent {
    user:string;
    email:string;
    password:string;
    confirmPassword:string;
    message: string;

    constructor(private _userService: UserService){

           this.user=''
           this.email=''
           this.password=''
           this.confirmPassword =''
           
       }

    delete(){ 
        
        // console.log('funciona')

        let payload: any={};

            if(this.user != '' && this.email != '' && this.password != ''){
                if(this.password === this.confirmPassword){
                    
                    payload.user = this.user
                    payload.email = this.email
                    payload.password = this.password
                    payload.confirmPassword = this.confirmPassword

                    // console.log(payload)

                        this._userService.deleteUser(payload)
                            .subscribe(
                                data =>{
                                    if(data){
                                        console.log(data)
                                        this.message = 'El registro fue eliminado correctamente'
                                        this.user = ''
                                        this.email = ''
                                        this.password = ''
                                        this.confirmPassword = ''
                                    }
                                },
                                err =>{
                                    console.log(err)
                                }
                            )

                }else{
                    this.message = 'Error al eliminar usuario'
                }
            }
    
    }
}