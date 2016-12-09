import {Component, OnInit, ViewChild, ElementRef, Renderer} from '@angular/core';
import {Route} from "@angular/router";
import {NodeService} from "../../../../services/node.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-all-notes',
  templateUrl: 'all-notes.component.html',
  styleUrls: ['all-notes.component.scss']
})
export class AllNotesComponent implements OnInit {

  private nodeList = [];

  @ViewChild('searchBlock')
  searchBlock: ElementRef;

  constructor(private nodes:NodeService) {
    nodes.author = '';
    nodes.getNodes().subscribe();
    nodes.nodes$.subscribe(data => {
      this.nodeList = data;
    });
  }

  ngOnInit() {
    Observable.fromEvent(this.searchBlock.nativeElement, 'keyup')
      .map(event => this.searchBlock.nativeElement.value)
      .debounceTime(500)
      .distinctUntilChanged()
      .flatMap(value => this.nodes.getNodes(value))
      .subscribe();
  }
}

export const AllNotesRoute:Route = {
  path: "all_notes",
  component: AllNotesComponent
};
