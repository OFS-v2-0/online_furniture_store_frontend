import PropTypes from 'prop-types';
import styles from './CatalogCard.module.css';
import Like from '../UI/Like/Like';
import placeholder from '../../assets/img/placeholder.png';

function CatalogCard({
  title,
  img,
  price,
}) {
  return (
    <article className={styles.catalogCard}>
      <div className={styles.imgContainer}>
        <img
          className={styles.productImage}
          src={img}
          alt={title}
          onError={(e) => {
            e.currentTarget.src = placeholder;
          }}
        />
      </div>
      <h2 className={styles.productName}>{title}</h2>
      <span className={styles.productPrice}>{price}
        <span>&nbsp;&#8381;</span>
      </span>
      <div className={styles.likeContainer}>
        <Like ariaLabel="like" />
      </div>
    </article>
  );
}

CatalogCard.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  img: PropTypes.string,
};

export default CatalogCard;
