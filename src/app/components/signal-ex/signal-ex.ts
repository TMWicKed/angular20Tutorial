import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-signal-ex',
  imports: [],
  templateUrl: './signal-ex.html',
  styleUrl: './signal-ex.css'
})
export class SignalEx {  // Example of using signals in Angular
  firstName: string = 'Harman';
  courseName = signal<string>('Angular 20 Tutorial'); //normal signal syntax
  courseDuration = signal('15 videos'); //normal signal syntax

  courseDetails = computed(() => this.courseName() + ' - ' + this.courseDuration()); //computed signal

  constructor() {
    console.log(this.firstName); 
    this.firstName = 'Harman Rashidi';
    console.log(this.firstName);

    console.log(this.courseName());
    this.courseName.set('Angular 20 Tutorial - Updated');
    console.log(this.courseName());

    console.log(this.courseDuration());
    this.courseDuration.set('20 videos');
    console.log(this.courseDuration());

  }
}
