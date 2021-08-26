import todo from '@/views/todo'
import home from '@/views/home'
import assets from '@/views/assets'

const routes = [
  {
    path: '/',
    redirect: '/todo'
  },
  {
    path: '/todo',
    component: todo
  },
  {
    path: '/home',
    component: home
  },
  {
    path: '/assets',
    component: assets
  }
]

export default routes
