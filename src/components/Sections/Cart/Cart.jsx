import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styles from './Cart.module.css';
import TotalPrice from '../../TotalPrice/TotalPrice';
import Title from '../../UI/Title/Title';
import BlackButton from '../../UI/BlackButton/BlackButton';
import CartCard from '../../CartCard/CartCard';
import emptyCart from '../../../assets/img/emptyCart.png';
import { selectCart } from '../../../store/cart/cart-slice';
import { selectFavorites } from '../../../store/favorites/favorites-slice';

function Cart() {
	const { cart, loading } = useSelector(selectCart);
	const { favorites } = useSelector(selectFavorites);

	const navigate = useNavigate();
	useEffect(() => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}, []);

	const generateProductText = (quantity) => {
		if (quantity > 1 && quantity <= 4) return '\u00A0товара\u00A0';
		if (quantity > 4) return '\u00A0товаров\u00A0';
		return '\u00A0товар\u00A0';
	};

	return cart.total_quantity ? (
		<section className={styles.container}>
			<Title titleText="Корзина" />
			<p className={styles.quantity}>
				{cart.total_quantity}
				{generateProductText(cart.total_quantity)}
				<span className={styles.weight}>
					&#8226;&nbsp;Вес&nbsp;&#8212;&nbsp;
					{cart.total_weight}
					кг
				</span>
			</p>
			<div className={styles.products}>
				<ul className={styles.productList}>
					{cart.products?.map(({ product, quantity }) => (
						<li className={styles.product} key={product.id}>
							<CartCard
								id={product.id}
								title={product.name}
								article={product.article}
								inStock={product.available_quantity}
								discountPrice={product.total_price}
								price={product.price}
								img={product.images ? product.images.first_image : ''}
								inFavorites={favorites.products?.some(
									(elem) => elem.id === product.id,
								)}
								quantity={quantity}
								onClick={() => {
									navigate(`/product/${product.id}`);
								}}
							/>
						</li>
					))}
				</ul>
				<TotalPrice
					discount={cart.total_price - cart.total_discount_price}
					count={cart.total_quantity || 0}
					weight={cart.total_weight}
					totalPrice={cart.total_discount_price}
					days={7}
					lastPrice={cart.total_price}
					buttonText="Оформить&nbsp;заказ"
					onClick={() => {
						navigate('/order-form');
					}}
				/>
			</div>
		</section>
	) : (!loading &&
		<section className={`${styles.container} ${styles.emptyCartContainer}`}>
			<div className={styles.emptyCartDescription}>
				<Title titleText="Корзина" />
				<p className={styles.emptyText}>В вашей корзине пока нет товаров</p>
				<BlackButton
					onClick={() => navigate('/')}
					buttonText="Перейти к покупкам"
				/>
			</div>
			<img
				className={styles.emptyCartImg}
				src={emptyCart}
				alt="пустая корзина"
			/>
		</section>
	);
}

export default Cart;
