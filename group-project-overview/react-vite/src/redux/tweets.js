import { normalizer } from './utils';

const GET_ALL_TWEETS = 'tweets/getAll';

const getAllTweets = (payload) => {
    return {
        type: GET_ALL_TWEETS,
        payload,
    };
};

export const getAllTweetsThunk = () => async (dispatch) => {
    const res = await fetch('/api/tweets');

    if (res.ok) {
        const data = await res.json();

        dispatch(getAllTweets(normalizer(data.tweets)));
    } else {
        const errors = await res.json();
        return errors;
    }
};

// export default function tweetsReducer(initialState = {}, action) {
export default function tweetsReducer(state = {}, { type, payload }) {
    switch (type) {
        case GET_ALL_TWEETS:
            return { ...state, ...payload };

        default:
            return state;
    }
}
