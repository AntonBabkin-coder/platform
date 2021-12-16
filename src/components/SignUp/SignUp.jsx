import React from 'react';
import classes from './SignUp.module.scss';

export const SignUp = () => (
  <div className={classes.signUp}>
    <h2 className={classes.title}>Create new account</h2>
    <form className={classes.signUP__form}>
      <div className={classes.description__form}>Username</div>
      <input type="text" />
      <div className={classes.description__form}>Email adress</div>
      <input type="email" />
      <div className={classes.description__form}>Password</div>
      <input type="password" />
      <div className={classes.description__form}>Repeat password</div>
      <input type="password" />
    </form>
    <div className={classes.agreement}>
      <input id="check" type="checkbox" value="check" />
      <label htmlFor="check">
        <p>I agree to the processing of my personal information</p>
      </label>
    </div>
    <button type="button" className={classes.button}>
      Create
    </button>
    <div className={classes.signIn}>
      Already have an account?<a href="#"> Sign In.</a>{' '}
    </div>
  </div>
);
