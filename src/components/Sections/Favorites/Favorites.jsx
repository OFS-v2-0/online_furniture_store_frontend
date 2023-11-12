import { v4 as uuidv4 } from 'uuid';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styles from './Favorites.module.css';
import ProductCard from '../../ProductCard/ProductCard';
import BlackButton from '../../UI/BlackButton/BlackButton';
import emptyCart from '../../../assets/img/emptyCart.png';
import Title from '../../UI/Title/Title';
import { selectFavorites } from '../../../store/favorites/favorites-slice';
import { selectCart } from '../../../store/cart/cart-slice';
import { checkAvailability } from '../../../utils/helpers';

function Favorites() {
	const { favorites, loading } = useSelector(selectFavorites);
	const { cart } = useSelector(selectCart);

	const navigate = useNavigate();
	useEffect(() => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}, []);

	return favorites.products?.length ? (
		<section className={styles.section}>
			<Title titleText="Избранное" />
			<ul className={styles.cardList}>
				{favorites.products?.map((item) => (
					<li className={styles.card} key={uuidv4()}>
						<ProductCard
							title={item.name}
							oldPrice={item.price.toLocaleString()}
							newPrice={item.total_price.toLocaleString()}
							discount={item.discount}
							icon={item.discount ? 'discount' : ''}
							weight={item.weight || 1}
							brand={item.brand || 'не известно'}
							country={item.country || 'не известно'}
							img={item.images ? item.images.first_image : ''}
							inStock={item.available_quantity}
							inCart={checkAvailability(cart.products, item.id)}
							inFavorites={checkAvailability(favorites.products, item.id)}
							id={item.id}
							isSmall
							onClick={() => {
								navigate(`/product/${item.id}`);
							}}
						/>
					</li>
				))}
			</ul>
		</section>
	) : (
		!loading && (
			<section className={`${styles.section} ${styles.emptyCartContainer}`}>
				<div className={styles.emptyCartDescription}>
					<Title titleText="Избранное" />
					<p className={styles.emptyText}>В избранном пока нет товаров</p>
					<BlackButton
						onClick={() => navigate('/')}
						buttonText="Перейти к покупкам"
					/>
				</div>
				<img
					className={styles.emptyCartImg}
					src={emptyCart}
					alt="пустое избранное"
				/>
			</section>
		)
	);
}

export default Favorites;
