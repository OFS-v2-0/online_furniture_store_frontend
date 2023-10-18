import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import {
	clearProductsWithParams,
	fetchProductsWithParams,
	selectProducts,
} from '../../store/products/products-slice';
import styles from './CatalogGrid.module.css';
import CatalogCard from '../CatalogCard/CatalogCard';

function CatalogGrid({ category }) {
	const dispatch = useDispatch();
	const { productsWithParams } = useSelector(selectProducts);

	useEffect(() => {
		dispatch(fetchProductsWithParams({ category }));

		return () => {
			dispatch(clearProductsWithParams());
		};
	}, [dispatch, category]);

	return (
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
	);
}

CatalogGrid.propTypes = {
	category: PropTypes.string.isRequired,
};

export default CatalogGrid;
