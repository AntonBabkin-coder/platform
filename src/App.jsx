import React, { useEffect } from 'react';
import './App.scss';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Pagination } from 'antd';
import 'antd/dist/antd.css';
import { Header } from './components/Header/Header';
import { Article } from './components/Article/Article';
import { ArticlePage } from './components/ArticlePage/ArticlePage';
import { SignUp } from './components/SignUp/SignUp';
import { getArticles, loadingIndicator } from './actions';

export const App = () => {
  const { count, loading } = useSelector((state) => state);
  console.log(count);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getArticles(0));
    dispatch(loadingIndicator());
    // dispatch(getArticlesPage());
  }, [dispatch]);

  const paginate = (pageNumber) => {
    dispatch(getArticles((pageNumber - 1) * 5));
  };

  return (
    <Router>
      <div className="App">
        <Header />
        <div className="main">
          <Route path="/" component={Article} exact />
          <Route path="/articles" component={Article} exact />
          <Route path="/articles/sign-up" component={SignUp} exact />
          <Route
            path="/articles/:slug"
            render={({ match }) => {
              console.log(match);
              const { slug } = match.params;
              return <ArticlePage itemSlug={slug} />;
            }}
          />

          <div className="pagination">
            {!loading && <Pagination size="small" total={count} showSizeChanger={false} onChange={paginate} />}
          </div>
        </div>
      </div>
    </Router>
  );
};
