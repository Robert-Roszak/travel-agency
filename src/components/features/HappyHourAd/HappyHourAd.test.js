import React from 'react';
import {shallow} from 'enzyme';
import HappyHourAd from './HappyHourAd';

const select = {
  title: '.title',
  promo: '.promoDescription',
};

const mockProps = {
  title: 'Title test',
  promo: 'Happy hour!',
};

beforeAll(() => {
  const utilsModule = jest.requireActual('../../../utils/formatTime.js');
  utilsModule.formatTime = jest.fn(seconds => seconds);
});

describe('Component HappyHourAd', () => {
  it('HappyHourAd should render without crashing', () => {
    const component = shallow(<HappyHourAd />);
    expect(component).toBeTruthy();
  });

  it('HappyHourAd should render title and promo', () => {
    const component = shallow(<HappyHourAd />);
    expect(component.exists(select.title)).toEqual(true);
    expect(component.exists(select.promo)).toEqual(true);
  });

  it('HappyHourAd should render header with proper value', () => {
    const component = shallow(<HappyHourAd {...mockProps} />);
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
  });
});
