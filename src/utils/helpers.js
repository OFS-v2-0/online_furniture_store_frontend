export function declensionWordYear(num) {
	if (num === 1) {
		return `${num} год`;
	}
	if (num > 1 && num < 5) {
		return `${num} годa`;
	}
	return `${num} лет`;
}

export function checkAvailability(products, id) {
	return products?.some((elem) =>
		elem.product ? elem.product.id === +id : elem.id === +id,
	);
}

export function encodeQueryString(params) {
	const query = Object.entries(params)
		.filter(([, value]) => value)
		.map(([key, value]) => `${key}=${value}`)
		.join('&');
	return query ? `?${query}` : '';
}
