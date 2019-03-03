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

    newUser :User=new User();

    constructor(private router: Router,
                private userService: UserService) {}

    handleSubmit(user: User) {
        
        this.userService.createUser(user)
             .subscribe(response => {
                 this.router.navigate(['/users']);
             });
    }

}
