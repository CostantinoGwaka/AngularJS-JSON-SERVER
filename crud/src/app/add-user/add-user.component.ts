import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import {UsersService } from '../users.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  addUserNew = new FormGroup({
    "name" : new FormControl(""),
    "email" : new FormControl(""),
  });

  constructor(private userService: UsersService) { }

  collections : any[] =[];

  ngOnInit(): void {
    this.userService.getUsersList().subscribe((users :any) =>{
        this.collections = users;
    });
  }

  collection(){
    this.userService.saveUser(this.addUserNew.value).subscribe((result)=>{
      console.log("added", result);
    });
  }

  deleteUser(id :any){
    this.collections.splice(id-1,1);
    this.userService.deleteUserInfo(id).subscribe((result)=>{
      
    });
  }

 

}
