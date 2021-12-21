import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
// import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import uuid from 'react-uuid';
import format from 'date-fns/format';
import { Spin } from 'antd';
import {
  getArticlesPage,
  loadingIndicator,
  editPage,
  deleteArticle,
  showModalPage,
  hideModalPage,
  sendLike,
} from '../../actions';
import classes from './ArticlePage.module.scss';
// import Vector from './Vector.svg';
import Atancion from './atancion.svg';

// import { Article } from '../ArticleList/ArticleList';

export const ArticlePage = ({ itemSlug }) => {
  const dispatch = useDispatch();
  console.log(itemSlug);

  const { articlePage, user, showModal } = useSelector((state) => state);

  useEffect(() => {
    dispatch(getArticlesPage(itemSlug));
    dispatch(loadingIndicator());
  }, [dispatch, itemSlug]);

  if (!Object.keys(articlePage).length) {
    return (
      <div className={classes.example}>
        <Spin />
      </div>
    );
  }
  // const pop = articles.includes(itemSlug);
  // console.log(pop);
  // console.log(articlePage);

  return (
    <div className={classes.article}>
      <div className={classes.title}>
        <h2>{articlePage.title}</h2>
        <div className={classes.like}>
          <label>
            <input
              type="checkbox"
              onChange={() => dispatch(sendLike(articlePage, user))}
              checked={articlePage.favorited}
            />
            <span className={classes.custom__checkbox} />

            <div className={classes.total__like}>{articlePage.favoritesCount}</div>
          </label>
        </div>
      </div>
      {/* <div className={classes.tag}> */}
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
        {user.user && user.user.username === articlePage.author.username && (
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
};

ArticlePage.defaultProps = {
  itemSlug: '',
};

ArticlePage.propTypes = {
  itemSlug: PropTypes.string,
};
