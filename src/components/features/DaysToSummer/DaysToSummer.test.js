import React from 'react';
import {shallow} from 'enzyme';
import DaysToSummer from './DaysToSummer';

const select = {
  countdown: '.countdown',
  numberOfDays: '.countdown span',
};

const mockProps = {
  title: 'Title test',
  promo: 'Happy hour!',
};

beforeAll(() => {
  const utilsModule = jest.requireActual('../../../utils/formatTime.js');
  utilsModule.formatTime = jest.fn(seconds => seconds);
});

describe('Component DaysToSummer', () => {
  it('DaysToSummer should render without crashing', () => {
    const component = shallow(<DaysToSummer />);
    expect(component).toBeTruthy();
  });

  it('DaysToSummer should render countdown and number of days', () => {
    const component = shallow(<DaysToSummer />);
    expect(component.exists(select.countdown)).toEqual(true);
    expect(component.exists(select.numberOfDays)).toEqual(true);
  });

  /* testy:
Jeśli lato już trwa (21 czerwca - 23 września), to komponent nie powinien niczego pokazywać.
Jeśli aktualna pora roku jest inna niż lato, to komponent powinien pokazywać liczbę dni do najbliższego 21 czerwca w formacie <days> days to summer.
Jeśli liczba dni jest równo jeden, to zamiast days, tekst powinien używać słowa day (1 day to summer!).
*/
/*
  it('DaysToSummer should not render countdown if date is between 21 Jun and 23 Sept', () => {
    const component = shallow(<DaysToSummer {...mockProps} />);
    expect(component.find(select.title).text()).toEqual(mockProps.title);
  });

  const trueDate = Date;
  const mockDate = customDate => class extends Date {
    constructor(...args) {
      if(args.length){
        super(...args);
      } else {
        super(customDate);
      }
      return this;
    }
    static now(){
      return (new Date(customDate)).getTime();
    }
  };

  const checkDescriptionAtTime = (time, expectedDescription) => {
    it(`should show correct at ${time}`, () => {
      global.Date = mockDate(`2019-05-14T${time}.135Z`);

      const component = shallow(<HappyHourAd {...mockProps} />);
      const renderedTime = component.find(select.promo).text();
      expect(renderedTime).toEqual(expectedDescription);

      global.Date = trueDate;
    });
  };

  const checkDescriptionAfterTime = (time, delaySeconds, expectedDescription) => {
    it(`should show correct value ${delaySeconds} seconds after ${time}`, () => {
      jest.useFakeTimers();
      global.Date = mockDate(`2019-05-14T${time}.135Z`);

      const component = shallow(<HappyHourAd {...mockProps}/>);
      const newTime = new Date();

      newTime.setSeconds(newTime.getSeconds() + delaySeconds);
      global.Date = mockDate(newTime.getTime());
      jest.advanceTimersByTime(delaySeconds * 1000);

      const renderedTime = component.find(select.promo).text();

      expect(renderedTime).toEqual(expectedDescription);

      global.Date = trueDate;
      jest.useRealTimers();
    });
  };

  describe('Component HappyHourAd with mocked Date', () => {
    checkDescriptionAtTime('11:57:58', '122');
    checkDescriptionAtTime('11:59:59', '1');
    checkDescriptionAtTime('13:00:00', 23 * 60 * 60 + '');
  });

  describe('Component HappyHourAd with mocked Date and delay', () => {
    checkDescriptionAfterTime('11:57:58', 2, '120');
    checkDescriptionAfterTime('11:59:58', 1, '1');
    checkDescriptionAfterTime('13:00:00', 60 * 60, 22 * 60 * 60 + '');
  });

  describe('Component HappyHourAd should render promo in between 12:00 and 12:59', () => {
    checkDescriptionAtTime('12:00:00', mockProps.promo);
    checkDescriptionAtTime('12:59:59', mockProps.promo);
    checkDescriptionAtTime('12:30:00', mockProps.promo);
  });

  describe('Component HappyHourAd should switch to promo on 12:00', () => {
    checkDescriptionAfterTime('11:59:58', 2, mockProps.promo);
    checkDescriptionAfterTime('11:59:58', 570, mockProps.promo);
    checkDescriptionAfterTime('11:59:58', 60 * 60, mockProps.promo);
  }); */
});
