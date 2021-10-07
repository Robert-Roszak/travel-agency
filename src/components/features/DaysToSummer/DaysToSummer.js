import React from 'react';
import styles from './DaysToSummer.scss';

class DaysToSummer extends React.Component {

  getDaysTillSummer() {
    const currentTime = new Date();
    console.log('currentTime: ', currentTime);
    const thisYear = currentTime.getUTCFullYear();
    console.log('this year: ', thisYear);
    const thisSummerStart = new Date(`June 21, ${thisYear} 00:00:00`);
    const thisSummerEnd = new Date(`September 22, ${thisYear} 23:59:59`);

    if ((currentTime < thisSummerStart) || (currentTime > thisSummerEnd)) {
      const nextYear = currentTime.getUTCFullYear() + 1;
      const nextSummerStart = new Date(`June 21, ${nextYear} 00:00:00`);
      //const nextSummerEnd = new Date(`September 22, ${nextYear} 23:59:59`);
      const daysLeft = Math.round((nextSummerStart - currentTime)/86400000);
      console.log('daysLeft: ', daysLeft);
      return `${daysLeft} days till Summer!`;
    }
    else return null;
  }

  render() {
    return (
      console.log(this.getDaysTillSummer()),
      <div className={styles.component}>
        <h3 className={styles.countdown}>{this.getDaysTillSummer()}</h3>
      </div>
    );
  }
}

export default DaysToSummer;
