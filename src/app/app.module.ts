import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { InitComponent } from './pages/init/init.component';
import { WrapperComponent } from './pages/wrapper/wrapper.component';
import { PublicComponent } from './pages/wrapper/public/public.component';
import { HomeComponent } from './pages/wrapper/public/home/home.component';
import {RouterModule} from "@angular/router";
import {navigation} from "./pages/navigation";
import {UserService} from "./services/user.service";
import {UserGuard} from "./guards/user-guard";
import {NodeService} from "./services/node.service";
import { HeaderComponent } from './components/header/header.component';
import { HeaderMenuComponent } from './components/header/header-menu/header-menu.component';
import { AllNotesComponent } from './pages/wrapper/public/all-notes/all-notes.component';
import { SidePanelComponent } from './components/side-panel/side-panel.component';
import {MaterialModule}  from '@angular/material';
import { NodeElementComponent } from './components/node-element/node-element.component';

@NgModule({
  declarations: [
    AppComponent,
    InitComponent,
    WrapperComponent,
    PublicComponent,
    HomeComponent,
    HeaderComponent,
    HeaderMenuComponent,
    AllNotesComponent,
    SidePanelComponent,
    NodeElementComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    RouterModule.forRoot(navigation)
  ],
  providers: [
    UserService,
    NodeService,

    UserGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
