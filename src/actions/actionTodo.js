export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const FETCH_TODO = 'FETCH_TODO';
let idCounter = 1;

export function addTodo(text) {
	return {
		type: ADD_TODO,
		id: idCounter++,
		text
	}
}

export function toggleTodo(id) {
	return {
		type: TOGGLE_TODO,
		id
	}
}

export function fetchTodo() {
	return {
		type: FETCH_TODO
	}
}

export function pleaseToggleMe(id) {
	return (dispatch) => {
		dispatch(fetchTodo());
		setTimeout(() => {
			dispatch(fetchTodo());
			dispatch(addTodo(id));
		}, 5000);
	}
}
