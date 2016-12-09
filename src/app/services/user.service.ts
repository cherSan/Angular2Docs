import { Injectable } from '@angular/core';
import {Subject, Observable, BehaviorSubject} from "rxjs";
import {Headers, RequestOptions, Http, Response} from "@angular/http";

@Injectable()
export class UserService {

  url = 'http://localhost:3000/user';
  headers: Headers;
  options:RequestOptions;

  user: BehaviorSubject<string> = new BehaviorSubject<string>('');
  user$ = this.user.asObservable();


  constructor(private _http: Http) {
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.options = new RequestOptions({ headers: this.headers , withCredentials: true});
    this.check().subscribe();
  }

  auth = (name) => {
    return this._http.post(`${this.url}/auth`, {name:name}, this.options)
      .map((res:Response) => {
        this.user.next(res.json().user)
      })
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  };

  check = () => {
    return this._http.post(`${this.url}/check`, {}, this.options)
      .map((res:Response) => {
        this.user.next(res.json().user)
      })
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  };

  logout = () => {
    return this._http.post(`${this.url}/logout`, {}, this.options)
      .map((res:Response) => {
        this.user.next(null)
      })
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  };
}
