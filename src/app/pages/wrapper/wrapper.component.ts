import { Component, OnInit } from '@angular/core';
import {Routes} from "@angular/router";
import {PublicRoute} from "./public/public.component";
import {UserGuard} from "../../guards/user-guard";
import {NodeService} from "../../services/node.service";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-wrapper',
  templateUrl: 'wrapper.component.html',
  styleUrls: ['wrapper.component.scss']
})
export class WrapperComponent implements OnInit {
  username: string;

  constructor( private _userService: UserService) {

  }

  ngOnInit() {
    this._userService.user$.subscribe(data => {
      this.username = data;

      console.log(1111111111111, data);
    });
  }

}

let children:Routes = [
  ...PublicRoute
];

export const WrapperRoute:Routes = [
  {
    path: ':lang',
    redirectTo: ':lang/public',
    pathMatch: 'full'
  },
  {
    path: ":lang",
    component: WrapperComponent,
    children: children,
    canActivate: [UserGuard]
  }
]
