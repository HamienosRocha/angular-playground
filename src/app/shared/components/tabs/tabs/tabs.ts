import { AfterViewInit, booleanAttribute, Component, ContentChildren, DOCUMENT, inject, input, QueryList, signal } from '@angular/core';
import { Router } from '@angular/router';
import { TabContentDirective } from '../tab-content.directive';
import { iTabItem, iTabs } from '../../models';
import { CommonModule } from '@angular/common';

type TabId = iTabItem['id'] | null;

@Component({
  selector: 'app-tabs',
  imports: [CommonModule],
  templateUrl: './tabs.html',
  styleUrl: './tabs.css',
})
export class Tabs implements AfterViewInit {
  private readonly router = inject(Router);
  private readonly document = inject(DOCUMENT);

  public tabsId = input.required<string>();
  public tabs = input.required<iTabs>();
  public destroyContentOnChange = input(false, { transform: booleanAttribute });

  protected selectedTab = signal<iTabItem | null>(null);

  @ContentChildren(TabContentDirective) tabsContent: QueryList<TabContentDirective> | null = null;

  ngAfterViewInit(): void {
    this.markCurrentTabOnInit();
  }

  markCurrentTabOnInit() {
    const current = this.tabs().find(t => t.path?.includes(location.pathname)) ||
      this.tabs()?.[0] ||
      null;

    this.selectedTab.set(current);

    if (!current) return;
    this.clickOnTab(current);
  }

  clickOnTab(tab: iTabItem) {
    const inputTab = this.document.getElementById(this.getTabId(tab)) as HTMLInputElement | null;
    if (!inputTab) return;

    inputTab.click();
  }

  getTabId(tab: iTabItem): `${string}-${string}` {
    return `${this.tabsId()}-${tab.id}`;
  }

  selectTabId(tab: iTabItem) {
    this.selectedTab.set(tab);
  }

  changeTab(tab: iTabItem) {
    this.selectTabId(tab);
    if (!tab?.path) return;
    this.router.navigate([`${tab.path}`]);
  }

  getTemplateRef(id: TabId) {
    return this.tabsContent?.find(t => t.tabContent() === id)?.template;
  }
}
