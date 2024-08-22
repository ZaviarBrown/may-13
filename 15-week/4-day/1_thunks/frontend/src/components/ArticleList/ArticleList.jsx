import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import {
  loadArticles,
  loadArticlesThunk,
  articleSelector,
} from "../../store/articleReducer";

const ArticleList = () => {
  const dispatch = useDispatch();

  //? With reselect
  const articles = useSelector(articleSelector);

  //! Without reselect
  //   const allArticles = useSelector((state) => state.articleState.entries);
  //   const articles = Object.values(allArticles);

  useEffect(() => {
    // dispatch(loadArticles()); //! No longer dispatch the action creator
    dispatch(loadArticlesThunk());
  }, [dispatch]);

  return (
    <div>
      <h1>Article List</h1>
      <ol>
        {articles.map(({ id, title }) => (
          <li key={id}>
            <NavLink to={`${id}`}>{title}</NavLink>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default ArticleList;
