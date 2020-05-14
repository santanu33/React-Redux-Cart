import React, { Component } from "react";

import { connect } from "react-redux";
// import { bindActionCreators } from "redux";

import ItemList from "./itemList.js";
import CartList from "./cartList.js";
import Total from "./total.js";

import { fetchProducts } from "../actions/fetchData";

class Main extends Component {
  componentDidMount() {
    this.props.fetchProducts();
  }

  render() {
    return (
      <div>
        <ItemList />
        <hr />
        <CartList />
        <hr />
        <Total />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchProducts: () => dispatch(fetchProducts()),
});

export default connect(
  null,
  mapDispatchToProps
)(Main);
