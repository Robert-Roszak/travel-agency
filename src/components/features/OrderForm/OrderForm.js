import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-flexbox-grid';
import OrderSummary from '../OrderSummary/OrderSummary.js';
import pricing from '../../../../src/data/pricing.json';
import OrderOption from '../OrderOption/OrderOption.js';
import {formatPrice} from '../../../utils/formatPrice';
import {calculateTotal} from '../../../utils/calculateTotal.js';
import settings from '../../../data/settings.js';
import Button from '../../common/Button/Button.js';

const sendOrder = (event, options, tripCost, tripName, tripCountry, tripId, countryCode) => {
  const totalCost = formatPrice(calculateTotal(tripCost, options));
  const tripDetails = {totalCost, tripName, tripCountry, tripId, countryCode};

  if(options.name && options.contact) {
    event.preventDefault();
    const payload = {
      ...options,
      tripDetails,
    };

    const url = settings.db.url + '/' + settings.db.endpoint.orders;

    const fetchOptions = {
      cache: 'no-cache',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    };

    fetch(url, fetchOptions)
      .then(function(response){
        return response.json();
      }).then(function(parsedResponse){
        console.log('parsedResponse', parsedResponse);
      });
  }
  else return;
};

const OrderForm = ({tripCost, options, setOrderOption, tripName, tripCountry, tripId, countryCode}) => (
  <Row>
    {pricing.map(option => (
      <Col md={4} key={option.id}>
        <OrderOption {...option} currentValue={options[option.id]} setOrderOption={setOrderOption}/>
      </Col>))}
    <Col xs={12}>
      <OrderSummary tripCost={tripCost} options={options}/>
    </Col>
    <Button onClick={(event) => sendOrder(event, options, tripCost, tripName, tripCountry, tripId, countryCode)}>Order now!</Button>
  </Row>
);

OrderForm.propTypes = {
  tripCost: PropTypes.string,
  options: PropTypes.object,
  setOrderOption: PropTypes.func,
  tripName: PropTypes.string,
  tripCountry: PropTypes.string,
  tripId: PropTypes.string,
  countryCode: PropTypes. string,
};

export default OrderForm;
