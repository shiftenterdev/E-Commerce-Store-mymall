import bannerImage from '/icons/KIIIBS-banner.png'
import keyboardsImage from '/products/keyboards/cow-full.webp'
import keycapsImage from '/products/keycaps/cap2.webp'
import deskmatsImage from '/products/deskmats/grrr-full.webp'
import { meta, metaContainer } from './meta-types.ts'

export const landingPageMeta: meta = {
	title: 'Mymall.nl | Mechanical Keyboard Store',
	ogTitle: 'Mymall.nl | Mechanical Keyboard Store',
	description:
		'We sell custom mechanical keyboards, keycaps and deskmats for your gaming and office setup, right in the heart of Berlin.',
	ogDescription:
		'We sell custom mechanical keyboards, keycaps and deskmats for your gaming and office setup, right in the heart of Berlin.',
	image: bannerImage,
	ogImage: bannerImage,
}

export const categoryPageMeta: metaContainer = {
	keyboards: {
		title: 'All Mechanical Keyboards | Mymall',
		ogTitle: 'All Mechanical Keyboards | Mymall',
		description:
			'Explore our selection of high quality mechanical keyboards that will elevate your typing experience.',
		ogDescription:
			'Explore our selection of high quality mechanical keyboards that will elevate your typing experience.',
		image: keyboardsImage,
		ogImage: keyboardsImage,
	},
	keycaps: {
		title: 'All Custom Keycaps | Mymall',
		ogTitle: 'All Custom Keycaps | Mymall',
		description:
			'Enjoy typing with style and upgrade your custom mechanical keyboard with our elegant keycaps',
		ogDescription:
			'Enjoy typing with style and upgrade your custom mechanical keyboard with our elegant keycaps',
		image: keycapsImage,
		ogImage: keycapsImage,
	},
	deskmats: {
		title: 'All Deskmats | Mymall',
		ogTitle: 'All Deskmats | Mymall',
		description:
			'Make yourself comfortable in your work or gaming setup with one of our KIIIBS deskmats. Soft and stylish!',
		ogDescription:
			'Make yourself comfortable in your work or gaming setup with one of our KIIIBS deskmats. Soft and stylish!',
		image: deskmatsImage,
		ogImage: deskmatsImage,
	},
}

export const checkoutPageMeta: meta = {
	title: 'Checkout',
	ogTitle: 'Checkout',
	description: 'Complete your purchase.',
	ogDescription: 'Complete your purchase.',
	image: bannerImage,
	ogImage: bannerImage,
}

export const fofPageMeta: meta = {
	title: '404: Page not found.',
	ogTitle: '404: Page not found.',
	description: '404: Page not found.',
	ogDescription: '404: Page not found.',
	image: bannerImage,
	ogImage: bannerImage,
}
