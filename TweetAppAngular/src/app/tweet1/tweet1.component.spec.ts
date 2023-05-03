import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tweet1Component } from './tweet1.component';

describe('Tweet1Component', () => {
  let component: Tweet1Component;
  let fixture: ComponentFixture<Tweet1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tweet1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Tweet1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
