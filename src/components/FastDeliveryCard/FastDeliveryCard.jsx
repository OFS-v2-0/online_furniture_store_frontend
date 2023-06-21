import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './FastDeliveryCard.module.css';
import placeholderImg from '../../assets/img/placeholder.png';
import Like from '../UI/Like/Like';
import truck from '../../assets/img/truckWithGreenBg.svg';

function FastDeliveryCard({ img, title, price, isFastDelivery }) {
	const [isLike, setIsLike] = useState(false);
	const handleToggleLike = () => {
		setIsLike(!isLike);
	};
	return (
		<article className={styles.card}>
			<img
				className={styles.image}
				alt={`изображение товара: ${title}`}
				src={img}
				onError={(e) => {
					e.currentTarget.src = placeholderImg;
				}}
			/>
			<div className={styles.iconsArea}>
				<div className={styles.likeWrapper}>
					<Like active={isLike} onClick={handleToggleLike} ariaLabel="like" />
				</div>
				<img
					className={
						isFastDelivery ? styles.deliveryIcon : styles.deliveryIconHidden
					}
					alt="иконка доставки"
					src={truck}
				/>
			</div>
			<div className={styles.info}>
				<h2 className={styles.title}>{title}</h2>
				<p className={styles.price}>
					{price}
					<span>&nbsp;&#8381;</span>
				</p>
			</div>
		</article>
	);
}

FastDeliveryCard.propTypes = {
	img: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	price: PropTypes.number.isRequired,
	isFastDelivery: PropTypes.bool.isRequired,
};

export default FastDeliveryCard;
