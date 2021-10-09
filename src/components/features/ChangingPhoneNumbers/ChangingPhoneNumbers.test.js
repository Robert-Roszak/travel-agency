import React from 'react';
import {shallow} from 'enzyme';
import ChangingPhoneNumbers from './ChangingPhoneNumbers';

const select = {
  phone: '.phone',
};

describe('Component ChangingPhoneNumbers', () => {
  it('ChangingPhoneNumbers should render without crashing', () => {
    const component = shallow(<ChangingPhoneNumbers />);
    expect(component).toBeTruthy();
  });

  it('ChangingPhoneNumbers should render phone details', () => {
    const component = shallow(<ChangingPhoneNumbers />);
    expect((component).find(select.phone)).toBeTruthy();
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
    it(`should show correct number or information on ${date}`, () => {
      global.Date = mockDate(date);
      const component = shallow(<ChangingPhoneNumbers />);
      const number = component.find(select.phone).text();
      expect(number).toEqual(expectedDescription);
      global.Date = trueDate;
    });
  };

  describe('Component ChangingPhoneNumbers should render phone number or other information with mocked time', () => {
    checkDescriptionAtTime('2021-05-14T07:59:59.135Z', 'The office opens at 8:00 UTC');
    checkDescriptionAtTime('2021-05-14T08:00:00.135Z', 'Amanda, 678.243.8455');
    checkDescriptionAtTime('2021-05-14T11:59:59.135Z', 'Amanda, 678.243.8455');
    checkDescriptionAtTime('2021-05-14T12:00:00.135Z', 'Tobias, 278.443.6443');
    checkDescriptionAtTime('2021-05-14T15:59:59.135Z', 'Tobias, 278.443.6443');
    checkDescriptionAtTime('2021-05-14T16:00:00.135Z', 'Helena, 167.280.3970');
    checkDescriptionAtTime('2021-05-14T21:59:59.135Z', 'Helena, 167.280.3970');
    checkDescriptionAtTime('2021-05-14T22:00:00.135Z', 'The office opens at 8:00 UTC');
  });
});
