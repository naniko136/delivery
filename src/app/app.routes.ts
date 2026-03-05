import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Cart } from './components/cart/cart';
import { Login } from './components/login/login';
import { Register } from './components/register/register';
import { Details } from './components/details/details';
import { AllRestaurants } from './components/all-restaurants/all-restaurants';
import { Allfood } from './components/allfood/allfood';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'cart',
    component: Cart,
  },
  {
    path: 'restaurants',
    component: AllRestaurants,
  },
  {
    path: 'foods',
    component: Allfood,
  },
  {
    path: 'restaurant/:id',
    component: Details,
  },
  {
    path: 'log-in',
    component: Login,
  },
  {
    path: 'register',
    component: Register,
  },
];
