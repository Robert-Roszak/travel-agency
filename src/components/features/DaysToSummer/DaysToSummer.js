import React from 'react';
import styles from './DaysToSummer.scss';

class DaysToSummer extends React.Component {

  getDaysTillSummer() {
    const currentTime = new Date();
    const thisYear = currentTime.getUTCFullYear();
    const thisSummerStart = new Date(`June 21, ${thisYear} 00:00:00`);
    const thisSummerEnd = new Date(`September 22, ${thisYear} 23:59:59`);

    if (currentTime < thisSummerStart) {
      const daysLeft = Math.ceil((thisSummerStart - currentTime)/86400000);
      if (daysLeft === 1)
        return `${daysLeft} day till Summer!`;
      else return `${daysLeft} days till Summer!`;
    }
    else if (currentTime > thisSummerEnd) {
      const nextYear = currentTime.getUTCFullYear() + 1;
      const nextSummerStart = new Date(`June 21, ${nextYear} 00:00:00`);
      const daysLeft = Math.ceil((nextSummerStart - currentTime)/86400000);
      if (daysLeft === 1)
        return `${daysLeft} day till Summer!`;
      else return `${daysLeft} days till Summer!`;
    }
    else return null;
  }

  render() {
    if (this.getDaysTillSummer()) {
      return (
        <div className={styles.component}>
          <h3 className={styles.countdown}>{this.getDaysTillSummer()}</h3>
        </div>
      );
    }
    else return null;
  }
}

export default DaysToSummer;
