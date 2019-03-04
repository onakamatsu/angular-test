import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

    user: User;
    constructor(private route: ActivatedRoute,
                private router: Router,
                private userService: UserService) {}

    ngOnInit() {
        const id = this.route.snapshot.paramMap.get('id');
        this.userService.getUserById(id).subscribe((user: User) => {
            this.user = user;
        })
    }

    handlerSubmit(user: User) {
        this.userService.updateUser(user.id, user)
             .subscribe(response => {
                 this.router.navigate(['/users']);
             });
    }

}
