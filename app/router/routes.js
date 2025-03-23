export const routes = [
  {
    path: '/',
    name: 'home',
    component: 'home-page',
    action: async () => {
      await import('../pages/home-page/home-page.js');
    },
  },
  {
    path: '/second',
    name: 'second',
    component: 'second-page',
    action: async () => {
      await import('../pages/second-page/second-page.js');
    },
  }
];
