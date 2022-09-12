import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-view-users',
  templateUrl: './view-users.component.html',
  styleUrls: ['./view-users.component.css']
})
export class ViewUsersComponent implements OnInit {

  constructor(private user : UserService) { }

  collection: any = [];

  ngOnInit(): void {
    this.user.getList().subscribe((result) =>{
      this.collection = result;
      console.warn(result);
    })
  }

  deleteUser(id : any){
    this.collection.splice(id-1,1)
    this.user.deleteUser(id).subscribe((result) => {
    });
  }

}
