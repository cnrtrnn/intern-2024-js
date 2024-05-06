import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import UserView from '../views/UserView.vue';
import SideBar from '../views/SideBarView.vue';
import UserDetailView from '../views/UserDetailView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      components: {
        default: HomeView,
        SideBar
      },
    },
    {
      path: '/home',
      redirect: '/'
    },
    {
      path: '/users',
      component: () => import("../views/UsersView.vue"),
      children: [
        {
          path: ':id',
          component: UserView,
          props: {
            name: 'Ahmet'
          }
        },
        {
          path: 'detail',
          components: {
            default: UserDetailView,
            AboutView
          },
          props: {
            default: {
              name: "Mehmet"
            },
            AboutView: false
          }
        }
      ]
    },
  ]
})

const isAuthenticanted = true;
const isPermitted = true;

router.beforeEach((to, from, next) => {
  console.log(to.meta, from);
  if (!isPermitted) {
    // navigation canceled
    return false;
  }
  if (!isAuthenticanted) {
    // navigation redirected
    return '/login';
  }
  if (!isAuthenticanted) {
    // next("/Login");
    next({
      name: "Login"
    });
  }
  next();
})

export default router
