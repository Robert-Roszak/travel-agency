import React from 'react';
import {shallow} from 'enzyme';
import TripSummary from './TripSummary';

describe('Component TripSummary', () => {
  it('should generate proper link', () => {
    const tags = ['aa','bb'];
    const expectedAddress = '/trip/abc';
    const address = 'abc';
    const image = 'src/img.jpg';
    const alt = 'IMG name';
    const days = 12;
    const cost = '42312';
    const component = shallow(<TripSummary id={address} tags={tags} cost={cost} days={days} image={image} name={alt}/>);

    expect(component.find('.link').prop('to')).toEqual(expectedAddress);
  });

  it('<img> should have proper src and alt', () => {
    const tags = ['aa','bb'];
    const alt = 'IMG name';
    const image = 'src/img.jpg';
    const id = 'test';
    const days = 12;
    const cost = '42312';
    const component = shallow(<TripSummary image={image} name={alt} tags={tags} id={id} cost={cost} days={days}/>);

    expect(component.find('img').prop('src')).toEqual(image);
    expect(component.find('img').prop('alt')).toEqual(alt);
  });

  it('proper render of props name cost and days', () => {
    const tags = ['aa','bb'];
    const alt = 'IMG name';
    const cost = '42312';
    const days = 12;
    const id = 'test';
    const image = 'src/img.jpg';
    const component = shallow(<TripSummary cost={cost} days={days} name={alt} tags={tags} id={id} image={image}/>);
    //console.log(component.debug());

    expect(component.find('img').prop('alt')).toEqual(alt);
    expect(component.find('.title').text()).toEqual(alt);
    expect(component.contains(<span>{days} days</span>)).toEqual(true);
    expect(component.contains(<span>from {cost}</span>)).toEqual(true);
  });

  it('should throw error without required props', () => {
    expect(() => shallow(<TripSummary />)).toThrow();
  });

  it('should render all tags', () => {
    const tags = ['aa','bb','cc'];
    const alt = 'IMG name';
    const cost = '42312';
    const days = 12;
    const id = 'test';
    const image = 'src/img.jpg';
    const component = shallow(<TripSummary image={image} name={alt} tags={tags} id={id} cost={cost} days={days}/>);

    expect(component.find('.tag').at(0).text()).toEqual('aa');
    expect(component.find('.tag').at(1).text()).toEqual('bb');
    expect(component.find('.tag').at(2).text()).toEqual('cc');
  });

  it('should check if props tags is false', () => {
    const tags = [];
    const alt = 'IMG name';
    const cost = '42312';
    const days = 12;
    const id = 'test';
    const image = 'src/img.jpg';
    const component = shallow(<TripSummary image={image} name={alt} tags={tags} id={id} cost={cost} days={days}/>);

    expect(component.find('.tag').exists()).toEqual(false);
  });
});
