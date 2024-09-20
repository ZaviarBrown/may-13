import { Link, useLoaderData } from 'react-router-dom';
import CreateTweet from '../CreateTweet';

export default function Home() {
    const data = useLoaderData();

    if (!data.tweets) {
        return <h1>Loading...</h1>;
    }

    return (
        <>
            <h1>Welcome to Tweeter!</h1>
            <CreateTweet />

            {data.tweets.map((el) => {
                return (
                    <div key={el.id}>
                        <h2>{el.User.username}</h2>
                        <h3>{el.tweet}</h3>
                        {el.image && <img src={el.image} alt={el.tweet} />}
                        {el.LikedBy.length !== 0 && (
                            <h4>This tweet was liked by:</h4>
                        )}
                        <ul>
                            {el.LikedBy.map((el) => {
                                return (
                                    <li key={el.id}>
                                        <Link to={`/profile/${el.id}`}>
                                            {el.username}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                );
            })}
        </>
    );
}
