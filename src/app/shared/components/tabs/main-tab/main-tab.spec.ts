import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainTab } from './main-tab';

describe('MainTab', () => {
  let component: MainTab;
  let fixture: ComponentFixture<MainTab>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainTab]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainTab);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
