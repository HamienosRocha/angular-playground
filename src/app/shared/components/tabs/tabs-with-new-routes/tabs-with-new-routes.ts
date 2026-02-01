import { AfterViewInit, Component, ContentChildren, inject, input, QueryList, signal } from '@angular/core';
import { Route, Router, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TabContentDirective } from '../tab-content.directive';
import { iTabItem, iTabsWithRoutes } from '../../models';

type iTabId = iTabItem['id'] | null;

@Component({
  selector: 'app-tabs-with-new-routes',
  imports: [CommonModule],
  templateUrl: './tabs-with-new-routes.html',
  styleUrl: './tabs-with-new-routes.css',
})
export class TabsWithNewRoutes implements AfterViewInit {
  private readonly router = inject(Router);
  private currentConfig = this.router.config;

  public tabsId = input.required<string>();
  public tabs = input.required<iTabsWithRoutes>();

  protected selectedTabId = signal<iTabId>(null);

  @ContentChildren(TabContentDirective) tabsContent: QueryList<TabContentDirective> | null = null;

  ngAfterViewInit(): void {
    if (!this.tabs()?.uniqueId) return;

    this.addChildrenAtRoute(
      this.currentConfig,
      route => {
        if (route?.data?.['uniqueId'] !== this.tabs().uniqueId) return false;

        route.children = this.tabs().newChildrenRoutes;
        return true;
      }
    );

    this.router.resetConfig(this.router.config);
  }

  selectTabId(id: iTabId) {
    this.selectedTabId.set(id);
  }

  changeTab(tab: iTabItem) {
    if (!tab?.path) return;

    this.router.navigate([`${tab.path}`]);
  }

  getTemplateRef(id: iTabId) {
    return this.tabsContent?.find(t => t.tabContent() === id)?.template;
  }

  addChildrenAtRoute(routesTree: Routes, callback: (r: Route) => boolean) {
    for (let route of routesTree) {
      if (!!callback(route)) break;

      if (!route?.children?.length) continue;

      this.addChildrenAtRoute(route.children, callback);
    }
  }

  // findRoute(routesTree: Routes, callback: (r: Route) => boolean): Route | undefined {
  //   for (let route of routesTree) {
  //     if (!!callback(route)) return route;

  //     if (!route?.children?.length) continue;

  //     const routeFound = this.findRoute(route.children, callback);
  //     if (routeFound) return routeFound;
  //   }

  //   return undefined;
  // }

}
