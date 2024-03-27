import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  decrement,
  increment,
  reset,
} from 'src/app/store/counter/counter.actions';

@Component({
  selector: 'app-counter-button',
  templateUrl: './counter-button.component.html',
  styleUrls: ['./counter-button.component.css'],
})
export class CounterButtonComponent implements OnInit {
  constructor(private store: Store) {}
  @Input() buttonType: string = '';

  ngOnInit(): void {}

  onClick(event: any) {
    if (this.buttonType == 'Increment') {
      this.store.dispatch(increment());
    } else if (this.buttonType == 'Decrement') {
      this.store.dispatch(decrement());
    } else {
      this.store.dispatch(reset());
    }
  }
}
