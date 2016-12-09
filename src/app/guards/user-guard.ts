import {Injectable} from "@angular/core";
import {CanActivate, Router} from "@angular/router";
import {UserService} from "../services/user.service";

@Injectable()
export class UserGuard implements CanActivate {
  name: string;
  constructor(private _router: Router, private _userService: UserService) {
    _userService.user$.subscribe(data => this.name = data)
  }

  canActivate(_router) {
    if( !this.name ) {
      this._router.navigate(['']);
      return false;
    }
    return true;
  }
}
