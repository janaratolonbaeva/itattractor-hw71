import React from 'react';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import {NavLink} from "react-router-dom";
import ListItem from "@material-ui/core/ListItem";
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import "./Header.css";

const useStyle = makeStyles(() => ({
	root: {
		marginBottom: '30px'
	},
	toolbar: {
		padding: '0'
	},
	list: {
		textAlign: 'right'
	},
	listItem1: {
		display: 'inline-block',
		color: '#fff',
		fontSize: '18px',
		width: 'auto',
		marginRight: '15px',
	},
	listItem2: {
		display: 'inline-block',
		color: '#fff',
		fontSize: '18px',
		width: 'auto'
	}
}));

const Header = () => {
	const classes = useStyle();

	return (
		<header className={classes.root}>
			<AppBar position="static">
				<Container maxWidth="lg">
					<Toolbar className={classes.toolbar}>
						<Grid container justify="space-between" alignItems="center">
							<Grid item xs={6}>
								<Typography>
									Turtle Pizza Admin
								</Typography>
							</Grid>
							<Grid item xs={6}>
								<List className={classes.list}>
									<ListItem className={classes.listItem1}>
										<NavLink className="Nav-link" to="/">Dishes</NavLink>
									</ListItem>
									<ListItem className={classes.listItem2}>
										<NavLink className="Nav-link" to="/orders">Orders</NavLink>
									</ListItem>
								</List>
							</Grid>
						</Grid>
					</Toolbar>
				</Container>
			</AppBar>
		</header>
	);
};

export default Header;