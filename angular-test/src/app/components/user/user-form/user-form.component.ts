import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

    @Input() user :User;
    @Output() handlerSubmit : EventEmitter<User> = new EventEmitter<User>();

    constructor(){}

    ngOnInit(){
      console.log("user input ->" , this.user);
    }

    onSubmit(f:any){

        if(f.valid){
           this.handlerSubmit.emit(this.user);  
           console.log("onSubmit ->", this.user);   
        
        }

    }
}
