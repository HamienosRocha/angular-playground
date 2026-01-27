import { Component } from '@angular/core';
import { ɵEmptyOutletComponent, RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-default-page',
  imports: [ɵEmptyOutletComponent, RouterOutlet],
  templateUrl: './default-page.html',
  styleUrl: './default-page.css',
})
export class DefaultPage {

}
