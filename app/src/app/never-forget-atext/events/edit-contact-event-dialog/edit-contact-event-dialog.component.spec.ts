import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditContactEventDialogComponent } from './edit-contact-event-dialog.component';

describe('EditContactEventDialogComponent', () => {
  let component: EditContactEventDialogComponent;
  let fixture: ComponentFixture<EditContactEventDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditContactEventDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditContactEventDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
