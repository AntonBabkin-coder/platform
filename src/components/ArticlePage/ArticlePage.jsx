import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import uuid from 'react-uuid';
import format from 'date-fns/format';
import { Spin } from 'antd';
import { getArticlesPage } from '../../actions';
import classes from './ArticlePage.module.scss';
import Vector from './Vector.svg';

// import { Article } from '../ArticleList/ArticleList';

export const ArticlePage = ({ itemSlug }) => {
  const dispatch = useDispatch();
  console.log(itemSlug);

  const { articlePage } = useSelector((state) => state);

  useEffect(() => {
    dispatch(getArticlesPage(itemSlug));
  }, [dispatch, itemSlug]);

  if (!Object.keys(articlePage).length) {
    return <Spin />;
  }
  // const pop = articles.includes(itemSlug);
  // console.log(pop);
  // console.log(articlePage);

  return (
    <div className={classes.article}>
      <div className={classes.title}>
        <h2>{articlePage.title}</h2>
        <div className={classes.like}>
          <img src={Vector} alt="hart" />
        </div>
        <div className={classes.total__like}>12</div>
      </div>
      {/* <div className={classes.tag}> */}
      {articlePage.tagList.map((tag) => (
        <div key={uuid()} className={classes.tag}>
          {tag}
        </div>
      ))}

      <div className={classes.text}>
        <p>
          {articlePage.body.slice(0, 200)}
          {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. */}
        </p>
      </div>
      <div className={classes.user}>
        <div className="user__info">
          <div className={classes.user__name}>{articlePage.author.username}</div>
          <div className={classes.user__date}>{format(new Date(articlePage.updatedAt), 'MMMM d, y')}</div>
        </div>
        <div className={classes.user__img}>
          <img src={articlePage.author.image} alt="person" />
        </div>
      </div>
    </div>
  );
};

ArticlePage.defaultProps = {
  itemSlug: '',
};

ArticlePage.propTypes = {
  itemSlug: PropTypes.string,
};
