import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Theme from '../components/Theme';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

const styles = {
  cart: {
    padding: '2rem',
  },
  headline: {
    color: Theme.palette.text.secondary,
  },
  table: {},
};

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.renderCart = this.renderCart.bind(this);
  }

  renderCart(cartItem) {
    return (
      <TableRow key={cartItem.productSelected}>
        <TableCell>{cartItem.productName}</TableCell>
        <TableCell>${cartItem.productPrice}</TableCell>
        <TableCell>{cartItem.productQuantity}</TableCell>
      </TableRow>
    );
  }

  render() {
    return (
      <div style={styles.cart}>
        <Typography variant="headline" style={styles.headline}>
          Shopping Cart
        </Typography>
        <Table style={styles.table}>
          <TableBody>
            <TableRow>
              <TableCell>Product</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Quantity</TableCell>
            </TableRow>
            {this.props.cart.products.map(this.renderCart)}
            <TableRow>
              <TableCell>Subtotal</TableCell>
              <TableCell>------</TableCell>
              <TableCell>${this.props.cart.subtotal}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    );
  }
}

function mapStateToProps({ cart }) {
  return { cart };
}

export default connect(mapStateToProps)(Cart);
