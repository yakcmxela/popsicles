import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProducts } from '../actions/index';
import { bindActionCreators } from 'redux';
import Theme from '../components/Theme';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Search } from '@material-ui/icons';

const styles = {
  form: {
    maxWidth: 948,
    margin: '16px auto',
    textAlign: 'center',
  },
  input: {
    minWidth: 300,
  },
  button: {
    marginLeft: 16,
    backgroundColor: Theme.palette.secondary.main,
  },
  icon: {
    color: 'white',
  },
};

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.handleClick();
  }

  handleClick() {
    if (this.state.searchValue === '') {
      return;
    }
    this.props.fetchProducts(this.state);
  }

  handleChange(event) {
    switch (event.target.id) {
      case 'searchValue':
        this.setState({ searchValue: event.target.value });
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} style={styles.form}>
        <TextField
          id="searchValue"
          label="Search Posts"
          styles={styles.input}
          value={this.state.searchValue}
          onChange={this.handleChange}
        />
        <Button style={styles.button} variant="fab" onClick={this.handleClick}>
          <Search style={styles.icon} />
        </Button>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchProducts }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
