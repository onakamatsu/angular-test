import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { MatInputModule, MatPaginatorModule, MatProgressSpinnerModule,
  MatSortModule, MatTableModule } from '@angular/material';
import 'hammerjs';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { UserFormComponent } from './components/user/user-form/user-form.component';
import { UserListComponent } from './components/user/user-list/user-list.component';
import { UserEditComponent } from './components/user/user-edit/user-edit.component';
import { UserCreateComponent } from './components/user/user-create/user-create.component';
import { UserService } from './components/user.service';
import { UserComponent } from './components/user/user.component';
import { routes } from './app.routing';
import { ConfirmModalComponent } from './components/modals/confirm-modal/confirm-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserFormComponent,
    UserListComponent,
    UserEditComponent,
    UserCreateComponent,
    ConfirmModalComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, FormsModule,RouterModule.forRoot(routes),AngularFontAwesomeModule,MatInputModule, MatPaginatorModule, MatProgressSpinnerModule, 
    MatSortModule, MatTableModule,BrowserAnimationsModule
    
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
