import { Component, OnInit } from '@angular/core';
import {Routes} from "@angular/router";
import {HomeRoute} from "./home/home.component";
import {AllNotesRoute} from "./all-notes/all-notes.component";

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.scss']
})
export class PublicComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

let children: Routes = [
  HomeRoute,
  AllNotesRoute
];

export const PublicRoute:Routes = [
  {
    path: 'public',
    redirectTo: 'public/home',
    pathMatch: 'full'
  },
  {
    path: "public",
    component: PublicComponent,
    children: children
  }
];
