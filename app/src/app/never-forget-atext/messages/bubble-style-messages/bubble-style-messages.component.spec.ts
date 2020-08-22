import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BubbleStyleMessagesComponent } from './bubble-style-messages.component';

describe('BubbleStyleMessagesComponent', () => {
  let component: BubbleStyleMessagesComponent;
  let fixture: ComponentFixture<BubbleStyleMessagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BubbleStyleMessagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BubbleStyleMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
