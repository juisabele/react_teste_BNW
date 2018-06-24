import React, { Component } from 'react';
import { connect } from 'react-redux';
import TotalBox from '../../components/TotalBox';
import '../../styles/app.scss';

export class Payment extends Component {
  constructor() {
    super();
    console.log(this.props)
  }
  render() {
    const cart = this.props.getCart;
    return (
      <div className="payment__container">
        <TotalBox productsList={cart} />}
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state)
  return {
    getCart: state.getCart.cart,
  };
}

export default connect(mapStateToProps)(Payment);
