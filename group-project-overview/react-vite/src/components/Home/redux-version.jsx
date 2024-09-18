import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTweetsThunk } from '../../redux/tweets';

export default function Home() {
    const dispatch = useDispatch();
    const tweets = useSelector((store) => Object.values(store.tweets));

    useEffect(() => {
        dispatch(getAllTweetsThunk());
    }, [dispatch]);

    // console.log()

    return (
        <>
            <h1>Welcome to Tweeter!</h1>
            {tweets.map((el) => {
                return (
                    <div key={el.id}>
                        <h2>{el.User.username}</h2>
                        <p>{el.tweet}</p>
                    </div>
                );
            })}
        </>
    );
}
