import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HungryService } from '../hungry.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {

  @Input() person?: { name: string, age: number };
  @Output() delete: EventEmitter<void> = new EventEmitter<void>();


  constructor(public hungryService: HungryService) {}

  onRemove() {
    this.delete.emit();
  }
}
