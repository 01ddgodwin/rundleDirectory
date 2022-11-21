import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CityDirectoryComponent } from './city-directory.component';

describe('CityDirectoryComponent', () => {
  let component: CityDirectoryComponent;
  let fixture: ComponentFixture<CityDirectoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CityDirectoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CityDirectoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
