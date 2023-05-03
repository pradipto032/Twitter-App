import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowmytweetsComponent } from './showmytweets.component';

describe('ShowmytweetsComponent', () => {
  let component: ShowmytweetsComponent;
  let fixture: ComponentFixture<ShowmytweetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowmytweetsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowmytweetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
