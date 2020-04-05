
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: '/profile', component: () => import('pages/Profile.vue') },
      { path: '/login', component: () => import('pages/Login.vue') },
      { path: '/colors', component: () => import('components/Colors.vue') },
      { path: '/room', component: () => import('pages/Room.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
