import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postTweetThunk } from './store/tweet';

export default function PostTweet() {
    const dispatch = useDispatch();
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        console.log('1', new Date().getMilliseconds());

        e.preventDefault();
        const newTweet = { message };

        //? kinda like `next(postTweetThunk(newTweet))`
        dispatch(postTweetThunk(newTweet));

        setMessage('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>Post a tweet!</h1>
            <input
                placeholder="What's on your mind?"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />
            <button>Tweet!</button>
        </form>
    );
}
