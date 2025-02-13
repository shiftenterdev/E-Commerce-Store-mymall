import LandingPage from '../pages/Landing/landing-page.vue'
import { createRouter, createWebHistory } from 'vue-router'
import { categoryRoute, productRoute, handleRouteMeta } from './route-utils'
import {
	get404PageMeta,
	getAboutPageMeta,
	getCheckoutPageMeta,
	getLandingPageMeta,
} from '../data/meta-utils'

const routes = [
	{
		path: '/',
		name: 'Home',
		component: LandingPage,
		beforeEnter: () => handleRouteMeta(getLandingPageMeta),
	},
	{
		path: '/checkout',
		component: () => import('../pages/Checkout/checkout-page.vue'),
		beforeEnter: () => handleRouteMeta(getCheckoutPageMeta),
	},
	{
		path: '/about',
		component: () => import('../pages/About/about-page.vue'),
		beforeEnter: () => handleRouteMeta(getAboutPageMeta),
	},
	{
		path: '/404',
		component: () => import('../pages/404/404-page.vue'),
		beforeEnter: () => handleRouteMeta(get404PageMeta),
	},
	{
		path: '/:pathMatch(.*)',
		component: () => import('../pages/404/404-page.vue'),
		beforeEnter: () => handleRouteMeta(get404PageMeta),
	},
	categoryRoute('keyboards'),
	categoryRoute('keycaps'),
	categoryRoute('deskmats'),
	productRoute('keyboards'),
	productRoute('keycaps'),
	productRoute('deskmats'),
]

const Router = createRouter({
	history: createWebHistory(),
	routes,

	scrollBehavior(_1, _2, savedPosition) {
		if (savedPosition) {
			return savedPosition
		} else {
			return { top: 0 }
		}
	},
})

export default Router
