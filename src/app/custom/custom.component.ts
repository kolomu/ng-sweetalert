import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html'
})
export class CustomComponent implements OnInit {

  @Input() someValue: string;

  constructor() { }

  ngOnInit() {
  }

}
