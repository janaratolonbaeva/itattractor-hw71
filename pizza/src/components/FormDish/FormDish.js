import React from 'react';
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import {makeStyles} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyle = makeStyles(() => ({
	gridItem: {
		marginBottom: '20px'
	},
	input: {
		minWidth: '500px'
	}
}));


const FormDish = (props) => {
	const classes = useStyle();

	return (
		<form onSubmit={props.formHandler}>
			<Grid container justify="center" alignItems="center" direction="column">
				<Grid item xs={6} className={classes.gridItem}>
					<TextField
						label="Title"
						name="title"
						className={classes.input}
						onChange={props.dataChange}
						value={props.title}
					/>
				</Grid>
				<Grid item xs={6} className={classes.gridItem}>
					<TextField
						label="Price"
						name="price"
						className={classes.input}
						onChange={props.dataChange}
						value={props.price}
					/>
				</Grid>
				<Grid item xs={6} className={classes.gridItem}>
					<TextField
						label="Image URL"
						name="image"
						className={classes.input}
						onChange={props.dataChange}
						value={props.image}
					/>
				</Grid>
				<Grid item xs={6} className={classes.gridItem}>
					<Button type="submit" variant="contained">Submit</Button>
				</Grid>
			</Grid>
		</form>
	);
};

export default FormDish;