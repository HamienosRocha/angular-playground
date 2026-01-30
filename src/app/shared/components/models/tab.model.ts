import { Routes } from "@angular/router";

export type iTabs = iTabItem[];
export type iTabsWithRoutes = iRouteTabItem & {
  tabs: iTabs,
};

export type iTabItem = {
  id: string | number,
  title: string,
  path?: string;
  icon?: string;
};

export type iRouteTabItem = {
  uniqueId: string,
  newChildrenRoutes: Routes;
};