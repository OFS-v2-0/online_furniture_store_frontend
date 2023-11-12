import { useSelector } from 'react-redux';
import { selectProducts } from '../../store/products/products-slice';
import Categories from '../../components/Sections/Main/Categories/Categories';
import Intro from '../../components/Sections/Main/Intro/Intro';
import ProductsWithScroll from '../../components/Sections/Main/ProductsWithScroll/ProductsWithScroll';
import Services from '../../components/Sections/Main/Services/Services';
import PopularProducts from '../../components/Sections/PopularProducts/PopularProducts';

function HomePage() {
	const { discountProducts, fastDeliveryProducts, popularProducts } =
	useSelector(selectProducts);
	return (
		<>
			<Intro />
			<Categories />
			{discountProducts.length && <ProductsWithScroll icon="discount" />}
			{popularProducts.length && <PopularProducts />}
			<Services />
			{fastDeliveryProducts.length && <ProductsWithScroll icon="delivery" />}
		</>
	);
}

export default HomePage;
