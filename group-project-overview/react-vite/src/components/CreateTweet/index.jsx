import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Form, useActionData, useSubmit } from 'react-router-dom';

export default function CreateTweet() {
    const [tweet, setTweet] = useState('');
    const actionData = useActionData();
    const user = useSelector((state) => state.session.user);
    const submit = useSubmit();
    const [error, setError] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();

        const newTweet = {
            user_id: user.id,
            tweet,
        };

        submit(newTweet, { method: 'post', encType: 'application/json' });
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
                <button type='submit'>Post your tweet</button>
            </Form>
        </>
    );
}
