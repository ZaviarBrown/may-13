// constant to avoid debugging typos
const GET_ALL_TWEETS = 'tweet/getAllTweets';
const POST_TWEET = 'tweet/post';

//regular action creator
const loadTweets = (payload) => {
    return {
        type: GET_ALL_TWEETS,
        payload,
    };
};

export const postTweet = (payload) => {
    console.log('5', new Date().getMilliseconds());
    return {
        type: POST_TWEET,
        payload,
    };
};

//! To further dry things up
// const thunkActionCreatorCreator = (options) => () => async (dispatch) => {
//     // options === { method, url, body, id, userId}
//     const res = await fetch(options)
// }

// thunk action creator
export const getAllTweets = () => async (dispatch) => {
    const response = await fetch('/api/tweets');

    if (response.ok) {
        const data = await response.json();
        dispatch(loadTweets(data)); //! only this line communicates with redux
        return data;
    }
};

//? Post-thunk export
export const postTweetThunk = (tweet) => async (dispatch) => {
    console.log('2', new Date().getMilliseconds());

    const res = await fetch('/api/tweets', {
        method: 'POST',
        body: JSON.stringify(tweet),
        headers: {
            'Content-Type': 'application/json',
        },
    });

    console.log('4', new Date().getMilliseconds());

    if (res.ok) {
        const newTweet = await res.json();
        dispatch(postTweet(newTweet));
        // dispatch(getAllTweets());
        return newTweet;
    }
};

// state object
const initialState = {};

// reducer
const tweetsReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_ALL_TWEETS: {
            const newState = {};
            payload.forEach((tweet) => (newState[tweet.id] = tweet));
            return newState;
        }

        case POST_TWEET: {
            console.log('6', new Date().getMilliseconds());
            const newState = { ...state };

            newState[payload.id] = payload;
            return newState;
        }

        default:
            return state;
    }
};

export default tweetsReducer;
