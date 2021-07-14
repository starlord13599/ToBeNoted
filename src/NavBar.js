import React from 'react';

import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import { makeStyles } from '@material-ui/core';

import Clock from 'react-live-clock';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		flexGrow: 1,
	},
}));

function NavBar() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<AppBar position="static">
				<Toolbar>
					<AssignmentTurnedInIcon className={classes.menuButton} />
					<Typography variant="h6" className={classes.title}>
						ToBeNoted
					</Typography>
					<Typography variant="h6">
						{<Clock format={'h:mm:ss a'} ticking timezone={'Asia/Kolkata'} />}
					</Typography>
				</Toolbar>
			</AppBar>
		</div>
	);
}
export default NavBar;
