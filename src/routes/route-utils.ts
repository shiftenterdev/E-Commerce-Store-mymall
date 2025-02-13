import { RouteLocationNormalized, NavigationGuardNext } from 'vue-router'
import { useSeoMeta } from '@unhead/vue'
import { getProduct } from '../data/product-utils.ts'
import { meta } from '../data/meta-types'
import { getCategoryPageMeta, getProductPageMeta } from '../data/meta-utils'

function parseRouteString(id: string | string[]): string {
	if (Array.isArray(id)) return id[0]
	return id
}

export function handleRouteMeta(metaFunc: () => meta): void {
	const metaData = metaFunc()
	useSeoMeta({
		title: metaData.title,
		description: metaData.description,
		ogTitle: metaData.title,
		ogDescription: metaData.description,
		ogImage: metaData.image,
	})
}

export function categoryRoute(category: string) {
	return {
		path: `/${category}`,
		component: () => import('../pages/Category/category-page.vue'),
		props: { category: category },
		beforeEnter: () => {
			const meta = getCategoryPageMeta(category)
			useSeoMeta({
				title: meta.title,
				description: meta.description,
				ogTitle: meta.title,
				ogDescription: meta.description,
				ogImage: meta.image,
			})
		},
	}
}

export function productRoute(category: string) {
	return {
		path: `/${category}/:id`,
		name: category,
		component: () => import('../pages/Product/product-page.vue'),
		// eslint-disable-next-line
		props: (route: any) => ({
			category: category,
			productId: route.params.id,
		}),
		beforeEnter: (
			to: RouteLocationNormalized,
			_: RouteLocationNormalized,
			next: NavigationGuardNext,
		) => {
			const product = getProduct(category, parseRouteString(to.params.id))
			if (!product) {
				next('/404')
			} else {
				const meta = getProductPageMeta(product)
				useSeoMeta({
					title: meta.title,
					description: meta.description,
					ogTitle: meta.title,
					ogDescription: meta.description,
					ogImage: meta.image,
				})
				next()
			}
		},
	}
}
