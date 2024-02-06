import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription, map } from 'rxjs';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrl: './page2.component.css'
})
export class Page2Component implements OnInit, OnDestroy {

    idFromSnapshot?: number;
    idFromObservable?: number;
    subscription?: Subscription;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.idFromSnapshot = Number(this.activatedRoute.snapshot.params['id']);
    this.subscription = this.activatedRoute.params
      .pipe(map(params => Number(params['id'])))
      .subscribe(id => this.idFromObservable = id);
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

}
