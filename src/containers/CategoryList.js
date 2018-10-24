import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchCategories, fetchProducts } from '../actions/index';

import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Button from '@material-ui/core/Button';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import Theme from '../components/Theme';
const styles = {
  root: {},
  gridList: {
    width: 300,
  },
  buttonBase: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 1,
    backgroundColor: Theme.palette.primary.contrastText,
    border: '4px solid #FFF',
    padding: '4px 6px',
  },
};

class CategoryList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: true,
      categorySelected: null,
    };
    this.handleClick = this.handleClick.bind(this);
    this.renderCategories = this.renderCategories.bind(this);
  }

  handleClick(event) {
    this.setState({ categorySelected: event.currentTarget.id }, () =>
      this.props.fetchProducts(this.state.categorySelected)
    );
  }

  renderCategories(category) {
    if (category.slug !== 'uncategorized') {
      return (
        <GridListTile
          onClick={this.handleClick}
          key={category.id}
          id={category.id}
        >
          <ButtonBase style={styles.buttonBase}>
            <Typography variant="subheading">{category.name}</Typography>
          </ButtonBase>
          <img src={category.image.src} id={category.id} />
        </GridListTile>
      );
    }
  }

  componentDidMount() {
    this.props.fetchCategories();
  }

  render() {
    return (
      <div>
        <GridList cellHeight={200} style={styles.gridList} cols={1}>
          {this.props.store.categories.map(this.renderCategories)}
        </GridList>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCategories, fetchProducts }, dispatch);
}

function mapStateToProps({ store }) {
  return { store };
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);
