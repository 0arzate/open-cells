export const routes = [
  {
    path: '/',
    name: 'home',
    component: 'home-page',
    action: async () => {
      await import('../pages/home-page/home-page.js')
    }
  }
]
