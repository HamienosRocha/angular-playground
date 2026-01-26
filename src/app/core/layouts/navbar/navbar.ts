import { Component, input } from '@angular/core';
import { ThemeController } from "../../../shared/components/buttons/theme-controller/theme-controller";

@Component({
  selector: 'app-navbar',
  imports: [ThemeController],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  title = input('');
  drawerId = input('');
}
