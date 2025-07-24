import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contro-flow',
  imports: [FormsModule],
  templateUrl: './contro-flow.html',
  styleUrl: './contro-flow.css'
})
export class ControFlow {

  // isParagraphVisible: boolean = false;
  isParaVisisble: boolean | undefined;
  startingMonthName: string = 'jan';
  cityList: string[] = ['Delhi', 'Mumbai', 'Chennai', 'Kolkata'];
  studentList: any[] = [
    { name: 'John', age: 20, city: 'Delhi', isActive: false },
    { name: 'Jane', age: 22, city: 'Mumbai', isActive: false },
    { name: 'Mike', age: 21, city: 'Chennai', isActive: true },
    { name: 'Sara', age: 23, city: 'Kolkata', isActive: false }
  ];


  showP() {
    this.isParaVisisble = true;
  }

  hideP() {
    this.isParaVisisble = false;
  }
}
