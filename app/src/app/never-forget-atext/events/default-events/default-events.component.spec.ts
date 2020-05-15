import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultEventsComponent } from './default-events.component';

describe('DefaultEventsComponent', () => {
  let component: DefaultEventsComponent;
  let fixture: ComponentFixture<DefaultEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefaultEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
