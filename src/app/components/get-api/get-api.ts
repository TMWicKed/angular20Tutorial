import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-api',
  imports: [],
  templateUrl: './get-api.html',
  styleUrl: './get-api.css'
})
export class GetApi implements OnInit {


  // dependencies injected via Angular's dependency injection system
  http = inject(HttpClient);
  userList: any[] = [];
  todoList: any[] = [];
  busUserList: any[] = [];

  ngOnInit() {
    debugger
    this.getUsers();
    debugger
    this.getTodo();
    debugger  
    this.getAllBusBookingUsers();
  }

  getUsers() {
    debugger
    this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((result:any)=>{
      debugger
      this.userList = result;
    })
  }

  getTodo() {
    debugger
    this.http.get("https://jsonplaceholder.typicode.com/todos").subscribe((response:any)=>{
      debugger
      this.todoList = response;
    })
  }

  getAllBusBookingUsers() {
    debugger
    this.http.get("https://api.freeprojectapi.com/api/BusBooking/GetAllUsers").subscribe((req:any)=>{
      debugger
      this.busUserList = req.data;
    })
  }
}
