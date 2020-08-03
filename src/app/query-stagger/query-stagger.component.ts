import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate, animation, AnimationEvent, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-query-stagger',
  templateUrl: './query-stagger.component.html',
  styleUrls: ['./query-stagger.component.css'],
  animations: [
    trigger('entering', [
      transition(':enter', [
        query('.item', [
          style({ opacity: 0, transform: 'translateX(-100px)' }),
          stagger(100, [
            animate(500, style({ opacity: 1, transform: 'none' })),
          ])
        ])
      ])
    ])
  ]
})
export class QueryStaggerComponent implements OnInit {

  allItems = ['item1', 'item2', 'item3'];

  constructor() { }

  ngOnInit() {
  }

}