import { Route } from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { UserEditComponent } from './components/user/user-edit/user-edit.component';
import { UserCreateComponent } from './components/user/user-create/user-create.component';

export const routes: Route[]=[
    {
        path:'users',
        component: UserComponent
    },
    {
        path: 'users/:id',
        component: UserEditComponent
    },
    
    {
        path:'new-user',
        component: UserCreateComponent
    }
    
];