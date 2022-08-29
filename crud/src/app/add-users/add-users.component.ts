import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styleUrls: ['./add-users.component.css']
})
export class AddUsersComponent implements OnInit {

  addUser = new FormGroup({
    name : new FormControl(''),
    email : new FormControl(''),
  });

  constructor(private user : UserService) { }

  ngOnInit(): void {
  }

  collection(){
    this.user.saveUser(this.addUser.value).subscribe((result) => {
      this.addUser.reset({});
    })
  }

}
