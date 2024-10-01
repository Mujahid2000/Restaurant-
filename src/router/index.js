import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '@/views/About.vue'
import Items from '@/views/Items.vue'
import Pages from '@/views/Pages.vue'
import Contact from '@/views/Contact.vue'
import FoodDetails from '@/views/FoodDetails.vue'
import MyAccount from '@/views/MyAccount.vue'
import AuthenticationPage from '@/views/AuthenticationPage.vue'
import MyCart from '@/views/MyCart.vue'
import MyWishList from '@/views/MyWishList.vue'
import Menu from '@/views/Menu.vue'
import MenuDetails from '@/components/MenuDetails/MenuDetails.vue'
import { useAuth } from '@/Config/UseAuth'
// const {user} = useAuth();
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/items',
      name: 'items',
      component: Items
    },
    {
      path: '/pages',
      name: 'pages',
      component: Pages
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/foodDetails/:id',
      name: 'FoodDetails',
      component: FoodDetails
    },
    {
      path: '/myAccount',
      name: 'Registration',
      component: MyAccount,
      meta: {
        needAuth: true
      }
    },
    {
      path: '/login',
      name: 'Authentication',
      component: AuthenticationPage
    },
    {
      path: '/cart',
      name: 'MyCart',
      component: MyCart,
      meta: {
        needAuth: true
      }
    },
    {
      path: '/myWishList',
      name: 'MyWishList',
      component: MyWishList,
      meta: {
        needAuth: true
      }
    },
    {
      path: '/allMenu',
      name: 'Menu',
      component: Menu
    },
    {
      path:'/menuDetails/:id',
      name: 'MenuDetails',
      component: MenuDetails
    }
  ]
})


const { user, loading, ready } = useAuth();

router.beforeEach(async (to, from, next) => {
  // Wait for the authentication state to be ready
  await ready; // Wait for the promise to resolve

  if (to.meta.needAuth && !user.value) {
    // User is not authenticated, redirect to login or another appropriate route
    next({ name: 'Authentication' });
  } else {
    // User is authenticated or route does not require auth
    next();
  }
});

export default router
