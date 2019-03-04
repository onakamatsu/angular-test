import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { Router } from '@angular/router';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {
    ngOnInit(): void {
     
    }

    newUser : User=new User();

    constructor(private router: Router, private userService: UserService) {}

    handlerSubmit(user: User) {
        user.id = generate_id(10);
        this.userService.createUser(user)
             .subscribe(response => {
                 this.router.navigate(['/users']);
             });
    }
}

function generate_id(string_length:number){
    let random_string:string = '';
    let random_ascii:number;
    let ascii_low:number = 65;
    let ascii_high:number = 90
    for(let i = 0; i < string_length; i++) {
        random_ascii = Math.floor((Math.random() * (ascii_high - ascii_low)) + ascii_low);
        random_string += String.fromCharCode(random_ascii)
    }
    return random_string
}
