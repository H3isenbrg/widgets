import { unref } from "vue";

export function useIconApi(url) {
	const apiUrl = unref(url)

	async function getCollections(options) {
		const { collections } = options

		const params = new URLSearchParams()

		if (collections) {
			params.set('prefixes', collections)
		}

		const res = await fetch(`${apiUrl}/collections?${params.toString()}`)
		if (!res.ok) throw new Error('Failed to fetch collections')

		const data = await res.json()
		return data
	}

	async function getIcons(options) {
		const { collection, collections, limit, search } = options

		const params = new URLSearchParams()

		if (collection) {
			params.set('prefix', collection)
		}

		if (collections) {
			params.set('prefixes', collections)
		}

		if (limit) {
			params.set('limit', limit)
		}

		if (search) {
			params.set('query', search)

			const res = await fetch(`${apiUrl}/search?${params.toString()}`)
			if (!res.ok) throw new Error('Failed to fetch icons')

			const data = await res.json()
			return data
		}

		const res = await fetch(`${apiUrl}/collection?${params.toString()}`)
		if (!res.ok) throw new Error('Failed to fetch icons')

		const data = await res.json()
		return data
	}

	return {
		getCollections,
		getIcons
	}
}