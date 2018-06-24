import React from 'react';
import '../styles/app.scss';

export default (props => (
  <div className="price__box">
    <div className="price__subTotal">
      <p>Produtos</p>
      <p>R$ {props.products.productsList.subTotal % 1 != 0
              ? `${props.products.productsList.subTotal.toString().replace(/.([^.]*)$/, ',$1')}0` : `${ props.products.productsList.subTotal},00`}</p>
    </div>
    <div className="price__shippingTotal">
      <p>Frete</p>
      <p>R$ {props.products.productsList.shippingTotal % 1 != 0
              ? `${props.products.productsList.shippingTotal.toString().replace(/.([^.]*)$/, ',$1')}0` : `${ props.products.productsList.shippingTotal},00`}</p>
    </div>
    <div className="price__discount">
      <p>Desconto</p>
      <p>- R$ {props.products.productsList.discount % 1 != 0
              ? `${props.products.productsList.discount.toString().replace(/.([^.]*)$/, ',$1')}0` : `${ props.products.productsList.discount},00`}</p>
    </div>
    <div className="price__total">
      <p>Total</p>
      <p>R$ {props.products.productsList.total % 1 != 0
              ? `${props.products.productsList.total.toString().replace(/.([^.]*)$/, ',$1')}0` : `${ props.products.productsList.total},00`}</p>
    </div>
  </div>
));
