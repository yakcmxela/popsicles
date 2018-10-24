import React, { Component } from 'react';
import '../style/App.css';
import Dashboard from '../containers/Dashboard';
import SearchBar from '../containers/SearchBar';
import CategoryList from '../containers/CategoryList';
import ProductsList from '../containers/ProductsList';
import { MuiThemeProvider } from '@material-ui/core/styles';
import Theme from './Theme';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={Theme}>
        <Dashboard />
        <ProductsList />
      </MuiThemeProvider>
    );
  }
}

export default App;
