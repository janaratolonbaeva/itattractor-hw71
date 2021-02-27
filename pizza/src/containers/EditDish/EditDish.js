import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getOneDish, putOneDish} from "../../store/action/dishesActions";
import FormDish from "../../components/FormDish/FormDish";
import Spinner from "../../components/UI/Spinner/Spinner";
import Container from "@material-ui/core/Container";

const EditDish = (props) => {
	const id = props.match.params.id;
	const dispatch = useDispatch();
	const oneDish = useSelector(state => state.dishes.oneDish);
	const loading = useSelector(state => state.dishes.loading);
	const [oneDishInfo, setOneDishInfo] = useState({});

	useEffect(() => {
		dispatch(getOneDish(id));
	}, [dispatch, id])

	useEffect(() => {
		setOneDishInfo(oneDish);
	}, [oneDish])

	const changeHandler = (e) => {
		const {name, value} = e.target;

		setOneDishInfo(prevState => ({
			...prevState,
			[name]: value
		}));
	}

	const saveHandler = () => {
		dispatch(putOneDish(id, oneDishInfo, props.history));
	}

	let formContainer = (
		oneDishInfo ? (<FormDish
			formHandler={saveHandler}
			dataChange={changeHandler}
			title={oneDishInfo.title}
			price={oneDishInfo.price}
			image={oneDishInfo.image}
		/>): null
	);

	if (loading) {
		formContainer = <Spinner/>
	}

	return (
		<Container maxWidth="lg">
			{formContainer}
		</Container>
	);

	// return (
	// 	<div>
	// 		{
	// 			oneDish && <div>
	// 				<input name={'title'} type="text" value={oneDishInfo.title} onChange={changeHandler}/>
	// 				<input name={'price'} type="text" value={oneDishInfo.price} onChange={changeHandler}/>
	// 				<input name={'image'} type="text" value={oneDishInfo.image} onChange={changeHandler}/>
	// 			</div>
	// 		}
	// 	</div>
	// );
};

export default EditDish;