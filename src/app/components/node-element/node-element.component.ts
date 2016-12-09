import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-node-element',
  templateUrl: 'node-element.component.html',
  styleUrls: ['node-element.component.scss']
})
export class NodeElementComponent implements OnInit {

  @Input('title')
  title: string;
  @Input('text')
  text: string;
  @Input('author')
  author: string;
  @Input('date')
  date: Date;

  constructor() { }

  ngOnInit() {
  }

}
