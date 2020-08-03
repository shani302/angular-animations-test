import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate, animation, AnimationEvent } from '@angular/animations';

@Component({
  selector: 'app-in-out',
  templateUrl: './in-out.component.html',
  styleUrls: ['./in-out.component.css'],
  animations: [
    trigger('inOut', [
      // state('in', style({ transform: 'translateX(0)' })),
      // transition('void => *', [
      transition(':enter', [
        style({ transform: 'translateX(-50%)' }),
        animate('500ms')
      ]),
      transition(':leave', [
        animate('500ms', style({ transform: 'translateX(130%)' }))
      ])
    ])
  ]
})
export class InOutComponent implements OnInit {

  allItems = ['item1', 'item2', 'item3'];
  items = [];
  // state = 'in';
  elementsRemoved = 0;

  constructor() { }

  ngOnInit() {
    setTimeout(() => this.items = this.allItems, 1000);
  }

  clearItems() {
    this.items = this.items.splice(1);
  }

  done(event: AnimationEvent) {
    if(event.toState === 'void') {
      this.elementsRemoved++;
    }
  }

}