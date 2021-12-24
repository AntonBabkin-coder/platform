import React, { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { sendEditUser } from '../../reduxResources/actions/actionUser';
import classes from './EditProfile.module.scss';
import { EditProfileSelectors } from '../../selectors/selectors';

export const EditProfile = memo(() => {
	const dispatch = useDispatch();

	const {
		userSelectors: { user },
	} = useSelector(EditProfileSelectors);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const borders = errors.repeat__password && classes.borders;

	return (
		<div className={classes.signUp}>
			<h2 className={classes.title}>Edit Profile</h2>
			<form
				onSubmit={handleSubmit((data) => {
					dispatch(sendEditUser(data, user));
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
					<input {...register('email')} id="email" type="email" placeholder="Email address" />
				</div>
				<div className={classes.input__block}>
					<label htmlFor="pasword" className={classes.description__form}>
						New pasword
					</label>
					<input
						{...register('password', { required: true, maxLength: 40, minLength: 6 })}
						id="password"
						type="password"
						className={borders}
						placeholder="New password"
					/>
					{errors.password && <p>Your password needs to be at least 6 characters.</p>}
				</div>
				<div className={classes.input__block}>
					<label htmlFor="image" className={classes.description__form}>
						Avatar image (url)
					</label>
					<input
						{...register('image')}
						id="image"
						type="text"
						alt="image"
						className={borders}
						placeholder="Avatar image"
					/>
				</div>
				<button type="submit" className={classes.button}>
					Save
				</button>
			</form>
		</div>
	);
});
