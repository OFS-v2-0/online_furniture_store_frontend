import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import { productDeliverySlider } from '../../../../utils/productDeliverySlider';
import { productDiscountSlider } from '../../../../utils/productDiscountSlider';
import ProductCard from '../../../ProductCard/ProductCard';
import Title from '../../../UI/Title/Title';
import styles from './ProductsWithScroll.module.css';
import { selectProducts } from '../../../../store/products/products-slice';
import { selectFurniture } from '../../../../store/furniture/furniture-slice';
import { selectCart } from '../../../../store/cart/cart-slice';
import { selectFavorites } from '../../../../store/favorites/favorites-slice';
import { checkAvailability } from '../../../../utils/helpers';

function ProductsWithScroll({ icon, sameProduct }) {
	const navigate = useNavigate();

	const { discountProducts, fastDeliveryProducts } =
		useSelector(selectProducts);
	const { furniture } = useSelector(selectFurniture);
	const { cart } = useSelector(selectCart);
	const { favorites } = useSelector(selectFavorites);

	const swiperOptions = () => {
		return icon === 'delivery' ? productDeliverySlider : productDiscountSlider;
	};
	const defineTitleText = () => {
		if (icon === 'delivery') {
			return 'Товары с быстрой доставкой';
		}
		if (sameProduct) {
			return '';
		}
		return 'Выгодная покупка';
	};

	const defineArrayProducts = () => {
		if (icon === 'delivery') {
			return fastDeliveryProducts;
		}
		if (sameProduct) {
			return furniture.similar_products;
		}
		return discountProducts;
	};
	return (
		<section className={`${styles.wrapper} ${styles.wrapperDiscount}`}>
			<div className={styles.title}>
				<Title titleText={defineTitleText()} />
			</div>
			<Swiper
				{...swiperOptions()}
				className={`${styles.container} ${styles.containerDiscount}`}
			>
				{defineArrayProducts().map((item) => (
					<SwiperSlide key={item.id} className={styles.description}>
						<ProductCard
							id={item.id}
							img={item.images ? item.images.first_image : ''}
							title={item.name}
							newPrice={item.total_price.toLocaleString()}
							oldPrice={item.price.toLocaleString()}
							discount={item.discount}
							inStock={item.available_quantity}
							weight={item.weight}
							brand={item.brand}
							country={item.country}
							icon={item.discount && !item.fast_delivery ? 'discount' : '' || icon}
							inCart={checkAvailability(cart.products, item.id)}
							inFavorites={checkAvailability(favorites.products, item.id)}
							onClick={() => {
								navigate(`/product/${item.id}`);
							}}
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</section>
	);
}

ProductsWithScroll.propTypes = {
	fastDelivery: PropTypes.bool,
	sameProduct: PropTypes.bool,
	icon: PropTypes.string,
};

export default ProductsWithScroll;
