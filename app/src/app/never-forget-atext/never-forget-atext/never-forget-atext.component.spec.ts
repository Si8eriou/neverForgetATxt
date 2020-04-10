import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NeverForgetATextComponent } from './never-forget-atext.component';

describe('NeverForgetATextComponent', () => {
  let component: NeverForgetATextComponent;
  let fixture: ComponentFixture<NeverForgetATextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NeverForgetATextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NeverForgetATextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
