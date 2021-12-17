import React from 'react';
import { Link } from 'react-router-dom';

// import cn from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { sendUser } from '../../actions';
import classes from './SignIn.module.scss';

export const SignIn = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state);
  const {
    register,
    handleSubmit,
    formState: { errors },
    // watch,
  } = useForm();

  return (
    <div className={classes.signIn}>
      <h2 className={classes.title}>Sign In</h2>
      <form
        // className={classes.signUP__form}
        onSubmit={handleSubmit((data) => {
          console.log(data);
          dispatch(sendUser(data));
        })}
      >
        <div className={classes.input__block}>
          <label htmlFor="email" className={classes.description__form}>
            Email address
          </label>
          <input {...register('email', { required: true })} id="email" type="email" placeholder="Email address" />
          {errors.email && <p>It is requared</p>}
        </div>

        <div className={classes.input__block}>
          <label htmlFor="password" className={classes.description__form}>
            Password
          </label>
          <input
            {...register('password', { required: true, maxLength: 40, minLength: 6 })}
            id="password"
            type="password"
            placeholder="Password"
          />
          {user.errors && <p>check your username or password</p>}
          {/* {!user.user && <p>check your username or password</p>} */}
          {errors.password && <p>Your password needs to be at least 6 characters.</p>}
        </div>

        <button type="submit" className={classes.button}>
          Login
        </button>

        <div className={classes.signUp}>
          Already have an account?<Link to="/sign-up"> Sign Up.</Link>
        </div>
      </form>
    </div>
  );
};
