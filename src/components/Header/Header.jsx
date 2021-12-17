import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import rectangle from './Rectangle.svg';
import classes from './Header.module.scss';
import { signUp, mainPage, signIn, logOut, getArticles } from '../../actions';

export const Header = () => {
  const { user } = useSelector((state) => state);
  // const mainPage = () => <Route path="/articles/" component={Article} />;
  // console.log(mainPage);
  const dispatch = useDispatch();

  return (
    <div className={classes.header}>
      <div className={classes.left__side}>
        <Link
          to="/articles"
          onClick={() => {
            dispatch(getArticles(0));
            dispatch(mainPage());
          }}
        >
          <div className={classes.realWorld}>Realworld Blog</div>
        </Link>
      </div>
      <div className={classes.right__side}>
        {'user' in user ? (
          <div className={classes.authorization}>
            <div className={classes.create__article}>Create article</div>
            {/* </Link> */}
            <Link to="/profile">
              <div className={classes.user__info}>
                <div className={classes.user__name}>{user.user.username}</div>

                <div className={classes.user__img}>
                  <img src={rectangle} alt="person" />
                </div>
              </div>
            </Link>
            <Link
              to="/articles"
              onClick={() => {
                localStorage.clear();
                dispatch(logOut());
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
};
