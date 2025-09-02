import {
  DatePipe,
  JsonPipe,
  LowerCasePipe,
  SlicePipe,
  TitleCasePipe,
  UpperCasePipe,
} from '@angular/common';
import { Component } from '@angular/core';
import { NaPipe } from '../pipes/na-pipe';

@Component({
  selector: 'app-pipe-ex',
  imports: [UpperCasePipe, LowerCasePipe, TitleCasePipe, DatePipe, SlicePipe,JsonPipe, NaPipe],
  templateUrl: './pipe-ex.html',
  styleUrl: './pipe-ex.css',
})
export class PipeEx {
  courseName = 'angular 20';
  courseDuration = '40 HOURS';
  courseTitle = 'anGUlar 20 couRSe';
  currentDate = new Date();
  rollNoList: number[] = [101, 102, 103, 104, 105, 106, 107, 108, 109, 110];
  studentObj: any = {
    name: 'John Doe',
    age: 25,
    course: 'Angular 20',
    address: {
      street: '123 Main St',
      city: 'Anytown',
      state: '',
      zip: '12345'
    }
  }
}
