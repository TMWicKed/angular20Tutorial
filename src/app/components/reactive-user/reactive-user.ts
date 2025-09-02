import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { /*FormsModule,*/ FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-user',
  // instead of form module we import reactive forms module
  imports: [/*FormsModule*/ ReactiveFormsModule],
  templateUrl: './reactive-user.html',
  styleUrl: './reactive-user.css'
})
export class ReactiveUser {
  userList: any[] = [];

  // userObject: any = {
  //   userId: 0,
  //   emailId: '',
  //   password: '',
  //   fullName: '',
  //   mobileNo: ''
  // };

  userForm: FormGroup = new FormGroup({
    userId: new FormControl(0),
    emailId: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [Validators.required, Validators.minLength(6)]),
    fullName: new FormControl(""),
    mobileNo: new FormControl("")
  });
  
  http = inject(HttpClient);

   ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    // this is the old way to handle errors as you can see the subscribe method has been crossed so it's basically not used anymore
    this.http
      .get('https://api.freeprojectapi.com/api/GoalTracker/getAllUsers')
      .subscribe(
        (res: any) => {
          this.userList = res;
        },
        (error: any) => {
          console.error('Error fetching users:', error);
        }
      );
  }

  // onSaveUser() {
  //   debugger;
  //   // this is the new way to handle errors using the next and error methods
  //   this.http
  //     .post(
  //       'https://api.freeprojectapi.com/api/GoalTracker/register',
  //       this.userObject
  //     )
  //     .subscribe({
  //       next: (result) => {
  //         debugger;
  //         alert('User saved successfully');
  //         this.getUsers();
  //       },
  //       error: (error) => {
  //         debugger;
  //         alert('Error saving user: ' + error.error);
  //       },
  //     });
  // }
  // onEdit(item: any) {
  //   debugger;
  //   this.userObject = item;
  // }

  // onReset() {
  //   debugger;
  //   this.userObject = {
  //     userId: 0,
  //     emailId: '',
  //     password: '',
  //     fullName: '',
  //     mobileNo: '',
  //   };
  // }

  // onUpdateUser() {
  //   debugger;
  //   this.http
  //     .put(
  //       'https://api.freeprojectapi.com/api/GoalTracker/updateUser?id=' +
  //         this.userObject.userId,
  //       this.userObject
  //     )
  //     .subscribe({
  //       next: () => {
  //         alert('User updated successfully');
  //         this.getUsers();
  //       },
  //       error: (error) => {
  //         alert('Error updating user: ' + error.error);
  //       },
  //     });
  // }

  // onDelete(id: number) {
  //   debugger;
  //   const isDelete = confirm('Are you sure you want to delete this user?');
  //   if (isDelete) {
  //     this.http
  //       .delete(
  //         'https://api.freeprojectapi.com/api/GoalTracker/deleteUserById?id=' +
  //           id
  //       )
  //       .subscribe({
  //         next: () => {
  //           alert('User deleted successfully');
  //           this.getUsers();
  //         },
  //         error: (error) => {
  //           alert('Error deleting user: ' + error.error);
  //         },
  //       });
  //   }
  // }

  onSaveUser() {
    if (this.userForm.valid) {
      const userData = this.userForm.value;
      this.http.post('https://api.freeprojectapi.com/api/GoalTracker/register', userData)
        .subscribe({
          next: () => {
            alert('User saved successfully');
            this.getUsers();
          },
          error: (error) => {
            alert('Error saving user: ' + error.error);
          }
        });
    } else {
      alert('Please fill all required fields');
    }
  }

  onUpdateUser() {
    if (this.userForm.valid) {
      const userData = this.userForm.value;
      this.http.put('https://api.freeprojectapi.com/api/GoalTracker/updateUser?id=' +userData.userId, userData)
        .subscribe({
          next: () => {
            alert('User updated successfully');
            this.getUsers();
          },
          error: (error) => {
            alert('Error updating user: ' + error.error);
          }
        })
    }
  }

  onReset() {
    this.userForm.setValue({
      userId: 0,
      emailId: '',
      password: '',
      fullName: '',
      mobileNo: '',
    });
  }

  onEdit(item: any) {
    this.userForm.patchValue(item);
  }

  onDelete(id: number) {
    const isDelete = confirm('Are you sure you want to delete this user?');
    if (isDelete) {
      this.http.delete('https://api.freeprojectapi.com/api/GoalTracker/deleteUserById?id=' + id)
        .subscribe({
          next: () => {
            alert('User deleted successfully');
            this.getUsers();
          },
          error: (error) => {
            alert('Error deleting user: ' + error.error);
          }
        })
    }
  }
}
