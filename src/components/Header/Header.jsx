import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import classes from './Header.module.scss';
import { signUp, mainPage, signIn, createArticle } from '../../reduxResources/actions/actionPages';
import { getArticles } from '../../reduxResources/actions/actionArticles';
import { logOut } from '../../reduxResources/actions/actionUser';
import smile from './smile.png';
import { headerSelectors } from '../../selectors/selectors';

export const Header = memo(() => {
	const {
		userSelectors: { user },
	} = useSelector(headerSelectors);

	const dispatch = useDispatch();

	return (
		<div className={classes.header}>
			<div className={classes.left__side}>
				<Link
					to="/articles"
					onClick={() => {
						dispatch(getArticles(0, user.token));
						dispatch(mainPage());
					}}
				>
					<div className={classes.realWorld}>Realworld Blog</div>
				</Link>
			</div>
			<div className={classes.right__side}>
				{user.username ? (
					<div className={classes.authorization}>
						<Link
							to="/new-article"
							onClick={() => {
								dispatch(createArticle());
							}}
						>
							<div className={classes.create__article}>Create article</div>
						</Link>
						<Link to="/profile">
							<div className={classes.user__info}>
								<div className={classes.user__name}>{user.username}</div>
								<div className={classes.user__img}>
									<img src={user.image || smile} alt="person" />
								</div>
							</div>
						</Link>
						<Link
							to="/articles"
							onClick={() => {
								dispatch(logOut());
								localStorage.clear();
							}}
						>
							<div className={classes.log__out}>Log out</div>
						</Link>
					</div>
				) : (
					<div className={classes.main__header}>
						<Link
							to="/sign-in"
							onClick={() => {
								dispatch(signIn());
							}}
						>
							<div className={classes.sign__in}>Sign in</div>
						</Link>
						<Link
							to="/sign-up"
							onClick={() => {
								dispatch(signUp());
							}}
						>
							<div className={classes.sign__up}>Sign up</div>
						</Link>
					</div>
				)}
			</div>
		</div>
	);
});
