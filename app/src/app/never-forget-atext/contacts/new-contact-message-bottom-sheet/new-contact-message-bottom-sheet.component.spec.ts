import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewContactMessageBottomSheetComponent } from './new-contact-message-bottom-sheet.component';

describe('NewContactMessageBottomSheetComponent', () => {
  let component: NewContactMessageBottomSheetComponent;
  let fixture: ComponentFixture<NewContactMessageBottomSheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewContactMessageBottomSheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewContactMessageBottomSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
