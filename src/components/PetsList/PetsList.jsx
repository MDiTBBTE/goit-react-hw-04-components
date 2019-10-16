import React from 'react';
import styles from './PetsList.module.css';
import { Link } from 'react-router-dom';
import PetInList from '../Pet/PetInList';

const PetsList = ({ pets = [] }) => {
  return (
    <ul className={styles.list}>
      {pets.map(pet => (
        <li key={pet.id} className={styles.list__item}>
          <Link className={styles.list__item__link} to={`/pets/${pet.id}`}>
            {<PetInList className={styles.list__item_tittle} {...pet} />}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default PetsList;
