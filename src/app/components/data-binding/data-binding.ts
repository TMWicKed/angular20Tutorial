import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css'
})
export class DataBinding {

  courseName: string =  'Angular 20 Tutorial';
  productPrice: number = 12500;
  maxLength: number = 5;
  minChar: number = 3;
  inputType: string = 'text';
  myClassName: string = 'myColor';

  constructor() {
    this.courseName = 'Angular 20 Tutorial - Data Binding';
  }

  showWelcomeMessage(){
    alert(`Welcome to ${this.courseName}`);
  }

  changeCourseName(newName: string) {
    this.courseName = newName;
    alert(`Course name changed to: ${this.courseName}`);
  }

  onCityChange(event: Event) {
    const city = (event.target as HTMLSelectElement).value;
    alert(`City Changed to: ${city}`);
  }

  selectedCity: string = '';
  onCityChangeNgModule(event: Event) {
    const city = (event.target as HTMLSelectElement).value;
    alert(`City Changed to: ${city}`);
  }
}
