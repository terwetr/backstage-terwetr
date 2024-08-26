import {
  createPlugin,
  createRoutableExtension,
} from '@backstage/core-plugin-api';

import { rootRouteRef } from './routes';

export const oleoDashboardPlugin = createPlugin({
  id: 'oleo-dashboard',
  routes: {
    root: rootRouteRef,
  },
});

export const OleoDashboardPage = oleoDashboardPlugin.provide(
  createRoutableExtension({
    name: 'OleoDashboardPage',
    component: () =>
      import('./components/ExampleComponent').then(m => m.ExampleComponent),
    mountPoint: rootRouteRef,
  }),
);
