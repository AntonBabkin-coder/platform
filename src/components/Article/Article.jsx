import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Spin, Alert } from 'antd';
import uuid from 'react-uuid';
import format from 'date-fns/format';
import classes from './Article.module.scss';
import { sendLikeMainPage } from '../../actions';

export const Article = () => {
  const { error, loading, articles, user } = useSelector((state) => state);
  const dispatch = useDispatch();

  if (error) {
    return <Alert message="ВОЙДИТЕ В АККАУНТ" description="ОБНОВИТЕ СТРАНИЦУ" type="error" showIcon />;
  }

  const Spiner = () => (
    <div className={classes.example}>
      <Spin />
    </div>
  );
  if (loading) {
    return <Spiner />;
  }

  return articles.map((item) => (
    <div key={uuid()} className={classes.article}>
      <div className={classes.title}>
        <Link to={`/articles/${item.slug}`}>
          <h2>{item.title}</h2>
        </Link>
        <div className={classes.like}>
          <label>
            <input type="checkbox" onChange={() => dispatch(sendLikeMainPage(item, user))} checked={item.favorited} />
            <span className={classes.custom__checkbox} />
            <div className={classes.total__like}>{item.favoritesCount}</div>
          </label>
        </div>
      </div>
      {item.tagList.map((tag) => (
        <div key={uuid()} className={classes.tag}>
          {tag}
        </div>
      ))}
      <div className={classes.text}>
        <p>{item.body.slice(0, 200)}</p>
      </div>
      <div className={classes.user}>
        <div className="user__info">
          <div className={classes.user__name}>{item.author.username}</div>
          <div className={classes.user__date}>{format(new Date(item.updatedAt), 'MMMM d, y')}</div>
        </div>
        <div className={classes.user__img}>
          <img src={item.author.image} alt="person" />
        </div>
      </div>
    </div>
  ));
};
