import React from 'react';
import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
import { Row, Col } from 'react-flexbox-grid';
import OrderSummary from '../OrderSummary/OrderSummary.js';

const OrderForm = ( { tripCost, options }) => (
  <Row>
    <Col xs={12}>
      <OrderSummary tripCost={tripCost} options={options}/>
    </Col>
  </Row>

);

OrderForm.propTypes = {
  tripCost: PropTypes.string,
  options: PropTypes.object,
};

export default OrderForm;

// const mapStateToProps = () => ({

// });

// const mapDispatchToProps = {

// };

// // export default connect(mapStateToProps, mapDispatchToProps)(OrderForm);
