import React from 'react';
import styles from './PetInList.module.css';
import PropTypes from 'prop-types';

const Pet = ({ name, image, age, gender, color, breed, goBack }) => {
  return (
    <>
      <section className={styles.section}>
        <button className={styles.button} onClick={goBack}>
          Return
        </button>
        <h1>All about {name}</h1>
        <div className={styles.main}>
          <img src={image} alt="" className={styles.photo} />
          <div className={styles.about}>
            <span>Age: {age}</span>
            <p>Gender: {gender}</p>
            <p>Color: {color}</p>
            <p>Breed: {breed}</p>
          </div>
        </div>
        <p className={styles.desc}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus delect
          us recusandae accusantium. Libero quae fugit sunt reprehenderit fuga
          voluptas nesciunt, omnis nemo consequatur unde officiis amet dolorum
          quibusdam eligendi minima!
        </p>
      </section>
    </>
  );
};

Pet.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  age: PropTypes.string,
  color: PropTypes.string,
  gender: PropTypes.string,
  breed: PropTypes.string,
};

export default Pet;
