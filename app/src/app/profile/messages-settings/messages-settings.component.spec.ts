import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagesSettingsComponent } from './messages-settings.component';

describe('MessagesSettingsComponent', () => {
  let component: MessagesSettingsComponent;
  let fixture: ComponentFixture<MessagesSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessagesSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessagesSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
