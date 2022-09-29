import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  submitted = false;
  user: User;
  constructor() {
    this.user={id:1, username:'James',email:'james@gmail.com',phone:8910989021}
    }

  ngOnInit(): void {
  }

  onSubmit() {
    this.submitted = true;
    alert("User details submitted!!")
  }

}
