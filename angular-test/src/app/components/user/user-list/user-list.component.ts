import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

    ngOnInit(){
      console.log("users-> ", this.users);   
    }

  @Input()
  users : User[];

  constructor(private router: Router){ }

  @Output() deleteUser: EventEmitter<any> = new EventEmitter<any>();
  
  handlerDelete(user: User){
      console.log("user en hijo->",user);
      this.deleteUser.emit(user);
  }

  handlerUpdate(id: string){
      this.router.navigate(['users', id]);
  }

}
