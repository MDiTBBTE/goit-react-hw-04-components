import React from 'react';
import styles from './PetInList.module.css';

const PetInList = ({ name, image }) => {
  return (
    <>
      <img src={image} alt="" className={styles.photo} />
      <h2 className={styles.tittle}>{name}</h2>
    </>
  );
};

export default PetInList;
