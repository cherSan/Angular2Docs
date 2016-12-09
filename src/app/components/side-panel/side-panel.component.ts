import { Component, OnInit } from '@angular/core';
import {NodeService} from "../../services/node.service";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-side-panel',
  templateUrl: 'side-panel.component.html',
  styleUrls: ['side-panel.component.scss']
})
export class SidePanelComponent implements OnInit {

  isCreate:boolean = false;

  toggle = () => {
    this.isCreate = !this.isCreate;
  };

  save = (title, text) => {
    this._nodeService.saveNodes({
      title: title.value,
      text: text.value,
      author: this.author
    }).subscribe();
    title.value = '';
    text.value = ''
  };

  private author;

  constructor(private _nodeService: NodeService, private _user: UserService) {
    _user.user.subscribe(data => {
      this.author = data
    });
  }

  ngOnInit() {
  }

}
