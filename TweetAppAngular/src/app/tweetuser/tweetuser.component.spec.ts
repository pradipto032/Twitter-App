import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TweetuserComponent } from './tweetuser.component';

describe('TweetuserComponent', () => {
  let component: TweetuserComponent;
  let fixture: ComponentFixture<TweetuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TweetuserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TweetuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
