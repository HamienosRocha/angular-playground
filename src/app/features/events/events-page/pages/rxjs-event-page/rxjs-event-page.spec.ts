import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsEventPage } from './rxjs-event-page';

describe('RxjsEventPage', () => {
  let component: RxjsEventPage;
  let fixture: ComponentFixture<RxjsEventPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RxjsEventPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RxjsEventPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
