import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderOption.scss';

const OrderOptionText = ({setOptionValue}) => (
  <div className={styles.component}>
    <input
      className={styles.inputSmall}
      type='text'
      required={true}
      // w form to tez nie dzialalo, strona sie przeladowuje na klikniecie przycisku, alert nie wyskakuje ze required, event.preventDefault nic nie daje
      onChange={event => setOptionValue(event.currentTarget.value)}
    >
    </input>
  </div>
);

OrderOptionText.propTypes = {
  setOptionValue: PropTypes.func,
};

export default OrderOptionText;
