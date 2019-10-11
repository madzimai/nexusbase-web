import React, { Component } from 'react';
import { Link } from "react-router-dom";
import url from '../../utilities/url';
import { dummyData } from '../DummyData';

class Collection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //
    };
  }

  render() {
    const link = url('collection', this.props);

    return (
      <li><Link to={link}>{this.props.name}</Link></li>
    )
  }
}

class CollectionList extends Component {
  
  state = {
    loading: true,
    collections: [],
  }

  componentDidMount() {
    this.setState({
      loading: false,
      collections: dummyData.collections
    });
  }

  render() {
    if (this.state.loading) {
      return (<p>Loading...</p>)
    }
    const collectionList = this.state.collections.map((collection) =>
      <Collection key={collection.id} {...collection} />
    );

    return (
      <ul>{collectionList}</ul>
    )
  }
}

export default CollectionList
