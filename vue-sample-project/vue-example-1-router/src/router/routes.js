import Dashboard from '@/components/HelloWord';
import Users from '@/components/HelloWord';
// import User from '@/components/HelloWord';

const routes = [
  {
    path: '/',
    component: Dashboard,
    children: [{
      path: 'users',
      component: Users
    }],
    meta: {
      isAuth: true
    }
  },
  {
    path: '/login',
    // component: Login
  },
]

const isUserAuthenticated = true; // read from state

routes.beforeEach((to, from, next) => {
  if (to.meta.isAuth && isUserAuthenticated) {
    next()
  } else {
    return "/login";
  }
})

export default routes;