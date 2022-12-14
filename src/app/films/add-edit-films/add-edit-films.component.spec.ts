import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditFilmsComponent } from './add-edit-films.component';

describe('AddEditFilmsComponent', () => {
  let component: AddEditFilmsComponent;
  let fixture: ComponentFixture<AddEditFilmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditFilmsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditFilmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
