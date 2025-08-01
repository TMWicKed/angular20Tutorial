import { AsyncPipe, DatePipe, DecimalPipe, JsonPipe, LowerCasePipe, NgClass, NgStyle, SlicePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, OnChanges, OnDestroy, OnInit, signal } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-att-directive',
  imports: [NgClass, NgStyle, UpperCasePipe, LowerCasePipe, TitleCasePipe, SlicePipe, JsonPipe, AsyncPipe, DecimalPipe, DatePipe],
  templateUrl: './att-directive.html',
  styleUrl: './att-directive.css'
})
export class AttDirective implements OnInit, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, OnChanges{

  div1ClassName = signal<string>("" );
  isDiv2Green = signal<boolean>(false);
  firstName: string = "Harman";
  courseName: string = "Angular 20 tutorial";
  rollNoList: number[] = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
  // Example of an object data source
  objExample: any = {
    name: "Harman",
    age: 25,
    course: "Angular 20 tutorial"
  }
  // Example of an observable data source
  dataObservable: Observable<string> = of("Hello from Observable!");
  // Example of a promise data source
  promiseData: Promise<string> = new Promise(resolve => {
    setTimeout(() => resolve("Hello from Promise!"), 2000);
  })
  valueToFormat: number = 1234.5678;
  dateToFormat: Date = new Date();



  constructor() {
    // Initial setup if needed
    console.log("constructor initialized");
  }

  ngOnInit() : void {
    // This method is called after the component is initialized
    console.log("ngOnInit initialized");
    
  }

  ngAfterContentChecked(): void {
    // This method is called after the content has been checked
    console.log("ngAfterContentChecked initialized");
  }

  ngAfterContentInit(): void {
    // This method is called after the content has been initialized
    console.log("ngAfterContentInit initialized");
  }   

  ngAfterViewInit(): void {
    // This method is called after the view has been initialized
    console.log("ngAfterViewInit initialized");
  }

  ngAfterViewChecked(): void {
    // This method is called after the view has been checked
    console.log("ngAfterViewChecked initialized");
  }

  ngOnChanges(): void {
    // This method is called when any data-bound property of a directive changes
    console.log("ngOnChanges initialized");
  }

  ngOnDestroy(): void {
    // This method is called just before the component is destroyed
    console.log("ngOnDestroy initialized");
  }

  setBgClass(str: string) {
    this.div1ClassName.set(str);
  }


  toggleDiv2Color() {
    this.isDiv2Green.set(!this.isDiv2Green());
  }

}
