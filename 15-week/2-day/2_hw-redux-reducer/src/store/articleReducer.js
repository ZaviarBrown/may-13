import articles from '../data/data.json';

const LOAD_ARTICLES = 'article/loadArticle';

export const loadArticles = () => {
    return {
        type: LOAD_ARTICLES,
        payload: articles,
    };
};

const initialState = { entries: [], isLoading: true };

const articleReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_ARTICLES:
            return { ...state, entries: [...action.payload] };
        default:
            return state;
    }
};

export default articleReducer;
