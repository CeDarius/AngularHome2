import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  showMessage = false;
  buttonMessage = `Books list`;
  buttonText = `Show message`;

  constructor() { }

  ngOnInit(): void {
  }

  myCustomOnClickHandler($event: MouseEvent): void {
    this.showMessage = !this.showMessage;
    this.showMessage ? this.buttonText = `Hide message` : this.buttonText = `Show message`;
  }

}
