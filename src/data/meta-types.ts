export interface meta {
	title: string
	description: string
	ogTitle?: string
	ogDescription?: string
	image?: string
	ogImage?: string
}

export type metaContainer = {
	[key: string]: meta
}
