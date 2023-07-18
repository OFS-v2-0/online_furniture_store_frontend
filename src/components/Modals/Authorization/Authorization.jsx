import { useDispatch } from 'react-redux';
import { useForm, Controller } from 'react-hook-form';
import { openModal, closeModal } from '../../../store/modal/modal-slice';
import styles from './Authorization.module.css';
import NameInput from '../../UI/NameInput/NameInput';
import BlackButton from '../../UI/BlackButton/BlackButton';

function Authorization() {
	const dispatch = useDispatch();

	const {
		control,
		handleSubmit,
		reset,
		resetField,
		formState: { errors },
	} = useForm({
		mode: 'onBlur',
		defaultValues: {
			email: '',
			password: '',
		},
	});

	const onSubmit = (data) => {
		// eslint-disable-next-line no-console
		console.log('submit', data);
		dispatch(closeModal());
		reset();
	};
	return (
		<div className={styles.container}>
			<h2 className={styles.title}>Авторизация</h2>
			<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
				<div className={styles.inputs}>
					<Controller
						control={control}
						rules={{
							required: 'Поле обязательное',
							pattern: {
								value: /\S+@\S+\.\S+/gi,
								message: 'Неверный формат email',
							},
						}}
						render={({ field: { onChange, onBlur, value } }) => (
							<NameInput
								onBlur={onBlur}
								onChange={onChange}
								value={value}
								inputId="email"
								label="Электронная почта"
								helperText={errors.email?.message?.toString()}
								error={!!errors.email?.message}
								onClick={() => resetField('email')}
							/>
						)}
						name="email"
					/>
					<Controller
						control={control}
						rules={{
							required: 'Поле обязательное',
							pattern: {
								value: /^(?=.*\d)\w{6,}$/m,
								message:
									'Пароль должен содержать цифры, латинские буквы верхнего и нижнего регистра, не менее 6 символов',
							},
						}}
						render={({ field: { onChange, onBlur, value } }) => (
							<NameInput
								onBlur={onBlur}
								onChange={onChange}
								value={value}
								inputId="password"
								label="Пароль"
								helperText={errors.password?.message?.toString()}
								error={!!errors.password?.message}
								onClick={() => resetField('password')}
							/>
						)}
						name="password"
					/>
				</div>
				<BlackButton buttonText="Войти" type="submit" />
			</form>
			<div className={styles.helpLinks}>
				<button
					className={styles.link}
					onClick={() => dispatch(openModal('registrationModal'))}
					type="button"
				>
					Регистрация
				</button>
				<button
					className={styles.link}
					onClick={() => dispatch(openModal('forgotPassModal'))}
					type="button"
				>
					Забыли пароль
				</button>
			</div>
		</div>
	);
}

export default Authorization;
