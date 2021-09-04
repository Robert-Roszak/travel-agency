import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderOption.scss';
import {formatPrice} from '../../../utils/formatPrice';

const OrderOptionNumber = ({currentValue, limits, setOptionValue, price}) => (
  <div className={styles.number}>
    <input
      className={styles.inputSmall}
      type='number'
      value={currentValue}
      min={limits.min}
      max={limits.max}
      onChange={event => setOptionValue(event.currentTarget.value)}
    >
    </input>
    {formatPrice(price)}
  </div>
);

OrderOptionNumber.propTypes = {
  limits: PropTypes.object,
  currentValue: PropTypes.any,
  price: PropTypes.string,
  formatPrice: PropTypes.func,
  setOptionValue: PropTypes.func,
};

export default OrderOptionNumber;
