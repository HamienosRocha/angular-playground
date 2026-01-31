import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TripleCountDisplay } from './triple-count-display';

describe('TripleCountDisplay', () => {
  let component: TripleCountDisplay;
  let fixture: ComponentFixture<TripleCountDisplay>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TripleCountDisplay]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TripleCountDisplay);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
