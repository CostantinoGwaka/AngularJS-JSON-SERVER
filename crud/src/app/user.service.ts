import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  url = 'http://localhost:3000/users';

  collection : any = [];

  getList(){
   return this.http.get("http://127.0.0.1/php/get_user.php");
  }

  saveUser(data : any){
    return this.http.post(this.url, data);
  }

  deleteUser(id : any){
    return this.http.delete(`${this.url}/${id}`);
  }

  getCurrentUser(id : any){
    return this.http.get(`${this.url}/${id}`);
  }

  editUser(id : any, data : any){
    return this.http.put(`${this.url}/${id}`,data);
  }

}
