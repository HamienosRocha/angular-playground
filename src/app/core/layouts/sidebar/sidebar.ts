import { Component } from '@angular/core';

type MenuItem = {
  label: string;
  to?: string;
  icon?: string;
  children?: MenuItem[];
};

type Menu = MenuItem[];

@Component({
  selector: 'app-sidebar',
  imports: [],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {

  protected defaultMenuItemIcon = 'fa-solid fa-arrow-right';

  protected menu: Menu = [
    {
      label: 'Homepage',
      icon: 'fa-regular fa-house'
    },
    {
      label: 'Events',
      icon: 'fa-solid fa-arrow-right-arrow-left'
    },
  ];
}
