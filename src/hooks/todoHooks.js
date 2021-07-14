import { useState } from 'react';

import moment from 'moment';
import { v4 as uuidv4 } from 'uuid';

function useTodo(initialValue) {
	const [state, setState] = useState(initialValue);
	const [feedback, setFeedback] = useState({ open: false, message: null, variant: 'info' });

	const addTodo = (title) => {
		let currentDate = moment().format('Do MMMM YYYY, h:mm:ss a');
		let id = uuidv4();
		let lists = [...state, { id, title, isCompleted: false, createdDate: currentDate }];
		setState(lists);
		setFeedback({ open: true, message: 'Todo added', variant: 'success' });
	};

	const doneTodo = (id) => {
		let lists = state.map((t) => {
			if (t.id === id) {
				t.isCompleted = !t.isCompleted;
			}
			return t;
		});

		setState(lists);
		setFeedback({ open: true, message: 'Todo updated', variant: 'info' });
	};

	const removeTodo = (id) => {
		let lists = state.filter((t) => {
			return t.id !== id;
		});
		setState(lists);
		setFeedback({ open: true, message: 'Todo removed', variant: 'error' });
	};

	const editTodo = (id, title) => {
		let lists = state.map((t) => {
			return t.id === id ? { ...t, title: title } : t;
		});

		setState(lists);
		setFeedback({ open: true, message: 'Todo edited', variant: 'info' });
	};

	const setOpen = (open) => {
		setFeedback({ ...feedback, open: open });
	};

	return { todo: state, addTodo, doneTodo, removeTodo, editTodo, feedback, setOpen };
}

export default useTodo;
