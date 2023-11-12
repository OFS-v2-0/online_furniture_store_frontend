import { getLocalData } from './localStorage';

export class Api {
	#baseurl;

	#headers;

	constructor({ baseUrl, headers }) {
		this.#baseurl = baseUrl;
		this.#headers = headers;
	}

	#onResponse(res) {
		return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
	}

	getAllProducts() {
		return fetch(`${this.#baseurl}api/products/`, {
			headers: {
				...this.#headers,
			},
		}).then(this.#onResponse);
	}

	getProductsWithParams(params) {
		return fetch(`${this.#baseurl}api/products/${params}`, {
			headers: {
				...this.#headers,
			},
		}).then(this.#onResponse);
	}

	getPopularProducts() {
		return fetch(`${this.#baseurl}api/products/popular/`, {
			headers: {
				...this.#headers,
			},
		}).then(this.#onResponse);
	}

	getCollections() {
		return fetch(`${this.#baseurl}api/collections/`, {
			headers: {
				...this.#headers,
			},
		}).then(this.#onResponse);
	}

	getBrands() {
		return fetch(`${this.#baseurl}api/brand/`, {
			headers: {
				...this.#headers,
			},
		}).then(this.#onResponse);
	}

	getColors() {
		return fetch(`${this.#baseurl}api/colors/`, {
			headers: {
				...this.#headers,
			},
		}).then(this.#onResponse);
	}

	getMaterials() {
		return fetch(`${this.#baseurl}api/materials/`, {
			headers: {
				...this.#headers,
			},
		}).then(this.#onResponse);
	}

	getCart() {
		const token = getLocalData('access')
			? `${getLocalData('access')}`
			: '';
		return fetch(`${this.#baseurl}api/carts/items/`, {
			method: 'GET',
			credentials: 'include',
			headers: {
				...this.#headers,
				authorization: token,
			},
		}).then(this.#onResponse);
	}

	addToCart(product, quantity) {
		const token = getLocalData('access')
			? `${getLocalData('access')}`
			: '';
		return fetch(`${this.#baseurl}api/carts/add_item/`, {
			method: 'POST',
			credentials: 'include',
			headers: {
				...this.#headers,
				authorization: token,
			},
			body: JSON.stringify({
				product,
				quantity,
			}),
		}).then(this.#onResponse);
	}

	deleteFromCart(id) {
		const token = getLocalData('access')
			? `${getLocalData('access')}`
			: '';
		return fetch(`${this.#baseurl}api/carts/delete_item/${id}/`, {
			method: 'DELETE',
			credentials: 'include',
			headers: {
				...this.#headers,
				authorization: token,
			},
		}).then(this.#onResponse);
	}

	getFavorites() {
		const token = getLocalData('access')
			? `${getLocalData('access')}`
			: '';
		return fetch(`${this.#baseurl}api/favorites/list/`, {
			method: 'GET',
			credentials: 'include',
			headers: {
				...this.#headers,
				authorization: token,
			},
		}).then(this.#onResponse);
	}

	addToFavorites(product) {
		const token = getLocalData('access')
			? `${getLocalData('access')}`
			: '';
		return fetch(`${this.#baseurl}api/favorites/add_favorite/`, {
			method: 'POST',
			credentials: 'include',
			headers: {
				...this.#headers,
				authorization: token,
			},
			body: JSON.stringify({
				product,
			}),
		}).then(this.#onResponse);
	}

	deleteFromFavorites(id) {
		const token = getLocalData('access')
			? `${getLocalData('access')}`
			: '';
		return fetch(`${this.#baseurl}api/favorites/delete_favorite/${id}/`, {
			method: 'DELETE',
			credentials: 'include',
			headers: {
				...this.#headers,
				authorization: token,
			},
		}).then(this.#onResponse);
	}

	makeNewOrder(data) {
		return fetch(`${this.#baseurl}api/orders/`, {
			method: 'POST',
			headers: {
				...this.#headers,
				authorization: `Bearer ${getLocalData('access')}`,
			},
			body: JSON.stringify({ ...data }),
		}).then(this.#onResponse);
	}

	getProduct(id) {
		return fetch(`${this.#baseurl}api/products/${id}/`, {
			headers: {
				...this.#headers,
			},
		}).then(this.#onResponse);
	}

	getOrder(id) {
		return fetch(`${this.#baseurl}api/orders/${id}/`, {
			headers: {
				...this.#headers,
			},
		}).then(this.#onResponse);
	}

	getUserOrders() {
		return fetch(`${this.#baseurl}api/users/my_orders/`, {
			headers: {
				'content-type': 'application/json',
				Authorization: `Bearer ${getLocalData('access')}`,
			},
		}).then(this.#onResponse);
	}

	jwtCreate(data) {
		return fetch(`${this.#baseurl}api/auth/jwt/create/`, {
			method: 'POST',
			headers: {
				...this.#headers,
			},
			body: JSON.stringify({ ...data }),
		}).then(this.#onResponse);
	}

	jwtRefresh(data) {
		return fetch(`${this.#baseurl}api/auth/jwt/refresh/`, {
			method: 'POST',
			headers: {
				...this.#headers,
			},
			body: JSON.stringify({ ...data }),
		}).then(this.#onResponse);
	}

	jwtVerify(data) {
		return fetch(`${this.#baseurl}api/auth/jwt/verify/`, {
			method: 'POST',
			headers: {
				...this.#headers,
			},
			body: JSON.stringify({ ...data }),
		}).then(this.#onResponse);
	}

	getUser() {
		return fetch(`${this.#baseurl}api/users/me/`, {
			headers: {
				...this.#headers,
				authorization: `Bearer ${getLocalData('access')}`,
			},
		}).then(this.#onResponse);
	}

	createUser(data) {
		return fetch(`${this.#baseurl}api/users/me/`, {
			method: 'POST',
			headers: {
				...this.#headers,
			},
			body: JSON.stringify({ ...data }),
		}).then(this.#onResponse);
	}

	patchUser(data) {
		return fetch(`${this.#baseurl}api/users/me/`, {
			method: 'PATCH',
			headers: {
				...this.#headers,
				authorization: `Bearer ${getLocalData('access')}`,
			},
			body: JSON.stringify({ ...data }),
		}).then(this.#onResponse);
	}

	resetPassword(data) {
		return fetch(`${this.#baseurl}api/users/reset_password/`, {
			method: 'POST',
			headers: {
				...this.#headers,
			},
			body: JSON.stringify({ ...data }),
		}).then(this.#onResponse);
	}

	changePassword(data) {
		return fetch(`${this.#baseurl}api/users/change_password/`, {
			method: 'POST',
			headers: {
				...this.#headers,
				authorization: `Bearer ${getLocalData('access')}`,
			},
			body: JSON.stringify({ ...data }),
		}).then(this.#onResponse);
	}
}

const api = new Api({
	baseUrl: 'https://online-furniture-store.site/',
	headers: {
		'content-type': 'application/json',
	},
});

export default api;
