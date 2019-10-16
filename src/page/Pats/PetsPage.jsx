import React, { Component } from 'react';
import PetsList from '../../components/PetsList/PetsList';
import styles from './PetsPage.module.css';
import pets from '../../pets.json';

class Pats extends Component {
  render() {
    return (
      <section className={styles.section}>
        <h1 className={styles.section__tittle}>Available pats</h1>
        <PetsList pets={pets} />
      </section>
    );
  }
}

export default Pats;
