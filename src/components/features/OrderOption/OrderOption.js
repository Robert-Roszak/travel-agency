import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderOption.scss';
import OrderOptionDropdown from './OrderOptionDropdown.js';
import OrderOptionIcons from './OrderOptionIcons.js';
import OrderOptionCheckboxes from './OrderOptionCheckboxes.js';
import OrderOptionNumber from './OrderOptionNumber.js';
import OrderOptionText from './OrderOptionText.js';
import OrderOptionDate from './OrderOptionDate.js';

const optionTypes = {
  dropdown: OrderOptionDropdown,
  icons: OrderOptionIcons,
  checkboxes: OrderOptionCheckboxes,
  number: OrderOptionNumber,
  text: OrderOptionText,
  date: OrderOptionDate,
};

const OrderOption = ({name, type, id, setOrderOption, ...otherProps}) => {
  const OptionComponent = optionTypes[type];
  if(!OptionComponent){
    return null;
  } else {
    return (
      <div className={styles.component}>
        <h3 className={styles.title}>{name}</h3>
        <OptionComponent
          {...otherProps} setOptionValue={value => setOrderOption({[id]: value})}
        />
      </div>
    );
  }
};

OrderOption.propTypes = {
  tripCost: PropTypes.string,
  name: PropTypes.string,
};

export default OrderOption;
