import { useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import {
	clearProductsWithParams,
	sortProductsByPriceAsc,
	sortProductsByPriceDesc,
	sortProductsByDiscountDesc,
	fetchProductsWithParams,
	selectProducts,
} from '../../store/products/products-slice';
import styles from './CatalogGrid.module.css';
import CatalogCard from '../CatalogCard/CatalogCard';
import SingleSelect from '../UI/Select/SingleSelect';

function CatalogGrid({ category }) {
	const dispatch = useDispatch();
	const { productsWithParams } = useSelector(selectProducts);

	useEffect(() => {
		dispatch(fetchProductsWithParams({ category }));

		return () => {
			dispatch(clearProductsWithParams());
		};
	}, [dispatch, category]);

	const handleSortChange = useCallback((choice) => {
		switch (choice.value) {
			case 'priceAsc':
				dispatch(sortProductsByPriceAsc());
				break;
			case 'priceDesc':
				dispatch(sortProductsByPriceDesc());
				break;
			case 'discountDesc':
				dispatch(sortProductsByDiscountDesc());
				break;
			default:
		}
	}, [dispatch]);

	return (
		<div>
			<SingleSelect
				onChange={handleSortChange}
				options={[
					{ value: 'priceAsc', label: 'Сначала дешевле' },
					{ value: 'priceDesc', label: 'Сначала дороже' },
					{ value: 'discountDesc', label: 'По скидке' },
				]}
			/>
			<div className={styles.catalog}>
				{productsWithParams.map((product) => {
					return (
						<CatalogCard
							key={product.id}
							title={product.name}
							img={product.images ? product.images.first_image : ''}
							price={product.price}
						/>
					);
				})}
			</div>
		</div>
	);
}

CatalogGrid.propTypes = {
	category: PropTypes.string.isRequired,
};

export default CatalogGrid;
