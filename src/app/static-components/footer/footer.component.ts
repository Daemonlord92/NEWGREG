import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.less']
})
export class FooterComponent implements OnInit {
  currentTime: Date = new Date();
  year: number = 0;
  constructor() { 

  }
  

  ngOnInit(): void {
    this.year = this.currentTime.getFullYear();
  }

}
