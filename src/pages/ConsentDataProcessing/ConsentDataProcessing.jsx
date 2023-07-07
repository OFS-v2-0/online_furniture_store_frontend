import DocumentationPage from '../../components/Documentation/Documentation';
import Title from '../../components/UI/Title/Title';
import styles from './ConsentDataProcessing.module.css';

function ConsentDataProcessing() {
	return (
		<DocumentationPage>
			<Title titleText="Согласие на обработку персональных данных" />
			<div className={styles.content}>
				<p className={styles.text}>
					Для покупки товара в интернет-магазине мебели OFS необходимо дать
					согласие на обработку персональных данных.
					<br />
					«Настоящим я, делая заказ на покупку товара в интернет-магазине мебели
					OFS, даю свое согласие на обработку персональных данных в соответствии
					с Федеральным законом от 27 июля 2006 года №<nobr> 152-ФЗ</nobr>
					„О персональных данных“.
					<ul className={styles.list}>
						Персональные данные, которые я предоставляю, включают в себя:
						<li>фамилию, имя, отчество;</li>
						<li>контактный телефон;</li>
						<li>адрес электронной почты;</li>
						<li>адрес доставки товара.</li>
					</ul>
					Я даю свое согласие на обработку персональных данных в целях
					заключения и исполнения договора купли-продажи, а также для целей
					маркетинга и рекламы товаров и услуг интернет-магазина мебели OFS.
					<br />
					Я даю свое согласие на передачу моих персональных данных работникам и
					партнерам интернет-магазина мебели OFS для выполнения своих
					обязательств по заключенному договору.
					<br />
					Я осведомлен(а) о своих правах, предусмотренных законодательством
					Российской Федерации в отношении персональных данных, а также о
					возможности отозвать свое согласие на обработку персональных данных.
					<br />
					Согласие действует до отзыва мной своего согласия на обработку
					персональных данных. Отзыв согласия может быть осуществлен путем
					направления письменного уведомления в интернет-магазин мебели OFS.
					<br />Я подтверждаю, что давая согласие на обработку моих персональных
					данных, я ознакомлен(а) с условиями обработки персональных данных,
					указанными ранее, и даю свое согласие на их обработку в соответствии с
					действующим законодательством Российской Федерации».
				</p>
			</div>
		</DocumentationPage>
	);
}

export default ConsentDataProcessing;
