import { Component } from '@angular/core';
import { Tabs } from "@/shared/components/tabs/tabs/tabs";
import { iTabs } from '@/shared/components/models';

@Component({
  selector: 'app-forms-page',
  imports: [Tabs],
  templateUrl: './forms-page.html',
  styleUrl: './forms-page.css',
})
export class FormsPage {
  protected tabs: iTabs = [
    {
      id: 'signal-forms',
      title: 'Signal Forms',
      path: this.getPath('signal-forms'),
    }
  ];

  private getPath(fragment: string): string {
    return `forms/${fragment}`;
  }
}
