import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderOption.scss';

const OrderOptionText = ({setOptionValue}) => (
  <div className={styles.component}>
    <input
      className={styles.inputSmall}
      type='text'
      onChange={event => setOptionValue(event.currentTarget.value)}
    >
    </input>
  </div>
);

OrderOptionText.propTypes = {
  setOptionValue: PropTypes.func,
};

export default OrderOptionText;
