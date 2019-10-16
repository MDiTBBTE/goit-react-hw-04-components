import React, { lazy, Suspense } from 'react';
import HomePage from './page/Home/HomePage';
import { Switch, Route, Link } from 'react-router-dom';
import styles from './App.module.css';

const App = () => {
  const AsyncAboutPage = lazy(() => import('./page/About/AboutPage'));
  const AsyncPetsPage = lazy(() => import('./page/Pats/PetsPage'));
  const AsyncPetPage = lazy(() => import('./page/Pat/PetPage'));

  return (
    <>
      <nav className={styles.nav}>
        <ul className={styles.nav__inner}>
          <li className={styles.nav__inner__item}>
            <Link className={styles.nav__inner__link} to="/about">
              About
            </Link>
          </li>
          <li className={styles.nav__inner__item}>
            <Link className={styles.nav__inner__link} to="/pets">
              Pets
            </Link>
          </li>
          <li className={styles.nav__inner__item}>
            <Link className={styles.nav__inner__link} to="/">
              Home
            </Link>
          </li>
        </ul>
      </nav>
      <Suspense fallback={<h2>Loading...</h2>}>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/about" component={AsyncAboutPage} />
          <Route path="/pets/:id" component={AsyncPetPage} />
          <Route path="/pets" component={AsyncPetsPage} />
        </Switch>
      </Suspense>
    </>
  );
};

export default App;
