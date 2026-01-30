import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputEventPage } from './output-event-page';

describe('OutputEventPage', () => {
  let component: OutputEventPage;
  let fixture: ComponentFixture<OutputEventPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OutputEventPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutputEventPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
