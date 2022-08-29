import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-users',
  templateUrl: './edit-users.component.html',
  styleUrls: ['./edit-users.component.css']
})
export class EditUsersComponent implements OnInit {

  editUser = new FormGroup({
    name : new FormControl(''),
    email : new FormControl(''),
  });

  constructor(private user: UserService,private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.user.getCurrentUser(this.router.snapshot.params['id']).subscribe((result:any) => {
      this.editUser = new FormGroup({
        name : new FormControl(result.name),
        email : new FormControl(result.email),
      });
    });
  }

  edit(){
    this.user.editUser(this.router.snapshot.params['id'],this.editUser.value).subscribe((result:any) =>{
      
    });
  }

}
