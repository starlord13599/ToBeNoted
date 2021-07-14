import React, { useState, useEffect } from 'react';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

function EditDialog({ open, editTodo, todoTitle, id, handleClose }) {
	const [inputValue, setInputValue] = useState('');

	const handleOnChange = (e) => {
		setInputValue(e.target.value);
	};

	const handleEdit = () => {
		editTodo(id, inputValue);
		handleClose(false);
	};

	useEffect(() => {
		setInputValue(todoTitle);
	}, [todoTitle]);

	return (
		<Dialog open={open} aria-labelledby="form-dialog-title">
			<form>
				<DialogTitle id="form-dialog-title">Edit Todo</DialogTitle>
				<DialogContent>
					<TextField
						autoFocus
						margin="dense"
						id="name"
						value={inputValue}
						type="text"
						fullWidth
						onChange={handleOnChange}
					/>
				</DialogContent>
				<DialogActions disableSpacing>
					<Button color="primary" onClick={handleClose}>
						Cancel
					</Button>
					<Button type="submit" color="primary" onClick={() => handleEdit()}>
						Edit
					</Button>
				</DialogActions>
			</form>
		</Dialog>
	);
}

export default EditDialog;
