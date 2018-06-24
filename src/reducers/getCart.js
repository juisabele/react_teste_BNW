const items = { cart: '' };

const getCart = function getCart(state = { cart: items }, action) {
  console.log(action)
  switch (action.type) {
    case 'BUILD_CART':
      return { cart: action.data };
    default:
      return state;
  }
};

export default getCart;
