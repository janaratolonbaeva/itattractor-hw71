import axios from "axios";

const axiosPizza = axios.create({
	baseURL: 'https://dishes-3cbf9-default-rtdb.firebaseio.com/'
});

export default axiosPizza;