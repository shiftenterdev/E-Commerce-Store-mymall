import bannerImage from '/icons/KIIIBS-banner.png'
import keyboardsImage from '/products/keyboards/cow-full.webp'
import keycapsImage from '/products/keycaps/cap2.webp'
import deskmatsImage from '/products/deskmats/grrr-full.webp'
import { meta, metaContainer } from './meta-types.ts'

export const landingPageMeta: meta = {
	title: 'Mymall.nl | Mechanische Toetsenbord Store',
	ogTitle: 'Mymall.nl | Mechanische Toetsenbord Store',
	description:
		'Wij verkopen op maat gemaakte mechanische toetsenborden, keycaps en deskmats voor uw gaming- en kantooropstelling, midden in het hart van Groningen.',
	ogDescription:
		'Wij verkopen op maat gemaakte mechanische toetsenborden, keycaps en deskmats voor uw gaming- en kantooropstelling, midden in het hart van Groningen.',
	image: bannerImage,
	ogImage: bannerImage,
}

export const categoryPageMeta: metaContainer = {
	keyboards: {
		title: 'Alle Mechanische Toetsenborden | Mymall',
		ogTitle: 'Alle Mechanische Toetsenborden | Mymall',
		description:
			'Ontdek ons assortiment hoogwaardige mechanische toetsenborden die uw typervaring naar een hoger niveau tillen.',
		ogDescription:
			'Ontdek ons assortiment hoogwaardige mechanische toetsenborden die uw typervaring naar een hoger niveau tillen.',
		image: keyboardsImage,
		ogImage: keyboardsImage,
	},
	keycaps: {
		title: 'Alle Custom Keycaps | Mymall',
		ogTitle: 'Alle Custom Keycaps | Mymall',
		description:
			'Ontdek ons assortiment hoogwaardige mechanische toetsenborden die uw typervaring naar een hoger niveau tillen.',
		ogDescription:
			'Ontdek ons assortiment hoogwaardige mechanische toetsenborden die uw typervaring naar een hoger niveau tillen.',
		image: keycapsImage,
		ogImage: keycapsImage,
	},
	deskmats: {
		title: 'Alle Deskmats | Mymall',
		ogTitle: 'Alle Deskmats | Mymall',
		description:
			'Maak jezelf comfortabel in je werk- of gamingopstelling met een van onze KIIIBS deskmats. Zacht en stijlvol!',
		ogDescription:
			'Maak jezelf comfortabel in je werk- of gamingopstelling met een van onze KIIIBS deskmats. Zacht en stijlvol!',
		image: deskmatsImage,
		ogImage: deskmatsImage,
	},
}

export const checkoutPageMeta: meta = {
	title: 'Checkout',
	ogTitle: 'Checkout',
	description: 'Voltooi uw aankoop.',
	ogDescription: 'Voltooi uw aankoop.',
	image: bannerImage,
	ogImage: bannerImage,
}

export const fofPageMeta: meta = {
	title: '404: Pagina niet gevonden.',
	ogTitle: '404: Pagina niet gevonden.',
	description: '404: Pagina niet gevonden.',
	ogDescription: '404: Pagina niet gevonden.',
	image: bannerImage,
	ogImage: bannerImage,
}

export const aboutPageMeta: meta = {
	title: 'Over ons',
	ogTitle: 'Over ons',
	description: 'Over ons',
	ogDescription: 'Over ons',
}