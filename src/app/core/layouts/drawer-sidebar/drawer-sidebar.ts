import { Component } from '@angular/core';
import { Navbar } from "../navbar/navbar";
import { Sidebar } from "../sidebar/sidebar";
import { DefaultPage } from "../default-page/default-page";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-drawer-sidebar',
  templateUrl: './drawer-sidebar.html',
  styleUrl: './drawer-sidebar.css',
  imports: [Navbar, Sidebar, DefaultPage, RouterOutlet],
})
export class DrawerSidebar {
  drawerId = 'main-drawer';
}
