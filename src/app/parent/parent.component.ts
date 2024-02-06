import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {

  people = [
    { name: 'Aurelien', age: 123 },
    { name: 'Hugo', age: 124},
    { name: 'Camille', age: 125}
  ];
  andre = { name: 'andre', age: 40 };

  onDelete(i: number) {
    this.people.splice(i, 1);
  }

}
