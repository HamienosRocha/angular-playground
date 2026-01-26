import { Component } from '@angular/core';
import { DrawerSidebar } from "../drawer-sidebar/drawer-sidebar";

@Component({
  selector: 'app-main-layout',
  imports: [DrawerSidebar],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.css',
})
export class MainLayout {

}
