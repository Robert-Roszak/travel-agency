import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderOption.scss';
import {formatPrice} from '../../../utils/formatPrice';
import Icon from '../../common/Icon/Icon';

const OrderOptionIcons = ({values, required, setOptionValue, currentValue}) => (
  <div className={styles.component}>
    {required ? '' : (
      <div
        className={styles.icon}
        onClick={() => setOptionValue('')}>
        <Icon name={'times-circle'}/>
        none
      </div>
    )}

    {values.map(value => (
      <div
        className={currentValue === value.id ? styles.iconActive : styles.icon}
        key={value.id}
        onClick={() => setOptionValue(value.id)}>
        <Icon name={value.icon}/>
        {value.name}
        {formatPrice(value.price)}
      </div>
    ))}
  </div>
);

OrderOptionIcons.propTypes = {
  values: PropTypes.array,
  required: PropTypes.bool,
  setOptionValue: PropTypes.func,
  formatPrice: PropTypes.func,
  currentValue: PropTypes.string,
};

export default OrderOptionIcons;
