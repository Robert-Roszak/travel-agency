import React from 'react';
import PropTypes from 'prop-types';

import styles from './OrderSummary.scss';

import {calculateTotal} from '../../../utils/calculateTotal.js';
import {formatPrice} from '../../../utils/formatPrice.js';

const OrderSummary = ({tripCost, options}) => (
  <h2 className={styles.component}>
    Total: <strong>{formatPrice(calculateTotal(tripCost, options))}</strong>
  </h2>
);

OrderSummary.propTypes = {
  tripCost: PropTypes.string,
  options: PropTypes.object,
};
export default OrderSummary;
