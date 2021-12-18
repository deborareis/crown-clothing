import React, { Component } from 'react';
import { connect } from 'react-redux';

import { toggleCartHidden } from '../../redux/cart/cart.actions';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './cart-icon.styles.scss';

const CartIcon = ({ toggleCartHidden }) => (
  <div className='cart-icon' onClick={toggleCartHidden}>
    <ShoppingIcon className='shopping-icon'>
      <span className='item-count'>1</span>
    </ShoppingIcon>
  </div>
);

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
  //! toggleCartHidden is just a function() tha triggers the dispatch of toggleCartHidden
});
export default connect(null, mapDispatchToProps)(CartIcon);
