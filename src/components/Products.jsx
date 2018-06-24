import React from 'react';
import { Link } from 'react-router-dom';
import ProductsBox from './ProductsBox';
import TotalBox from './TotalBox';
import '../styles/app.scss';

export default (props => (
  <div className="products">
    <h2>Produtos</h2>
    <ProductsBox products={props} />
    <TotalBox products={props} />
    <Link to="/Payment">
      <button type="button" className="default__button">
        Seguir para o pagamento
      </button>
    </Link>
  </div>
));
