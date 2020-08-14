import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SentTriggerBubbleStyleComponent } from './sent-trigger-bubble-style.component';

describe('SentTriggerBubbleStyleComponent', () => {
  let component: SentTriggerBubbleStyleComponent;
  let fixture: ComponentFixture<SentTriggerBubbleStyleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SentTriggerBubbleStyleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SentTriggerBubbleStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
