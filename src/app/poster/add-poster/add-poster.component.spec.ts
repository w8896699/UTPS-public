import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPosterComponent } from './add-poster.component';

describe('AddPosterComponent', () => {
  let component: AddPosterComponent;
  let fixture: ComponentFixture<AddPosterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPosterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPosterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
