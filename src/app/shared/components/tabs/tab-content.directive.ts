import { Directive, input, TemplateRef } from "@angular/core";

@Directive({ selector: '[tabContent]' })
export class TabContentDirective {
  tabContent = input.required<number | string | null>(); // the tab id

  constructor(public template: TemplateRef<any>) { }
}