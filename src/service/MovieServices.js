import { listApi } from '../utils/api';

export const getMovieList = async () => {
    const response = await listApi.get('?s=pokemon');
    return response.data;
};

