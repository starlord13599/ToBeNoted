import NavBar from './NavBar';

import Container from '@material-ui/core/Container';
import AddForm from './AddForm';
import TodoList from './TodoList';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';

import useTodo from './hooks/todoHooks';

function TodoApp() {
	const { todo, addTodo, doneTodo, removeTodo, editTodo, feedback, setOpen } = useTodo([]);

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<>
			<Snackbar
				anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
				open={feedback.open}
				autoHideDuration={1500}
				onClose={handleClose}
			>
				<Alert onClose={handleClose} variant="filled" severity={feedback.variant}>
					{feedback.message}
				</Alert>
			</Snackbar>

			<NavBar></NavBar>
			<Container>
				<AddForm addTodo={addTodo}></AddForm>
				<TodoList
					data={todo}
					editTodo={editTodo}
					removeTodo={removeTodo}
					doneTodo={doneTodo}
				></TodoList>
			</Container>
		</>
	);
}
export default TodoApp;
