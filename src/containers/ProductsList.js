import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../actions/index';
import { bindActionCreators } from 'redux';
import { withStyles } from '@material-ui/core/styles';

import Theme from '../components/Theme';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import IconButton from '@material-ui/core/IconButton';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import TextField from '@material-ui/core/TextField';
import { AddShoppingCart } from '@material-ui/icons';

const styles = {
  grid: {
    maxWidth: 832,
    margin: '12px auto',
  },
  card: {
    width: 400,
    height: 'auto',
    borderRadius: '8px',
  },
  cardHeader: {
    fontSize: '16px',
  },
  media: {
    height: 0,
    paddingTop: '67%',
    backgroundSize: 'cover',
  },
  avatar: {
    backgroundColor: Theme.palette.secondary.main,
    color: Theme.palette.primary.contrastText,
  },
  select: {
    margin: '0 1rem',
  },
};

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productSelected: '',
      productName: '',
      productPrice: '',
      productQuantity: 1,
      subtotal: 0,
    };
    this.handleClick = this.handleClick.bind(this);
    this.renderPost = this.renderPost.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleClick(event) {
    let quantity = parseInt(document.getElementById(event.currentTarget.id + 'Quantity').value);
    let price = parseFloat(event.currentTarget.dataset['price']);
    let productSubtotal = price * quantity;
    let fullSubtotal = parseFloat(this.state.subtotal) + productSubtotal;
    let data = {
      product: {
        productSelected: event.currentTarget.id,
        productName: event.currentTarget.dataset['name'],
        productPrice: productSubtotal,
        productQuantity: quantity,
      },
      subtotal: fullSubtotal,
    };
    
    this.props.addToCart(data);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  renderPost(product) {
    let imgSrc = product.images[0].src;
    return (
      <Grid key={product.id} item>
        <Card className="PostCard" style={styles.card}>
          <CardMedia image={imgSrc} style={styles.media} title={product.name} />
          <CardHeader
            avatar={
              <div>
                <TextField
                  id={product.id + 'Quantity'}
                  name={product.id + 'Quantity'}
                  type="number"
                  onChange={this.handleChange}
                  style={styles.select}
                  inputProps={{ min: "1", max: "10", step: "1" }}
                />
                <IconButton
                  style={styles.avatar}
                  onClick={this.handleClick}
                  id={product.id}
                  data-name={product.name}
                  data-price={product.price}
                >
                  <AddShoppingCart />
                </IconButton>
              </div>
            }
            title={product.name}
            subheader={'$' + product.price}
            style={styles.cardHeader}
          />
        </Card>
      </Grid>
    );
  }
  render() {
    if (!this.props.products) {
      return <div />;
    } else {
      return (
        <Grid container spacing={16} style={styles.grid}>
          {this.props.products.map(this.renderPost)}
        </Grid>
      );
    }
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addToCart }, dispatch);
}

function mapStateToProps({ store }) {
  let products = store.products;
  return { products };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
