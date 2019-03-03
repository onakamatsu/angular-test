import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserFormComponent } from './components/user/user-form/user-form.component';
import { UserListComponent } from './components/user/user-list/user-list.component';
import { UserEditComponent } from './components/user/user-edit/user-edit.component';
import { UserCreateComponent } from './components/user/user-create/user-create.component';

@NgModule({
  declarations: [
    AppComponent,
    UserFormComponent,
    UserListComponent,
    UserEditComponent,
    UserCreateComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
