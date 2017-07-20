/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { List2Component } from './list2.component';

describe('List2Component', () => {
  let component: List2Component;
  let fixture: ComponentFixture<List2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ List2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(List2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
