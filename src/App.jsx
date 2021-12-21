import React, { useEffect } from 'react';
import './App.scss';

import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { Pagination } from 'antd';
import 'antd/dist/antd.css';
import { Header } from './components/Header/Header';
import { Article } from './components/Article/Article';
import { ArticlePage } from './components/ArticlePage/ArticlePage';
import { SignUp } from './components/SignUp/SignUp';
import { SignIn } from './components/SignIn/SignIn';
import { EditProfile } from './components/EditProfile/EditProfile';
import { NewArticle } from './components/NewArticle/NewArticle';
import { getArticles, loadingIndicator, getUser, setCurrentPage } from './actions';

export const App = () => {
  const { count, user, newUser, currentPage, loading } = useSelector((state) => state);
  console.log(count);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getArticles(0));
    dispatch(loadingIndicator());
  }, [dispatch]);

  const paginate = (pageNumber) => {
    dispatch(getArticles((pageNumber - 1) * 5));
    dispatch(setCurrentPage(pageNumber));
  };

  useEffect(() => {
    const parseUser = JSON.parse(localStorage.getItem('user'));
    dispatch(getUser(parseUser));
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user));
  }, [dispatch, user]);

  return (
    <Router>
      <div className="App">
        <Header />
        <div className="main">
          <Route path="/" component={Article} exact />
          <Route path="/articles" component={Article} exact />
          <Route path="/sign-in" component={SignIn} />
          <Route path="/sign-up" component={SignUp} />
          <Route path="/profile" component={EditProfile} />
          <Route path="/new-article" component={NewArticle} />
          <Route path="/articles/:slug/edit" component={NewArticle} />
          <Route
            path="/articles/:slug"
            exact
            render={({ match }) => {
              console.log(match);
              const { slug } = match.params;
              return <ArticlePage itemSlug={slug} />;
            }}
          />
          {user.user && <Redirect to="/articles" />}
          {newUser.user && <Redirect to="/sign-in" />}

          <div className="pagination">
            {/* {mainPage && !loading ? ( */}
            <Route
              path="/articles"
              exact
              render={() =>
                !loading && (
                  <Pagination
                    size="small"
                    total={count}
                    showSizeChanger={false}
                    onChange={paginate}
                    current={currentPage}
                  />
                )
              }
            />
            <Route
              path="/"
              exact
              render={() =>
                !loading && (
                  <Pagination
                    size="small"
                    total={count}
                    showSizeChanger={false}
                    onChange={paginate}
                    current={currentPage}
                  />
                )
              }
            />
            {/* // ) : null} */}
          </div>
        </div>
      </div>
    </Router>
  );
};
