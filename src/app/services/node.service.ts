/**
 * Created by st13133 on 12/6/2016.
 */
import { Injectable } from '@angular/core';
import {Http, RequestOptions, Headers, Response} from "@angular/http";
import {Observable, Subject} from "rxjs";

class Node {
  constructor(public name: string, public text: string) {

  }
}

@Injectable()
export class NodeService {
  url = 'http://localhost:3000/nodes';
  headers: Headers;
  options:RequestOptions;

  nodes: Subject<Array<Object>> = new Subject<Array<Object>>();
  nodes$ = this.nodes.asObservable();

  private _author: string;
  set author(author) {
    this._author = author;
  }
  get author() {
    return this._author;
  }

  constructor (private _http: Http) {
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.options = new RequestOptions({ headers: this.headers , withCredentials: true});
  }

  getNodes = (filter:string = '') => {
    return this._http.get(`${this.url}?filter=${filter}&author=${this._author}`, this.options)
      .map((res:Response) => {
        console.log(res);
        this.nodes.next(res.json())
      })
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  };

  saveNodes = (data) => {
    return this._http.post(this.url, data, this.options)
      .flatMap(() => this.getNodes())
  };
}
