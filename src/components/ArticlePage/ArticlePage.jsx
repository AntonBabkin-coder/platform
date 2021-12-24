import React, { useEffect, memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import uuid from 'react-uuid';
import format from 'date-fns/format';
import { Spin } from 'antd';
import {
	getArticlesPage,
	loadingIndicator,
	deleteArticle,
	sendLike,
} from '../../reduxResources/actions/actionArticles';
import { editPage } from '../../reduxResources/actions/actionPages';
import { showModalPage, hideModalPage } from '../../reduxResources/actions/actionIndicator';
import classes from './ArticlePage.module.scss';
import Atancion from './atancion.svg';
import { selectors } from '../../selectors/selectors';

export const ArticlePage = memo(({ itemSlug }) => {
	const dispatch = useDispatch();

	const {
		articleSelectors: { articlePage },
		userSelectors: { user },
		indicatorSelectors: { showModal },
	} = useSelector(selectors);

	const { token } = user;

	useEffect(() => {
		dispatch(getArticlesPage(itemSlug, token));
		dispatch(loadingIndicator());
	}, [dispatch, itemSlug, token]);

	if (!Object.keys(articlePage).length) {
		return (
			<div className={classes.example}>
				<Spin />
			</div>
		);
	}

	return (
		<div className={classes.article}>
			<div className={classes.title}>
				<h2>{articlePage.title}</h2>
				<div className={classes.like}>
					<label>
						<input
							type="checkbox"
							onChange={() => dispatch(sendLike(articlePage, user, articlePage))}
							checked={articlePage.favorited}
						/>
						<span className={classes.custom__checkbox} />
						<div className={classes.total__like}>{articlePage.favoritesCount}</div>
					</label>
				</div>
			</div>
			{articlePage.tagList.map((tag) => (
				<div key={uuid()} className={classes.tag}>
					{tag}
				</div>
			))}
			<div className={classes.text}>
				<p>{articlePage.body}</p>
			</div>
			<div className={classes.user}>
				<div className={classes.user__info}>
					<div>
						<div className={classes.user__name}>{articlePage.author.username}</div>
						<div className={classes.user__date}>{format(new Date(articlePage.updatedAt), 'MMMM d, y')}</div>
					</div>
					<div className={classes.user__img}>
						<img src={articlePage.author.image} alt="person" />
					</div>
				</div>
				{user && user.username === articlePage.author.username && (
					<div>
						<button type="button" className={classes.delete} onClick={() => dispatch(showModalPage())}>
							Delete
						</button>
						<Link to={`/articles/${itemSlug}/edit`}>
							<button type="button" className={classes.edit} onClick={() => dispatch(editPage())}>
								Edit
							</button>
						</Link>
					</div>
				)}
			</div>
			{showModal === true && (
				<div className={classes.modal}>
					<div className={classes.modal__title}>
						<img src={Atancion} alt="!" />
						Are you sure to delete this article?
					</div>
					<div className={classes.button__block}>
						<button type="button" className={classes.no} onClick={() => dispatch(hideModalPage())}>
							No
						</button>
						<button type="button" className={classes.yes} onClick={() => dispatch(deleteArticle(articlePage, user))}>
							Yes
						</button>
					</div>
				</div>
			)}
		</div>
	);
});

ArticlePage.defaultProps = {
	itemSlug: '',
};

ArticlePage.propTypes = {
	itemSlug: PropTypes.string,
};
