import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleEntryComponent } from './single-entry.component';

describe('SingleEntryComponent', () => {
  let component: SingleEntryComponent;
  let fixture: ComponentFixture<SingleEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
