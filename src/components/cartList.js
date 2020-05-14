import React, { Component } from "react";
import { connect } from "react-redux";

import { add, subtract, removeItemFromCart } from "../actions/action";

class CartList extends Component {
  add = (e, itemname) => {
    this.props.dispatch(add(itemname));
  };

  subtract = (e, itemname) => {
    this.props.dispatch(subtract(itemname));
  };

  removeItem = (e, itemname, amount) => {
    console.log("amount", amount);
    this.props.dispatch(removeItem(itemname, amount));
  };

  render() {
    const { cart } = this.props;
    const cartList = cart.map((i, j) => {
      return (
        <div className="col-xs-4 col-md-3" data-cart-product key={j}>
          <div className="thumbnail">
            <div className="caption">
              <h3>{i.itemname}</h3>
              <p>
                {i.price}*{i.cartCount}={i.price * i.cartCount}
              </p>
              <div className="number">
                <button onClick={e => this.subtract(e, i.itemname)}>-</button>
                <button>{i.cartCount}</button>
                <button onClick={e => this.add(e, i.itemname)}>+</button>
                <br />
                <button
                  onClick={e =>
                    this.removeItem(e, i.itemname, i.price * i.cartCount)
                  }
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    });
    return <div>{cartList}</div>;
  }
}

const mapStateToProps = state => ({
  item: state.products.item,
  cart: state.products.cart,
  total: state.products.total
});
// Connect is a HOC https://reactjs.org/docs/higher-order-components.html
// Both the Provider and Connect HOCs gives any React app the ability to easily work with Redux’s store.
export default connect(mapStateToProps)(CartList);
