import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Sort} from '@angular/material';
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
      console.log("navegar a edit->",id);
      this.router.navigate(['users', id]);
  }

  sortData(sort: Sort) {
    console.log("sort", sort);
    const data = this.users.slice();
    if (!sort.active || sort.direction === '') {
      this.users = data;
      return;
    }
    this.users = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'id': return compare(a.id, b.id, isAsc);
        case 'name': return compare(a.name, b.name, isAsc);
        case 'email': return compare(a.email, b.email, isAsc);
        case 'role': return compare(a.role, b.role, isAsc);
        case 'years': return compare(a.years, b.years, isAsc);
        default: return 0;
      }
    });
  }

  
}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}



