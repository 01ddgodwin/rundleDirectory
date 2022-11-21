import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlasgowDirectoryComponent } from './glasgow-directory.component';

describe('GlasgowDirectoryComponent', () => {
  let component: GlasgowDirectoryComponent;
  let fixture: ComponentFixture<GlasgowDirectoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlasgowDirectoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GlasgowDirectoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
