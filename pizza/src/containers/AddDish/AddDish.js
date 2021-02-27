import React, {useState} from 'react';
import Container from "@material-ui/core/Container";
import FormDish from "../../components/FormDish/FormDish";
import {useDispatch, useSelector} from "react-redux";
import {createDish} from "../../store/action/dishesActions";
import Spinner from "../../components/UI/Spinner/Spinner";

const AddDish = (props) => {
	const dispatch = useDispatch();
	const loading = useSelector(state => state.dishes.loading);
	const [form, setForm] = useState({
		title: '',
		price: '',
		image: ''
	});

	const dataChange = event => {
		const {name, value} = event.target;

		setForm(prevState => ({
			...prevState,
			[name]: value
		}));
	};

	const postData = (e) => {
		e.preventDefault();
		dispatch(createDish(form, props.history));
	}

	let formContainer = (
		<FormDish
			formHandler={postData}
			dataChange={dataChange}
			title={form.title}
			price={form.price}
			image={form.image}
		/>
	);

	if (loading) {
		formContainer = <Spinner/>
	}

	return (
		<Container maxWidth="lg">
			{formContainer}
		</Container>
	);
};

export default AddDish;