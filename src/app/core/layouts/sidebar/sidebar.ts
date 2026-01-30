import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

type MenuItem = {
  label: string;
  to?: string;
  icon?: string;
  children?: MenuItem[];
};

type Menu = MenuItem[];

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {

  protected defaultMenuItemIcon = 'fa-solid fa-arrow-right';

  protected menu: Menu = [
    {
      label: 'Home',
      to: '/',
      icon: 'fa-regular fa-house',
    },
    {
      label: 'Events',
      to: 'events',
      icon: 'fa-solid fa-arrow-right-arrow-left'
    },
  ];
}
