import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user',
  imports: [FormsModule],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User implements OnInit{

  userList: any[] = [];

  userObject: any = {
  "userId": 0,
  "emailId": "string",
  "password": "string",
  "fullName": "string",
  "mobileNo": "string"
  };

  http = inject(HttpClient);

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.http.get("https://api.freeprojectapi.com/api/GoalTracker/getAllUsers").subscribe((res:any)=>{
      this.userList = res;
    }, (error:any)=>{
      console.error("Error fetching users:", error);
    });
  }

  onSaveUser() {
    debugger
    this.http.post("https://api.freeprojectapi.com/api/GoalTracker/register", this.userObject).subscribe({
      next:(result) => {
        debugger
        alert("User saved successfully");
        this.getUsers();
      },
      error:(error) => {
        debugger
        alert("Error saving user: " + error.message);
      }
    })
  }
}
