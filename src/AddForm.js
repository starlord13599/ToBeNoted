import React, { useState } from 'react';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
	gridContainer: {
		marginTop: '2rem',
	},
});

function AddForm({ addTodo }) {
	const classes = useStyles();

	const [title, setTitle] = useState('');
	const [error, setError] = useState(false);
	const [helperText, setHelperText] = useState(null);

	const handleOnClick = (e) => {
		e.preventDefault();
		if (title <= 0) {
			setError(true);
			setHelperText('Invalid input, Todos cannot be empty');
			return false;
		}

		addTodo(title);
		setTitle('');
		setError(false);
		setHelperText(null);
	};

	return (
		<form>
			<Grid spacing={2} container className={classes.gridContainer} alignItems="center">
				<Grid item xs={12} sm={10} lg={11}>
					<Paper elevation={0}>
						<TextField
							error={error}
							onChange={(e) => setTitle(e.target.value)}
							value={title}
							fullWidth
							id="standard-basic"
							label="Add todo"
							variant="standard"
							size="medium"
							helperText={helperText}
						/>
					</Paper>
				</Grid>

				<Grid item xs={12} sm={2} lg={1}>
					<Paper elevation={0}>
						<Button
							type="submit"
							onClick={handleOnClick}
							variant="contained"
							color="primary"
							size="large"
							fullWidth
							endIcon={<AddIcon />}
						>
							Add
						</Button>
					</Paper>
				</Grid>
			</Grid>
		</form>
	);
}

export default AddForm;
