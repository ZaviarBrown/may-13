import { useDispatch, useSelector } from 'react-redux';
import { loadArticles } from '../../store/articleReducer';
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const ArticleList = () => {
    const dispatch = useDispatch();
    const articles = useSelector((reduxStore) => reduxStore.articles.entries);

    console.log(articles);

    useEffect(() => {
        dispatch(loadArticles());
    }, [dispatch]);

    return (
        <div>
            <h1>Article List</h1>
            <ol>
                {/* {articles.map(({ id, title }) => (
                    <li key={id}>
                        <NavLink to={`${id}`}>{title}</NavLink>
                    </li>
                ))} */}
                {articles.map((el) => (
                    <li key={el.id}>
                        <NavLink to={`${el.id}`}>{el.title}</NavLink>
                    </li>
                ))}
            </ol>
        </div>
    );
};

export default ArticleList;
