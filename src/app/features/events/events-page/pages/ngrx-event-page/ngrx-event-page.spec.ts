import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgrxEventPage } from './ngrx-event-page';

describe('NgrxEventPage', () => {
  let component: NgrxEventPage;
  let fixture: ComponentFixture<NgrxEventPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgrxEventPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgrxEventPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
