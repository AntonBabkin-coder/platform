import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { sendNewUser } from '../../reduxResources/actions/actionUser';
import classes from './SignUp.module.scss';
import { selectors } from '../../selectors/selectors';

export const SignUp = memo(() => {
	const dispatch = useDispatch();

	const {
		userSelectors: { newUser },
	} = useSelector(selectors);

	const {
		register,
		handleSubmit,
		formState: { errors },
		watch,
	} = useForm();

	const borders = errors.repeat__password && classes.borders;

	return (
		<div className={classes.signUp}>
			{'errors' in newUser && <div className={classes.error__message}>{newUser.errors}</div>}
			<h2 className={classes.title}>Create new account</h2>
			<form
				onSubmit={handleSubmit((data) => {
					dispatch(sendNewUser(data));
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
					<label htmlFor="password" className={classes.description__form}>
						Password
					</label>
					<input
						{...register('password', { required: true, maxLength: 40, minLength: 6 })}
						id="password"
						type="password"
						className={borders}
						placeholder="Password"
					/>
					{errors.password && <p>Your password needs to be at least 6 characters.</p>}
				</div>
				<div className={classes.input__block}>
					<label htmlFor="repeat__password" className={classes.description__form}>
						Repeat password
					</label>
					<input
						{...register('repeat__password', { validate: (value) => value === watch('password', '') })}
						id="repeat__password"
						type="password"
						className={borders}
						placeholder="Repeat password"
					/>
					{errors.repeat__password && <p>Passwords must match</p>}
				</div>
				<div className={classes.agreement}>
					<input {...register('check', { required: true })} id="check" type="checkbox" value="check" />
					<label htmlFor="check">
						<p>I agree to the processing of my personal information</p>
					</label>
				</div>
				<button type="submit" className={classes.button}>
					Create
				</button>
				<div className={classes.signIn}>
					Already have an account?<Link to="/sign-in"> Sign In.</Link>
				</div>
			</form>
		</div>
	);
});
