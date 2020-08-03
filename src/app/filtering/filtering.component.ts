import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith, tap } from 'rxjs/operators';
import { trigger, state, style, transition, animate, animation, AnimationEvent, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-filtering',
  templateUrl: './filtering.component.html',
  styleUrls: ['./filtering.component.css'],
  animations: [
    trigger('filterAnimation', [
      transition(':increment', [
        query(':enter', [
          style({ opacity: 0, width: '0px' }),
          stagger(300, [
            animate(500, style({ opacity: 1, width: '*' }))
          ])
        ])
      ]),
      transition(':decrement', [
        query(':leave', [
          stagger(300, [
            animate(500, style({ opacity: 0, width: '0px' }))
          ])
        ])
      ]),
    ])
  ]
})
export class FilteringComponent implements OnInit {

  private allItems = ['item1', 'item11', 'item2', 'item12', 'item21', 'item22', 'item3', 'item31', 'item33'];

  totalItems = -1;

  queryControl = new FormControl('');
  results$: Observable<String[]>;

  constructor() { }

  ngOnInit() {
    this.results$ = this.queryControl.valueChanges.pipe(
      startWith(''),
      map(query => this.allItems.filter(i => i.indexOf(query) !== -1)),
      tap(items => this.totalItems = items.length)
    )
  }

}