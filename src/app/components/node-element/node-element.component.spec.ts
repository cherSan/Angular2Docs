/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NodeElementComponent } from './node-element.component';

describe('NodeElementComponent', () => {
  let component: NodeElementComponent;
  let fixture: ComponentFixture<NodeElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NodeElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NodeElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
