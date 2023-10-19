import { useCallback, useEffect, useState, useRef, memo } from 'react';
import PropTypes from 'prop-types';
import styles from './MultiRangeSlider.module.css';

function MultiRangeSlider({ min, max, onChange, reset, rangeBar, labelInput }) {
	const [minVal, setMinVal] = useState(min);
	const [maxVal, setMaxVal] = useState(max);
	const minValRef = useRef(min);
	const maxValRef = useRef(max);
	const range = useRef(null);
	const defaultMin = min;
	const defaultMax = max;

	useEffect(() => {
		if (reset) {
			setMinVal(defaultMin);
			setMaxVal(defaultMax);
			minValRef.current = defaultMin;
			maxValRef.current = defaultMax;
		}
	}, [reset, defaultMin, defaultMax]);

	// Convert to percentage
	const getPercent = useCallback(
		(value) => Math.round(((value - min) / (max - min)) * 100),
		[min, max],
	);

	// Set width of the range to decrease from the left side
	useEffect(() => {
		const minPercent = getPercent(minVal);
		const maxPercent = getPercent(maxValRef.current);

		if (range.current) {
			range.current.style.left = `${minPercent}%`;
			range.current.style.width = `${maxPercent - minPercent}%`;
		}
	}, [minVal, getPercent]);

	// Set width of the range to decrease from the right side
	useEffect(() => {
		const minPercent = getPercent(minValRef.current);
		const maxPercent = getPercent(maxVal);

		if (range.current) {
			range.current.style.width = `${maxPercent - minPercent}%`;
		}
	}, [maxVal, getPercent]);

	// Get min and max values when their state changes
	useEffect(() => {
		onChange({ min: minVal, max: maxVal });
	}, [minVal, maxVal, onChange]);

	const handleChangeMax = (e) => {
		const value = +e.target.value.replace(/[^0-9]/g, '');
		setMaxVal(value);
		maxValRef.current = value;
	};

	const handleBlurMax = (e) => {
		const value = +e.target.value.replace(/[^0-9]/g, '');
		if (value > +minVal) setMaxVal(value);
		else setMaxVal(+minVal);
	};

	const handleEnterPress = (e) => {
		if (e.key === 'Enter') e.target.blur();
	};

	const handleChangeMin = (e) => {
		const value = +e.target.value.replace(/[^0-9]/g, '');
		setMinVal(value);
		minValRef.current = value;
	};

	const handleBlurMin = (e) => {
		const value = +e.target.value.replace(/[^0-9]/g, '');
		if (value < +maxVal) setMinVal(value);
		else setMinVal(+maxVal);
	};

	return (
		<div
			style={!rangeBar ? { height: '0px', marginBottom: '-16px' } : null}
			className={styles.container}
		>
			<input
				type="range"
				min={min}
				max={max}
				value={minVal}
				onChange={(event) => {
					const value = Math.min(Number(event.target.value), maxVal - 1);
					setMinVal(value);
					minValRef.current = value;
				}}
				className={
					rangeBar
						? `${styles.thumb} ${styles.thumbRight} ${styles.show}`
						: `${styles.thumb} ${styles.thumbRight} ${styles.hide}`
				}
				style={{ zIndex: minVal > max - 100 && '5' }}
			/>
			<input
				type="range"
				min={min}
				max={max}
				value={maxVal}
				onChange={(event) => {
					const value = Math.max(Number(event.target.value), minVal + 1);
					setMaxVal(value);
					maxValRef.current = value;
				}}
				className={
					rangeBar
						? `${styles.thumb} ${styles.thumbRight} ${styles.show}`
						: `${styles.thumb} ${styles.thumbRight} ${styles.hide}`
				}
			/>

			<div className={styles.slider}>
				<div
					className={
						rangeBar
							? `${styles.slider__track} ${styles.show}`
							: `${styles.slider__track} ${styles.hide}`
					}
				/>
				<div
					ref={range}
					className={
						rangeBar
							? `${styles.slider__range} ${styles.show}`
							: `${styles.slider__range} ${styles.hide}`
					}
				/>
				<div className={styles.slider__leftValue}>
					<label className={styles.slider__leftValue_label}>
						от&nbsp;
						<input
							type="text"
							maxLength={
								`${defaultMax}`.length > 3
									? `${defaultMax}`.length + 1
									: `${defaultMax}`.length
							}
							size={
								`${defaultMax}`.length > 1
									? `${defaultMax}`.length - 1
									: `${defaultMax}`.length
							}
							value={
								minVal === 0 && `${defaultMax}`.length === 1
									? ''
									: new Intl.NumberFormat('ru-RU').format(minVal)
							}
							onChange={handleChangeMin}
							onBlur={handleBlurMin}
							onKeyDown={handleEnterPress}
							className={styles.slider__rightValue_input}
						/>
						&nbsp;{labelInput}
					</label>
				</div>
				<div className={styles.slider__rightValue}>
					<label className={styles.slider__rightValue_label}>
						до&nbsp;
						<input
							type="text"
							maxLength={
								`${defaultMax}`.length > 3
									? `${defaultMax}`.length + 1
									: `${defaultMax}`.length
							}
							size={
								`${defaultMax}`.length > 1
									? `${defaultMax}`.length - 1
									: `${defaultMax}`.length
							}
							value={
								maxVal === 0
									? ''
									: new Intl.NumberFormat('ru-RU').format(maxVal)
							}
							onChange={handleChangeMax}
							onBlur={handleBlurMax}
							onKeyDown={handleEnterPress}
							className={styles.slider__rightValue_input}
						/>
						&nbsp;{labelInput}
					</label>
				</div>
			</div>
		</div>
	);
}

MultiRangeSlider.propTypes = {
	min: PropTypes.number.isRequired,
	max: PropTypes.number.isRequired,
	onChange: PropTypes.func.isRequired,
	reset: PropTypes.bool,
	rangeBar: PropTypes.bool,
	labelInput: PropTypes.string,
};

export default memo(MultiRangeSlider);
