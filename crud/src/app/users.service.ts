import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  url = 'http://localhost:3000/users';

  getUsersList(){
    return this.http.get(this.url);
  }

  saveUser(data :any){
    return this.http.post(this.url, data);
  }

  deleteUserInfo(id :any){
    return this.http.delete(`${this.url}/${id}`);
  }

}
