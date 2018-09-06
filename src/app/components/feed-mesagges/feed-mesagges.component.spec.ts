import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedMesaggesComponent } from './feed-mesagges.component';

describe('FeedMesaggesComponent', () => {
  let component: FeedMesaggesComponent;
  let fixture: ComponentFixture<FeedMesaggesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedMesaggesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedMesaggesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
