import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelDirectoryComponent } from './hotel-directory.component';

describe('HotelDirectoryComponent', () => {
  let component: HotelDirectoryComponent;
  let fixture: ComponentFixture<HotelDirectoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelDirectoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelDirectoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
