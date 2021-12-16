import React from 'react';
import { Route, Link } from 'react-router-dom';
import { Article } from '../Article/Article';
import classes from './Header.module.scss';

export const Header = () => {
  const mainPage = () => <Route path="/articles/" component={Article} />;
  console.log(mainPage);

  return (
    <div className={classes.header}>
      <div className={classes.left__side}>
        <Link to="/articles">
          <div className={classes.realWorld}>Realworld Blog</div>
        </Link>
      </div>
      <div className={classes.right__side}>
        <div className={classes.sign__in}>Sign in</div>
        <Link to="/articles/sign-up">
          <div className={classes.sign__up}>Sign up</div>
        </Link>
      </div>
    </div>
  );
};
