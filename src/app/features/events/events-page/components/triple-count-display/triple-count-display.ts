import { Component, input } from '@angular/core';

@Component({
  selector: 'app-triple-count-display',
  imports: [],
  templateUrl: './triple-count-display.html',
  styleUrl: './triple-count-display.css',
})
export class TripleCountDisplay {
  count1 = input.required<number>();
  count2 = input.required<number>();
  parentCount = input.required<number>();
}
