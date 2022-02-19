import { Component } from '@angular/core';
// import { selectSlice } from '@rx-angular/state/selections';
import { insert } from '@rx-angular/cdk/transformations';
import { RxState, selectSlice } from '@rx-angular/state';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent extends RxState<{ test: string[] }> {
  title = 'rxa-v12-project';

  state$ = this.select();
  test$ = this.select().pipe(
    selectSlice(['test']),
    map(({ test }) => test)
  );

  constructor() {
    super();
    this.set({ test: insert(['baz'], 'foo') });
  }
}
