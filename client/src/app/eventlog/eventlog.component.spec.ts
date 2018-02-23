import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventlogComponent } from './eventlog.component';

describe('EventlogComponent', () => {
  let component: EventlogComponent;
  let fixture: ComponentFixture<EventlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
