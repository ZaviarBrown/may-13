import { useLoaderData } from 'react-router-dom';

export default function Profile() {
    const data = useLoaderData();

    return (
        <>
            <h1>{`${data.username}'s`} Profile</h1>
            <h2>Has posted {data.Tweets.length} tweets</h2>
        </>
    );
}
