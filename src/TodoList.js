import React, { useState } from 'react';

import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import IconButton from '@material-ui/core/IconButton';
import DoneIcon from '@material-ui/icons/Done';
import UndoIcon from '@material-ui/icons/Undo';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import CardActions from '@material-ui/core/CardActions';
import Container from '@material-ui/core/Container';
import Tooltip from '@material-ui/core/Tooltip';

import { makeStyles } from '@material-ui/core/styles';
import EditDialog from './EditDialog';

const useStyles = makeStyles({
	root: {
		marginTop: '2rem',
	},
	title: {
		marginBottom: '1.5rem',
	},
	card: {
		marginBottom: '1rem',
	},
});

function TodoList({ data, doneTodo, removeTodo, editTodo }) {
	const classes = useStyles();

	const [open, setOpen] = useState(false);
	const [editData, setEditData] = useState({ id: null, todoTitle: null });

	const toggleEdit = (title, id) => {
		setEditData({ id: id, todoTitle: title });
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<>
			{open && (
				<EditDialog
					{...editData}
					handleClose={handleClose}
					editTodo={editTodo}
					open={open}
				></EditDialog>
			)}

			<Container className={classes.root}>
				<Typography className={classes.title} variant="h3">
					Tasks List
				</Typography>

				{data.map((todo) => {
					return (
						<Card className={classes.card} key={todo.id}>
							<CardHeader
								action={
									<CardActions disableSpacing>
										<Tooltip
											title={
												todo.isCompleted ? 'Unmark as done' : 'Mark as done'
											}
										>
											<IconButton onClick={() => doneTodo(todo.id)}>
												{todo.isCompleted ? <UndoIcon /> : <DoneIcon />}
											</IconButton>
										</Tooltip>
										<Tooltip title="Delete">
											<IconButton onClick={() => removeTodo(todo.id)}>
												<DeleteOutlineIcon color="secondary" />
											</IconButton>
										</Tooltip>
										<Tooltip title="Edit">
											<IconButton
												onClick={() => toggleEdit(todo.title, todo.id)}
											>
												<EditOutlinedIcon color="action" />
											</IconButton>
										</Tooltip>
									</CardActions>
								}
								title={
									<Typography
										style={{
											textDecoration: todo.isCompleted
												? 'line-through'
												: 'none',
										}}
										variant="h5"
									>
										{todo.title}
									</Typography>
								}
								subheader={
									<Typography variant="caption">{todo.createdDate}</Typography>
								}
							/>
						</Card>
					);
				})}
			</Container>
		</>
	);
}

export default TodoList;
