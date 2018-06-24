import React, { Component } from 'react';
import { connect } from 'react-redux';
import fetchCart from '../../actions/actionCreator';
import Products from '../../components/Products';
import '../../styles/app.scss';

const mapDispatchToProps = dispatch => ({
  updateCart: () => fetchCart(dispatch),
});

export class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {cart: false}
  }

  componentWillMount() {
    this.props.updateCart()
  }

  componentWillReceiveProps() {
    this.setState({cart: true})
  }
  
  render() {
    const cart = this.props.getCart;
    return (
      <div className="cart__container">
        {this.state.cart ? <Products productsList={cart} /> : 'sem props'}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    getCart: state.getCart.cart,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
