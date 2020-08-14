import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SentTriggerSelectionListStyleComponent } from './sent-trigger-selection-list-style.component';

describe('SentTriggerSelectionListStyleComponent', () => {
  let component: SentTriggerSelectionListStyleComponent;
  let fixture: ComponentFixture<SentTriggerSelectionListStyleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SentTriggerSelectionListStyleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SentTriggerSelectionListStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
