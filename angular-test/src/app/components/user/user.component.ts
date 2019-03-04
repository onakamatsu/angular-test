import { OnInit, Component } from '@angular/core';
import { UserService } from '../user.service';
import { User } from 'src/app/models/user.model';


@Component({
    selector:'app-user',
    templateUrl:'./user.component.html'
})
export class UserComponent implements OnInit{
    question: string;
    isActive: boolean;
    users: User[];
    userToDelete: User;

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
        
        this.question = `¿Esta seguro que desea eliminar el usuario <b>"${user.name}"</b>? `;
        this.isActive = true;
        this.userToDelete = user;
    }

    onResponse(confirmation: boolean) {

        if (confirmation) {
            const { id } = this.userToDelete;
            this.userService.deleteUser(id)
                .subscribe(response =>{
                console.log(response);
                this.getUsers();
            });
        } else {
            this.isActive = false;
        }
    }

}