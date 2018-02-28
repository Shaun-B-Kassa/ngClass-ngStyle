import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  displayText: boolean = false;
  numberOfClicks: number[] = [];
  counter: number = 1;


  onDisplay() {
    this.displayText = !this.displayText;
    this.numberOfClicks.push(this.counter++);
  }


}
