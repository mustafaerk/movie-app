import { ActionTypes } from "../../constants/actionTypes";
import { getMovieList } from "../../service/MovieServices";


export const getMovieListAction = () => async (dispatch) => {
    const response = await getMovieList();
    console.log({ response })
    dispatch({
        type: ActionTypes.GET_TODO_LIST,
        payload: response
    })
}

