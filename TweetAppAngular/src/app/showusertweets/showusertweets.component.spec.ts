import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowusertweetsComponent } from './showusertweets.component';

describe('ShowusertweetsComponent', () => {
  let component: ShowusertweetsComponent;
  let fixture: ComponentFixture<ShowusertweetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowusertweetsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowusertweetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
