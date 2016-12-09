import { Component, OnInit } from '@angular/core';
import {Routes, Route} from "@angular/router";
import {UserService} from "../../../../services/user.service";
import {NodeService} from "../../../../services/node.service";

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss']
})
export class HomeComponent implements OnInit {

  private nodeList;

  constructor(private nodes: NodeService, private _user: UserService) {
    _user.user$.subscribe(data => {
      nodes.author = data
    });
    nodes.getNodes().subscribe();
    nodes.nodes$.subscribe(data => {
      this.nodeList = data;
    });
  }


  ngOnInit() {
  }

}

export const HomeRoute:Route = {
  path: "home",
  component: HomeComponent
};
