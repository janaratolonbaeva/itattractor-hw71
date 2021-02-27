import {
	FETCH_DISHES_FAILURE,
	FETCH_DISHES_REQUEST,
	FETCH_DISHES_SUCCESS,
	POST_ERROR,
	POST_REQUEST,
	POST_SUCCESS,
	GET_ONE_SUCCESS,
	GET_ONE_REQUEST,
	GET_ONE_FAILURE,
	PUT_ONE_DISH_REQUEST,
	PUT_ONE_DISH_SUCCESS,
	PUT_ONE_DISH_FAILURE,
	DELETE_DISH
} from "../action/dishesActions";

const initialState = {
	dishes: null,
	oneDish: null,
	loading: false,
	postError: '',
	getDishesError: '',
	getOneError: '',
	putOneError: ''
}

const dishesReducer = (state = initialState, action) => {
	switch (action.type) {
		case POST_REQUEST:
			return {...state, loading: true}
		case POST_SUCCESS:
			return {...state, loading: false}
		case POST_ERROR:
			return {...state, loading: false, postError: action.error}
		case FETCH_DISHES_REQUEST:
			return {...state, loading: true}
		case FETCH_DISHES_SUCCESS:
			return {...state, loading: false, dishes: action.dish}
		case FETCH_DISHES_FAILURE:
			return {...state, loading: false, getDishesError: action.error}
		case GET_ONE_REQUEST:
			return {...state, loading: true}
		case GET_ONE_SUCCESS:
			return {...state, loading: false, oneDish: action.data}
		case GET_ONE_FAILURE:
			return {...state, loading: false, getOneError: action.error}
		case PUT_ONE_DISH_REQUEST:
			return {...state, loading: true}
		case PUT_ONE_DISH_SUCCESS:
			return {...state, loading: false}
		case PUT_ONE_DISH_FAILURE:
			return {...state, loading: false, putOneError: action.error}
		case DELETE_DISH:
			return {...state}
		default:
			return state;
	}
}

export default dishesReducer;