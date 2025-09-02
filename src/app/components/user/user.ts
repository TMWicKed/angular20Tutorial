import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Master } from '../../services/master';

@Component({
  selector: 'app-user',
  imports: [FormsModule],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User implements OnInit {
  userList: any[] = [];

  userObject: any = {
    userId: 0,
    emailId: '',
    password: '',
    fullName: '',
    mobileNo: '',
  };

  http = inject(HttpClient);

  // Injecting the Master service
  masterService = inject(Master);

  // either you can so the above one or through constructor to define a service
  // constructor(private master: Master){

  // }

  ngOnInit(): void {
    this.getUsers();

    debugger;
    const result = this.masterService.getSum(5, 10);

    // if we define a variable in the service we can access that accross all the pipes components and directives 
    debugger;
    const appData = this.masterService.appName;
  }

  getUsers() {
    debugger;
    // this is the old way to handle errors as you can see the subscribe method has been crossed so it's basically not used anymore
    // this.http
    //   .get('https://api.freeprojectapi.com/api/GoalTracker/getAllUsers')
    // instead of using the API directly we can use service
    this.masterService.getUsers().subscribe(
      (res: any) => {
        this.userList = res;
      },
      (error: any) => {
        console.error('Error fetching users:', error);
      }
    );
  }

  onSaveUser() {
    debugger;
    // this is the new way to handle errors using the next and error methods
    this.http
      .post(
        'https://api.freeprojectapi.com/api/GoalTracker/register',
        this.userObject
      )
      .subscribe({
        next: (result) => {
          debugger;
          alert('User saved successfully');
          this.getUsers();
        },
        error: (error) => {
          debugger;
          alert('Error saving user: ' + error.error);
        },
      });
  }
  onEdit(item: any) {
    debugger;
    this.userObject = item;
  }

  onReset() {
    debugger;
    this.userObject = {
      userId: 0,
      emailId: '',
      password: '',
      fullName: '',
      mobileNo: '',
    };
  }

  onUpdateUser() {
    debugger;
    this.http
      .put(
        'https://api.freeprojectapi.com/api/GoalTracker/updateUser?id=' +
          this.userObject.userId,
        this.userObject
      )
      .subscribe({
        next: () => {
          alert('User updated successfully');
          this.getUsers();
        },
        error: (error) => {
          alert('Error updating user: ' + error.error);
        },
      });
  }

  onDelete(id: number) {
    debugger;
    const isDelete = confirm('Are you sure you want to delete this user?');
    if (isDelete) {
      this.http
        .delete(
          'https://api.freeprojectapi.com/api/GoalTracker/deleteUserById?id=' +
            id
        )
        .subscribe({
          next: () => {
            alert('User deleted successfully');
            this.getUsers();
          },
          error: (error) => {
            alert('Error deleting user: ' + error.error);
          },
        });
    }
  }
}
