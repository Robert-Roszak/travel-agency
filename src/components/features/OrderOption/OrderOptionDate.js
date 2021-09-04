import React from 'react';
import styles from './OrderOption.scss';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const OrderOptionDate = ({currentValue, setOptionValue}) => {
  return (
    <DatePicker
      className={styles.input}
      value={currentValue}
      selected={currentValue}
      onChange={setOptionValue}
      placeholderText={'Start date'}

    />
  );
};

OrderOptionDate.propTypes = {
  currentValue: PropTypes.any,
  setOptionValue: PropTypes.func,
};

export default OrderOptionDate;
