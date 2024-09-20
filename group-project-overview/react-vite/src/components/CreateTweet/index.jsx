import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Form, useActionData, useSubmit } from 'react-router-dom';

export default function CreateTweet() {
    const actionData = useActionData();
    const submit = useSubmit();
    const user = useSelector((state) => state.session.user);
    const [tweet, setTweet] = useState('');
    const [image, setImage] = useState('');
    const [error, setError] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();

        const newTweet = new FormData();
        newTweet.append('user_id', user.id);
        newTweet.append('tweet', tweet);
        newTweet.append('image', image);

        submit(newTweet, { method: 'post', encType: 'multipart/form-data' });
    };

    useEffect(() => {
        if (actionData && actionData.errors) {
            setError(actionData.errors.tweet[0]);
        } else {
            setError('');
            setTweet('');
        }
    }, [actionData]);

    return (
        <>
            <h1>Say something why dontcha</h1>
            <Form onSubmit={onSubmit}>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <textarea
                    name='tweet'
                    value={tweet}
                    onChange={(e) => setTweet(e.target.value)}
                />
                <input
                    type='file'
                    accept='image/*'
                    onChange={(e) => setImage(e.target.files[0])}
                />
                <button type='submit'>Post your tweet</button>
            </Form>
        </>
    );
}
