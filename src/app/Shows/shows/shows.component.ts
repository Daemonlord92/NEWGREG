import { Component, OnInit } from '@angular/core';
import {ishows} from '../../Interfaces/ishows'

@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.less']
})

export class ShowsComponent{
eventOne: ishows = new ishows(1, 10, 'Hoops and Hops', '123 Main st, Simsbury, CT', 12, 'Aug.', 'https://goo.gl/maps/PYCBnv1C8QFZHv5z8')
eventTwo: ishows = new ishows(2, 10, 'Leigon 351', '123 rubber duck ave. st, Holyoke, MA', 14, 'Aug.', 'https://goo.gl/maps/PYCBnv1C8QFZHv5z8')
eventThree: ishows = new ishows(3, 10, 'Platform Dance Club', '25 Fart Rd. Providence, RI', 25, 'Aug.', 'https://goo.gl/maps/PYCBnv1C8QFZHv5z8')
eventFour: ishows = new ishows(4, 10, 'Hitchcock Brewing', '123 Main st, Bernardston, MA', 2, 'Sept.', 'https://goo.gl/maps/PYCBnv1C8QFZHv5z8')
eventFive: ishows = new ishows(5, 10, 'Gregs Moms House', '196 Hazard Ave. Somers, CT', 23, 'Sept.', 'https://goo.gl/maps/PYCBnv1C8QFZHv5z8')

shows: ishows[] =
[
  this.eventOne,
  this.eventTwo,
  this.eventThree,
  this.eventFour,
  this.eventFive,
]


  constructor() { }

  ngOnInit(): void {
    this.shows
  }

}
