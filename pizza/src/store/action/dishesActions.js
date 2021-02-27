import axiosPizza from "../../axios-pizza";

export const POST_REQUEST = 'POST_REQUEST';
export const POST_SUCCESS = 'POST_SUCCESS';
export const POST_ERROR = 'POST_ERROR';
export const FETCH_DISHES_REQUEST = 'FETCH_DISHES_REQUEST';
export const FETCH_DISHES_SUCCESS = 'FETCH_DISHES_SUCCESS';
export const FETCH_DISHES_FAILURE = 'FETCH_DISHES_FAILURE';
export const GET_ONE_REQUEST = 'GET_ONE_REQUEST';
export const GET_ONE_SUCCESS = 'GET_ONE_SUCCESS';
export const GET_ONE_FAILURE = 'GET_ONE_FAILURE';
export const PUT_ONE_DISH_REQUEST = 'PUT_ONE_DISH_REQUEST';
export const PUT_ONE_DISH_SUCCESS = 'PUT_ONE_DISH_SUCCESS';
export const PUT_ONE_DISH_FAILURE = 'PUT_ONE_DISH_FAILURE';
export const DELETE_DISH = 'DELETE_DISH';

export const postRequest = () => ({type: POST_REQUEST});
export const postSuccess = () => ({type: POST_SUCCESS});
export const postError = (error) => ({type: POST_ERROR, error});
export const fetchDishesRequest = () => ({type: FETCH_DISHES_REQUEST});
export const fetchDishesSuccess = (dish) => ({type: FETCH_DISHES_SUCCESS, dish});
export const fetchDishesFailure = (error) => ({type: FETCH_DISHES_FAILURE, error});
export const getOneRequest = () => ({type: GET_ONE_REQUEST});
export const getOneSuccess = data => ({type: GET_ONE_SUCCESS, data});
export const getOneFailure = error => ({type: GET_ONE_FAILURE, error});
export const putOneDishRequest = () => ({type: PUT_ONE_DISH_REQUEST});
export const putOneDishSuccess = () => ({type: PUT_ONE_DISH_SUCCESS});
export const putOneDishFailure = (error) => ({type: PUT_ONE_DISH_FAILURE, error});

export const createDish = (order, history) => {
	return async dispatch => {
		try {
			dispatch(postRequest());
			await axiosPizza.post('/pizzas.json', order);
			dispatch(postSuccess());
			history.push('/')
		} catch (e) {
			dispatch(postError(e));
		}
	}
}

export const fetchDishes = () => {
	return async (dispatch) => {
		try {
			dispatch(fetchDishesRequest());
			const response = await axiosPizza.get('pizzas.json');
			dispatch(fetchDishesSuccess(response.data));
		} catch (e) {
			dispatch(fetchDishesFailure());
		}
	}
}

export const getOneDish = id => {
	return async dispatch => {
		try {
			dispatch(getOneRequest());
			const response = await axiosPizza.get(`/pizzas/${id}.json`);
			dispatch(getOneSuccess(response.data))
		} catch (e) {
			dispatch(getOneFailure());
		}
	}
}

export const putOneDish = (id, dish, history) => {
	return async dispatch => {
		try {
			dispatch(putOneDishRequest());
			await axiosPizza.put(`/pizzas/${id}.json`, dish);
			dispatch(putOneDishSuccess());
			history.push('/');
		} catch (e) {
			dispatch(putOneDishFailure(e));
		}
	}
}

export const deleteDish = (id) => {
	return async (dispatch) => {
		await axiosPizza.delete(`/pizzas/${id}.json`);
		dispatch(fetchDishes());
	}
}