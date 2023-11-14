/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OwnersComponent } from './owners.component';

describe('OwnersComponent', () => {
  let component: OwnersComponent;
  let fixture: ComponentFixture<OwnersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
