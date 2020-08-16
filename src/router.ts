const routes = [
  { path: '/', redirect: '/hero' },
  {
    path: '/',
    component: '@/layouts',
    routes: [
      { path: '/hero', component: './hero' },
      { path: '/item', component: 'item' },
      { path: '/summoner', component: './summoner' },
    ],
  },
];

export { routes };
