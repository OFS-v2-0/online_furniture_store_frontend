import { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import placeholder from '../../assets/img/placeholder.png';
import { addToCart } from '../../store/cart/cart-slice';
import {
	addToFavorites,
	deleteFromFavorites,
} from '../../store/favorites/favorites-slice';
import AddToCartButton from '../UI/AddToCartButton/AddToCartButton';
import Like from '../UI/Like/Like';
import styles from './ProductCard.module.css';

function ProductCard({
	id,
	title,
	newPrice,
	oldPrice,
	discount,
	img,
	inStock,
	weight,
	brand,
	country,
	icon,
	inCart,
	inFavorites,
	onClick,
	catalogCard,
	index,
}) {
	const [cardWidth, setCardWidth] = useState(0);
	const [animation, setAnimation] = useState(false);
	const dispatch = useDispatch();
	const cardRef = useRef(null);

	useEffect(() => {
		setCardWidth(cardRef.current.clientWidth);
	}, [index]);

	useEffect(() => {
		const card = cardRef.current;
		const onChange = () => setAnimation(true);

		card.addEventListener('mouseenter', onChange);

		return () => {
			card.removeEventListener('mouseenter', onChange);
		};
	}, []);

	const onLikeClick = () => {
		if (inFavorites) {
			dispatch(deleteFromFavorites(id));
		} else dispatch(addToFavorites({ product: id }));
	};
	const onAddClick = () => {
		dispatch(addToCart({ product: id, quantity: 1 }));
	};

	const setCardStyles = () => {
		if (catalogCard && cardWidth <= 350) {
			return `${styles.card} ${styles.catalogCard} ${styles.small}`;
		}
		if (catalogCard && cardWidth > 350 && cardWidth < 800) {
			return `${styles.card} ${styles.catalogCard} ${styles.middle}`;
		}
		if (catalogCard && cardWidth >= 800) {
			return animation
				? `${styles.card} ${styles.catalogCard} ${styles.large} ${styles.animation}`
				: `${styles.card} ${styles.catalogCard} ${styles.large}`;
		}
		if (cardWidth > 350 && !catalogCard) {
			return `${styles.card} ${styles.discountCard}`;
		}
		if (cardWidth < 350 && !catalogCard) {
			return `${styles.card} ${styles.fastDeliveryCard}`;
		}
	};
	const setCardImageStyles = () => {
		if (catalogCard) return `${styles.image} ${styles.imageCatalogCard}`;
		if (catalogCard && cardWidth >= 800) {
			return `${styles.image} ${styles.imageCatalogCard} ${styles.large}`;
		}
		if (cardWidth > 350 && !catalogCard) {
			return `${styles.image} ${styles.imageDiscountCard}`;
		}
		if (cardWidth < 350 && !catalogCard) {
			return `${styles.image} ${styles.imageFastDeliveryCard}`;
		}
	};

	return (
		<div ref={cardRef} className={setCardStyles()} onClick={onClick}>
			<div className={setCardImageStyles()}>
				<img
					src={img}
					onError={(e) => {
						e.currentTarget.src = placeholder;
					}}
					loading="lazy"
					alt={`изображение товара: ${title}`}
					className={styles.image__picture}
				/>
				<div className={styles.sweets}>
					{icon === 'delivery' && (
						<div
							className={`${styles.percentAndTruck} ${styles.truckDelivery}`}
						/>
					)}
					{icon === 'discount' && (
						<div
							className={`${styles.percentAndTruck} ${styles.discountPercent}`}
						/>
					)}

					<div className={styles.likes}>
						<Like onClick={onLikeClick} active={inFavorites} ariaLabel="like" />
					</div>
				</div>
			</div>
			<div className={styles.descriptionContainer}>
				<div>
					<h2
						className={
							catalogCard
								? `${styles.title} ${styles.catalogCardTitle}`
								: `${styles.title} ${styles.cardTitle}`
						}
					>
						{title}
					</h2>

					<div
						className={
							icon === 'delivery' || cardWidth <= 295
								? `${styles.description} ${styles.descriptionFastDeliveryCard}`
								: `${styles.description} ${styles.descriptionDiscountCard}`
						}
					>
						{icon === 'delivery' || !discount ? (
							<div className={styles.price}>
								<p
									className={
										catalogCard
											? styles.price__new_catalog
											: styles.price__new_fastDelivery
									}
								>
									{oldPrice}
									<span>&nbsp;&#8381;</span>
								</p>
							</div>
						) : (
							<div className={styles.price}>
								<p className={styles.price__new_discountCard}>
									{newPrice}
									<span>&nbsp;&#8381;</span>
								</p>
								<p className={styles.price__old_discountCard}>
									{oldPrice}
									<span>&nbsp;&#8381;</span>
								</p>
							</div>
						)}

						<p className={styles.inStock}>
							{inStock ? `в наличии: ${inStock} шт` : 'нет в наличии'}
						</p>
					</div>

					<div className={styles.aboutProperty}>
						<p className={styles.property}>Вес</p>
						<p className={styles.property}>{`${weight} кг`}</p>
					</div>
					<div className={styles.aboutProperty}>
						<p className={styles.property}>Бренд</p>
						<p className={styles.property}>{brand}</p>
					</div>
					<div className={styles.aboutProperty}>
						<p className={styles.property}>Страна</p>
						<p className={styles.property}>{country}</p>
					</div>
				</div>
				<AddToCartButton
					text="Добавить&nbsp;в&nbsp;корзину"
					onClick={onAddClick}
					isSuccess={inCart}
				/>
			</div>
		</div>
	);
}

ProductCard.propTypes = {
	title: PropTypes.string.isRequired,
	id: PropTypes.number,
	newPrice: PropTypes.string.isRequired,
	oldPrice: PropTypes.string.isRequired,
	discount: PropTypes.number,
	img: PropTypes.string,
	inStock: PropTypes.number.isRequired,
	weight: PropTypes.number.isRequired,
	brand: PropTypes.string.isRequired,
	country: PropTypes.string.isRequired,
	icon: PropTypes.string,
	index: PropTypes.number,
	inCart: PropTypes.bool,
	catalogCard: PropTypes.bool,
	inFavorites: PropTypes.bool,
	onClick: PropTypes.func,
};

export default ProductCard;
