import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HungryService {

  constructor() { }

  isHungry: boolean = false;
}
