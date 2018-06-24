import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      itens: [],
    };
  }

  render() {
    return (
      <div className="header__nav">
        <ul>
          <li>
            <Link to="/Cart">Sacola</Link>
          </li>
          <li>
            <Link to="/Payment">Pagamento</Link>
          </li>
          <li>
            <Link to="/">Confirmacão</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Header;
