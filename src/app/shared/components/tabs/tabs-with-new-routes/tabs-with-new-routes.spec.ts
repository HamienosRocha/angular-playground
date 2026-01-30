import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsWithNewRoutes } from './tabs-with-new-routes';

describe('TabsWithNewRoutes', () => {
  let component: TabsWithNewRoutes;
  let fixture: ComponentFixture<TabsWithNewRoutes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabsWithNewRoutes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabsWithNewRoutes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
