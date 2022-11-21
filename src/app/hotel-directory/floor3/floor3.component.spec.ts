import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Floor3Component } from './floor3.component';

describe('Floor3Component', () => {
  let component: Floor3Component;
  let fixture: ComponentFixture<Floor3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Floor3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Floor3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
