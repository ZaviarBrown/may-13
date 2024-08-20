import articles from '../data/data.json';

const LOAD_ARTICLES = 'article/loadArticles';
const ADD_ARTICLE = 'article/addArticle'; //? 'pleaseReduxAddAnArticle' <- okay! but just kinda weird
const ARTICLE_KILLA = 'kill/it/all';

export const loadArticles = () => {
    return {
        type: LOAD_ARTICLES,
        articles,
    };
};

export const addArticle = (payload) => {
    return {
        type: ADD_ARTICLE,
        payload,
    };
};

export const articleKilla = () => {
    return {
        type: ARTICLE_KILLA,
    };
};

const initialState = { entries: [], isLoading: true };

const articleReducer = (state = initialState, action) => {
    // console.log("HEY LOOK I'M THE ARTICLE REDUCER");

    switch (action.type) {
        case LOAD_ARTICLES:
            return { ...state, entries: [...action.articles] };
        case ADD_ARTICLE:
            return { ...state, entries: [...state.entries, action.payload] };
        //  return { ...state, entries: [action.payload] };
        case ARTICLE_KILLA:
            return { entries: [], isLoading: true };
        default:
            return state;
    }
};

export default articleReducer;
