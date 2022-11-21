import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FortPeckDirectoryComponent } from './fort-peck-directory.component';

describe('FortPeckDirectoryComponent', () => {
  let component: FortPeckDirectoryComponent;
  let fixture: ComponentFixture<FortPeckDirectoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FortPeckDirectoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FortPeckDirectoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
