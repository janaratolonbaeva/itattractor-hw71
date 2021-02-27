import React from 'react';
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import {NavLink} from "react-router-dom";
import {makeStyles} from "@material-ui/core/styles";

const useStyle = makeStyles(() => ({
	root: {
		marginBottom: '20px'
	},
	cardItem: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: '10px 20px'
	},
	image: {
		width: '100px',
		height: '100px',
		marginRight: '25px',
		borderRadius: '6px',
		overflow: 'hidden'
	},
	gridItem: {
		display: 'flex',
		alignItems: 'center'
	},
	itemMarginRight: {
		marginRight: '25px'
	}
}))

const DishItem = (props) => {
	const classes = useStyle();

	return (
		<Grid item xs={12} className={classes.root}>
			<Card className={classes.cardItem}>
				<div className={classes.gridItem}>
					<CardMedia
						className={classes.image}
						image={props.image}
						title={props.title}
					/>
					<Typography>{props.title}</Typography>
				</div>
				<div className={classes.gridItem}>
					<Typography className={classes.itemMarginRight}>{props.price} KGS</Typography>
					<Button variant="contained" color="default" className={classes.itemMarginRight}>
						<NavLink to={`/dish/${props.id}`}>Edit</NavLink>
					</Button>
					<Button
						variant="contained"
						color="secondary"
						type="button"
						onClick={props.deleteItem}
					>
						Delete
					</Button>
				</div>
			</Card>
		</Grid>
	);
};

export default DishItem;