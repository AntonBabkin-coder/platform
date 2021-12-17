import React from 'react';
// import { Link } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import cn from 'classnames';
import { useForm } from 'react-hook-form';
// import { sendNewUser } from '../../actions';
import classes from './EditProfile.module.scss';

export const EditProfile = () => {
  // useEffect(() => {
  //   if ('errors' in newUser) {
  //     dispatch(showError());
  //   }
  // }, [dispatch, newUser]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    // watch,
  } = useForm();
  //   const password = useRef({});
  //   console.log(password.current);
  //   password.current = watch('password', '');

  //   const classesBorders = cn(classes.input__block, { [classes.borders]: errors.repeat__password && [classes.borders] });
  const borders = errors.repeat__password && classes.borders;

  // validate: (value) => value === watch('password', '')
  // if ('errors' in newUser) {
  //   dispatch(showError());
  // }

  return (
    <div className={classes.signUp}>
      {/* {'errors' in newUser && <div className={classes.error__message}>{newUser.errors}</div>}
      {/* {userExist && <div className={classes.error__message}>{newUser.errors}</div>} */}
      {/* {'user' in newUser && <div className={classes.ок__message}>Congratulations, the account is registered!</div>} */}

      <h2 className={classes.title}>Edit Profile</h2>
      <form
        // className={classes.signUP__form}
        onSubmit={handleSubmit((data) => {
          console.log(data);
          //   dispatch(sendNewUser(data));
        })}
      >
        <div className={classes.input__block}>
          <label htmlFor="username" className={classes.description__form}>
            Username
          </label>
          <input
            {...register('username', { required: true, maxLength: 20, minLength: 4 })}
            id="username"
            type="text"
            placeholder="Username"
          />
          {errors.username && <p>It is requared</p>}
        </div>

        <div className={classes.input__block}>
          <label htmlFor="email" className={classes.description__form}>
            Email address
          </label>
          <input {...register('email', { required: true })} id="email" type="email" placeholder="Email address" />
          {errors.email && <p>It is requared</p>}
        </div>

        <div className={classes.input__block}>
          <label htmlFor="new__pasword" className={classes.description__form}>
            New pasword
          </label>
          <input
            {...register('new__password', { required: true, maxLength: 40, minLength: 6 })}
            id="password"
            type="password"
            className={borders}
            placeholder="New password"
            // ref={password}
            // onChange={(event) => useRef(event.target.value)}
          />
          {errors.password && <p>Your password needs to be at least 6 characters.</p>}
        </div>

        <div className={classes.input__block}>
          <label htmlFor="repeat__password" className={classes.description__form}>
            Avatar image (url)
          </label>
          <input
            {...register('avatar__image')}
            // { validate: (value) => value === password.current })}
            id="avatar__image"
            type="password"
            className={borders}
            placeholder="Avatar image"

            // onChange={(event) => comparePassword(event.target.value)}
          />
          {/* {errors.repeat__password && <p>Passwords must match</p>}
          {/* {errors.repeat__password !== errors.password && <p>Passwords must match</p>} */}
        </div>

        {/* <div className={classes.agreement}>
          <input {...register('check', { required: true })} id="check" type="checkbox" value="check" />
          <label htmlFor="check">
            <p>I agree to the processing of my personal information</p>
          </label>
        </div> */}

        <button type="submit" className={classes.button}>
          Save
        </button>
        {/* <div className={classes.signIn}>
          Already have an account?<Link to="/sign-in"> Sign In.</Link>
        </div> */}
      </form>
    </div>
  );
};
