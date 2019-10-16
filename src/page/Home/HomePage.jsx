import React from 'react';
import styles from './HomePage.module.css';

const HomePage = () => {
  return (
    <div className={styles.div}>
      <img
        className={styles.div__img}
        src="https://pawsandclawspets.files.wordpress.com/2011/12/paws-and-claws-logo-large.jpg"
        alt=""
      />
      <h1 className={styles.div__tittle}>Welcome to Paws online store</h1>
    </div>
  );
};

export default HomePage;
