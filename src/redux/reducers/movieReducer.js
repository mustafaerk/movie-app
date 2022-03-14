import { ActionTypes } from "../../constants/actionTypes";

const intialState = {
    movieList: [],
    movieInfo: {}
};

export const movieReducer = (state = intialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.GET_MOVIE_LIST:
            return { ...state, movieList: payload };
        case ActionTypes.GET_MOVIE_INFO:
            return { ...state, currentTodo: payload };
        default:
            return state;
    }
};
