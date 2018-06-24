import axios from 'axios';

export default function fetchCart(dispatch) {
  axios.get('http://www.mocky.io/v2/5b15c4923100004a006f3c07')
    .then(({ data }) => {
      return dispatch({ type: 'BUILD_CART', data });
    }).catch(error => console.error('error', error));
}
