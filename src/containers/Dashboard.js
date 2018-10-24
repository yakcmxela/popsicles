import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Theme from '../components/Theme';
import CategoryList from './CategoryList';
import Cart from './Cart';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Store from '@material-ui/icons/Store';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/Drawer';
console.log(Theme);

const styles = {
  appBar: {
    padding: '16px',
    backgroundColor: Theme.palette.primary.contrastText,
  },
  toolbar: {
    justifyContent: 'space-between',
  },
  shopButton: {
    backgroundColor: Theme.palette.secondary.main,
    color: Theme.palette.primary.contrastText,
  },
  basketButton: {
    backgroundColor: Theme.palette.primary.main,
    color: Theme.palette.primary.contrastText,
  },
  headline: {
    textTransform: 'uppercase',
    fontSize: '1rem',
    color: Theme.palette.text.secondary,
    borderBottom: '2px solid ' + Theme.palette.primary.light,
    borderTop: '2px solid ' + Theme.palette.secondary.light,
    borderRadius: '8px',
    padding: '8px',
  },
};

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      top: false,
      left: false,
      bottom: false,
      right: false,
    };
  }

  toggleShop = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  toggleCart = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  render() {
    return (
      <div>
        <AppBar position="static" style={styles.appBar}>
          <Toolbar style={styles.toolbar}>
            <IconButton
              style={styles.shopButton}
              onClick={this.toggleShop('left', true)}
            >
              <Store />
            </IconButton>
            <Typography style={styles.headline}>The Popsicle Stand</Typography>
            <IconButton
              style={styles.basketButton}
              onClick={this.toggleCart('right', true)}
            >
              <ShoppingBasket />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer
          anchor="left"
          open={this.state.left}
          onClose={this.toggleShop('left', false)}
          onClick={this.toggleShop('left', false)}
        >
          <CategoryList />
        </Drawer>
        <Drawer
          anchor="right"
          open={this.state.right}
          onClose={this.toggleCart('right', false)}
        >
          <Cart />
        </Drawer>
      </div>
    );
  }
}

export default Dashboard;
