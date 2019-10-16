import React, { Component } from 'react';
import pets from '../../pets.json';
import Pet from '../../components/Pet/Pet';

const getIdFromProps = props => props.match.params.id;

class PetPage extends Component {
  state = { pet: null };

  componentDidMount() {
    const id = getIdFromProps(this.props);
    const selectedPet = pets.find(pet => pet.id === id);

    this.setState({ pet: selectedPet });
  }

  handleGoBack = () => {
    this.props.history.push('/pets');
  };

  render() {
    const { pet } = this.state;
    return <Pet {...pet} goBack={this.handleGoBack} />;
  }
}

export default PetPage;
