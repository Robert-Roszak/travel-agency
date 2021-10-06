import React from 'react';
import PropTypes from 'prop-types';
import styles from './HappyHourAd.scss';
import { formatTime } from '../../../utils/formatTime';

class HappyHourAd extends React.Component {
  constructor(){
    super();
    setInterval(() => this.forceUpdate(), 1000);
  }

  getCountdownTime(){
    const currentTime = new Date();
    const nextNoon = new Date(Date.UTC(currentTime.getUTCFullYear(), currentTime.getUTCMonth(), currentTime.getUTCDate(), 12, 0, 0, 0));

    if(currentTime.getUTCHours() >= 12){
      nextNoon.setUTCDate(currentTime.getUTCDate()+1);
    }

    return Math.round((nextNoon.getTime() - currentTime.getTime())/1000);
  }

  getPromotion(){
    if(this.getCountdownTime() > 23 * 60 * 60){
      return this.props.promo;
    }
    else {
      return formatTime(this.getCountdownTime());
    }
  }

  render() {
    const {title} = this.props;
    return (
      <div className={styles.component}>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.promoDescription}>{this.getPromotion()}</div>
      </div>
    );
  }
}


HappyHourAd.propTypes = {
  title: PropTypes.string,
  promo: PropTypes.string,
};

export default HappyHourAd;
