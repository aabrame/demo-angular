import { Component } from '@angular/core';
import { HungryService } from '../hungry.service';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrl: './page1.component.css'
})
export class Page1Component {

  constructor(public hungryService: HungryService) {}

}
