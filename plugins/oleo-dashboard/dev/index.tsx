import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { oleoDashboardPlugin, OleoDashboardPage } from '../src/plugin';

createDevApp()
  .registerPlugin(oleoDashboardPlugin)
  .addPage({
    element: <OleoDashboardPage />,
    title: 'Root Page',
    path: '/oleo-dashboard',
  })
  .render();
