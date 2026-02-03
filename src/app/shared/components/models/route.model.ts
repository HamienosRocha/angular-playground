import { Route } from "@angular/router";

export type iRoutes = iRoute[];

type iRoute = Route & {
  data?: iRouteData;
  children?: iRoutes;
};

type iRouteData = {
  uniqueId: string,
  [key: string | symbol]: any;
};