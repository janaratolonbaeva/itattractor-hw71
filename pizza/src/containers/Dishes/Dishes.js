import React, {useEffect} from 'react';
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core/styles";
import {NavLink} from "react-router-dom";
import DishItem from "../../components/DishItem/DishItem";
import {useDispatch, useSelector} from "react-redux";
import {deleteDish, fetchDishes} from "../../store/action/dishesActions";

const useStyle = makeStyles(() => ({
	top: {
		marginBottom: '30px'
	},
	gridItem2: {
		textAlign: 'right'
	},
}));

const Dishes = () => {
	const dispatch = useDispatch();
	const dishes = useSelector(state => state.dishes.dishes);
	const classes = useStyle();

	useEffect(() => {
		dispatch(fetchDishes())
	}, [dispatch]);

	return (
		<Container maxWidth="lg">
			<Grid container justify="space-between" alignItems="center" className={classes.top}>
				<Grid item xs={6}>
					<Typography variant="h3" component="h6">
						Dishes
					</Typography>
				</Grid>
				<Grid item xs={2} className={classes.gridItem2}>
					<Button variant="contained" color="primary">
						<NavLink to="/dish">
							Add new dish
						</NavLink>
					</Button>
				</Grid>
			</Grid>
			<Grid container>
				{dishes ? Object.keys(dishes).map((item, index) => {
					return (
						<DishItem
							key={index}
							id={item}
							image={dishes[item].image}
							title={dishes[item].title}
							price={dishes[item].price}
							deleteItem={deleteDish(item)}
						/>
					)
				}) : null}
			</Grid>
		</Container>
	);
};

export default Dishes;