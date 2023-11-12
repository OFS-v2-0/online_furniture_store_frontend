import { useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
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
import SingleSelect from '../UI/Select/SingleSelect';
import ProductCard from '../ProductCard/ProductCard';
import { checkAvailability } from '../../utils/helpers';
import { selectFavorites } from '../../store/favorites/favorites-slice';
import { selectCart } from '../../store/cart/cart-slice';

function CatalogGrid({ category, purpose }) {
	const dispatch = useDispatch();
	const { productsWithParams, loading } = useSelector(selectProducts);
	const { favorites } = useSelector(selectFavorites);
	const { cart } = useSelector(selectCart);

	const navigate = useNavigate();

	useEffect(() => {
		dispatch(fetchProductsWithParams({ category, purpose }));

		return () => {
			dispatch(clearProductsWithParams());
		};
	}, [dispatch, category, purpose]);

	const handleSortChange = useCallback(
		(choice) => {
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
		},
		[dispatch],
	);

	return (
		<div className={styles.container}>
			<SingleSelect
				key={category}
				onChange={handleSortChange}
				defaultValue=""
				placeholder="Выберите сортировку..."
				options={[
					{ value: 'priceAsc', label: 'Сначала дешевле' },
					{ value: 'priceDesc', label: 'Сначала дороже' },
					{ value: 'discountDesc', label: 'По скидке' },
				]}
			/>
			{productsWithParams?.length ? (
				<div className={styles.catalog}>
					{productsWithParams.map((product, idx) => {
						return (
							<div key={product.id} className={styles.cardContainer}>
								<ProductCard
									index={idx}
									title={product.name}
									oldPrice={product.price.toLocaleString()}
									newPrice={product.total_price.toLocaleString()}
									discount={product.discount}
									icon={product.discount ? 'discount' : ''}
									weight={product.weight || 1}
									brand={product.brand || 'не известно'}
									country={product.country || 'не известно'}
									img={product.images ? product.images.first_image : ''}
									inStock={product.available_quantity}
									inCart={checkAvailability(cart.products, product.id)}
									inFavorites={checkAvailability(
										favorites.products,
										product.id,
									)}
									id={product.id}
									catalogCard
									onClick={() => {
										navigate(`/product/${product.id}`);
									}}
								/>
							</div>
						);
					})}
				</div>
			) : (
				!loading && (
					<div className={styles.noProducts}>
						<h2 className={styles.noProducts__title}>
							Таких товаров не нашлось
						</h2>
						<p className={styles.noProducts__text}>
							Попробуйте изменить настройки фильтра
						</p>
					</div>
				)
			)}
		</div>
	);
}

CatalogGrid.propTypes = {
	category: PropTypes.string.isRequired,
	purpose: PropTypes.string.isRequired,
};

export default CatalogGrid;
