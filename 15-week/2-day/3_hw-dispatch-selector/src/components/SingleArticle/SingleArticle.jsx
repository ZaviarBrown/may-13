import { useParams } from 'react-router-dom';
import './SingleArticle.css';
import { useSelector } from 'react-redux';

const SingleArticle = () => {
    const { id } = useParams();
    const theArticle = useSelector((reduxStore) =>
        reduxStore.articles.entries.find((el) => id === el.id)
    );

    if (!theArticle) return <h1>Loading...</h1>;

    return (
        <div className="singleArticle">
            <h1>{theArticle.title}</h1>
            <img src={theArticle.imageUrl} alt={theArticle.title} />
            <p>{theArticle.body}</p>
        </div>
    );
};

export default SingleArticle;
