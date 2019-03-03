import { OnInit, Component } from '@angular/core';
import { UserService } from '../user.service';
import { User } from 'src/app/models/user.model';


@Component({
    selector:'app-user',
    templateUrl:'./user.component.html'
})
export class UserComponent implements OnInit{
    
    users: User[];
    ngOnInit(): void {
        this.users=[];
        this.getUsers();
    }

    constructor(private userService: UserService){}

    private getUsers() {
        this.userService.getUsers()
            .subscribe((users: User[]) => {
                console.log("users->", users);
                this.users = users;
            });
    }

    deleteUser(user: User){
        console.log("user en padre->",user);
        //this.products = this.products.filter(prd => prd !== prod);
        const { id } = user;
        this.userService.deleteUser(id)
            .subscribe(response =>{
            console.log(response);
            //this.products = this.products.filter(prd => prd.id !== prod.id);
            this.getUsers();
        });

    }

}