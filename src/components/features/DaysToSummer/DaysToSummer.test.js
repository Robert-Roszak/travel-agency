import React from 'react';
import {shallow} from 'enzyme';
import DaysToSummer from './DaysToSummer';

const select = {
  countdown: '.countdown',
};

describe('Component DaysToSummer', () => {
  it('DaysToSummer should render without crashing', () => {
    const component = shallow(<DaysToSummer />);
    expect(component).toBeTruthy();
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

  const checkDescriptionAtTime = (date, expectedDescription) => {
    it(`should show correct days left to Summer on ${date}`, () => {
      global.Date = mockDate(date);
      const component = shallow(<DaysToSummer />);
      const promoDescription = component.find(select.countdown).text();
      expect(promoDescription).toEqual(expectedDescription);
      global.Date = trueDate;
    });
  };

  const checkRenderAtTime = (date) => {
    it(`should not render on ${date}`, () => {
      global.Date = mockDate(date);
      const component = shallow(<DaysToSummer />);
      expect(component.exists(select.countdown)).toEqual(false);
      global.Date = trueDate;
    });
  };

  describe('Component DaysToSummer should render and count days with mocked Date', () => {
    checkDescriptionAtTime('Sep 23 2021', '271 days till Summer!');
    checkDescriptionAtTime('Jan 02 2021', '170 days till Summer!');
    checkDescriptionAtTime('Jun 20 2021', '1 day till Summer!');
  });

  describe('Component DaysToSummer should NOT render', () => {
    checkRenderAtTime('Sep 22 2021');
    checkRenderAtTime('Jun 21 2021');
    checkRenderAtTime('Jul 28 2021');
  });
});
