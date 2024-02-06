import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {

  @Input() person?: { name: string, age: number };
  @Output() delete: EventEmitter<void> = new EventEmitter<void>();

  onRemove() {
    this.delete.emit();
  }
}
