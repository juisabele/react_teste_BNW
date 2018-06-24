import React from 'react';
import '../styles/app.scss';

export default (props => (
    <div className="products__box">
      {props.products.productsList.items.map(i => (
        <div className="box">
          <div className="box__image">
            <img src={i.product.imageObjects[0].thumbnail} />
          </div>
          <div className="box__description">
            <p className="box__title">{i.product.name}</p>
            <p className="box__price">
              R$ {i.product.priceSpecification.price % 1 != 0
              ? `${i.product.priceSpecification.price.toString().replace(/.([^.]*)$/, ',$1')}0` : `${ i.product.priceSpecification.price},00`}  
            </p>
          </div>
        </div>))}
    </div>
));
