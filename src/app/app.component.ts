import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  person = { name: "andre", age: 40 };
  link = 'http://www.goggle.com';
  names = ['florian', 'hamza', 'maxime', 'andre'];

  constructor(private router: Router) {}

  incrementAge() {
    this.person.age++;
  }

  goToPage2() {
    this.router.navigateByUrl('/page2/10');
  }
}
