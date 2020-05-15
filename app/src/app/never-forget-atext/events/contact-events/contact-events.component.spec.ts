import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactEventsComponent } from './contact-events.component';

describe('ContactEventsComponent', () => {
  let component: ContactEventsComponent;
  let fixture: ComponentFixture<ContactEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
