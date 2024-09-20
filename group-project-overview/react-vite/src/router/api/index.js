export const getAllTweets = async () => {
    const res = await fetch('/api/tweets');
    const data = await res.json();

    return data;
};

export const getUserById = async ({ params }) => {
    const res = await fetch(`/api/users/${params.userId}`);

    if (res.ok) {
        const data = await res.json();
        return data;
    } else {
        const data = await res.json();
        const error = new Error(' :( ');

        error.data = data.error;

        throw error;
    }
};

export const postNewTweet = async ({ request }) => {
    const newTweet = await request.formData();

    const res = await fetch('/api/tweets', {
        method: 'POST',
        body: newTweet,
    });

    if (res.ok) {
        const data = await res.json();
        return data;
    } else {
        const errors = await res.json();
        return errors;
    }
};

// export const postNewTweet = async ({ request }) => {
//     const newTweet = await request.json();

//     const res = await fetch('/api/tweets', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(newTweet),
//     });

//     if (res.ok) {
//         const data = await res.json();
//         return data;
//     } else {
//         const errors = await res.json();
//         return errors;
//     }
// };
