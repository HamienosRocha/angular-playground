import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawerSidebar } from './drawer-sidebar';

describe('DrawerSidebar', () => {
  let component: DrawerSidebar;
  let fixture: ComponentFixture<DrawerSidebar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DrawerSidebar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrawerSidebar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
