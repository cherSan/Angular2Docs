import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header-menu',
  templateUrl: 'header-menu.component.html',
  styleUrls: ['header-menu.component.scss']
})
export class HeaderMenuComponent implements OnInit {

  logOut = () => {
    this._u.logout().subscribe(() => {
      this._r.navigate(['']);
    })
  };

  constructor(private _u: UserService, private _r:Router) { }

  ngOnInit() {
  }

}
