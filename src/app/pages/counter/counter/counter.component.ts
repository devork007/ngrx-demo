import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectCount } from 'src/app/store/counter/counter.selectors';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent implements OnInit {
  constructor(private store: Store) {}
  count$: Observable<any> = new Observable();
  count: number = 0;
  ngOnInit(): void {
    this.count$ = this.store.select(selectCount);
  }
}
