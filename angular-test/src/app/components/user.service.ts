import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { User } from '../models/user.model';

@Injectable()
export class UserService{
    
    private baseUrl: string;
    constructor(private http: HttpClient){
        console.log("enviroment.api->",environment.api);
        this.baseUrl = environment.api;
    }
    getUsers(){
        const fullUrl = `${this.baseUrl}/users/`;
        console.log("getUsers fullUrl -> ", fullUrl);
        return this.http.get(fullUrl);
    }

    getUserById(id: string){

        const fullUrl = `${this.baseUrl}/users/${id}`;
        console.log("getUserById fullUrl -> ", fullUrl);
        return this.http.get(fullUrl);
    }

    createUser(user: User){
        const fullUrl = `${this.baseUrl}/users/`;
        console.log("createUser fullUrl -> ", fullUrl);
        return this.http.post(fullUrl, user);
    }

    updateUser(id: string, user: User){
        const fullUrl = `${this.baseUrl}/users/${id}`;
        console.log("updateUser fullUrl -> ", fullUrl);
        return this.http.put(fullUrl, user);
    }

    deleteUser(id: string){
        const fullUrl = `${this.baseUrl}/users/${id}`;
        console.log("deleteUser fullUrl -> ", fullUrl);
        let response = this.http.delete(fullUrl);
        return response;
    }
}