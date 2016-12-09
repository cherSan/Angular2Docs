import { Component, OnInit } from '@angular/core';
import {Route, Router} from "@angular/router";
import {UserService} from "../../services/user.service";

@Component({
  templateUrl: 'init.component.html',
  styleUrls: ['init.component.scss'],
})
export class InitComponent implements OnInit {
  constructor(private _userService: UserService, private _router: Router) {
    this._userService.user$.subscribe(data =>{
      if( data ) {
        this._router.navigate(["en"]);
      }
    })
  }

  private go = (userName) => {
    this._userService.auth(userName)
      .subscribe(() => {
        this._router.navigate(["en"]);
      });
  };

  ngOnInit() {
  }

}


export const InitRouter: Route = {
  path: '',
  component: InitComponent
};
