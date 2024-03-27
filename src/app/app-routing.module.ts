import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterComponent } from './pages/counter/counter/counter.component';
import { BookComponent } from './pages/book/book.component';

const routes: Routes = [
  { path: 'counter', component: CounterComponent },
  { path: 'book', component: BookComponent },
  { path: '**', redirectTo: 'counter' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
