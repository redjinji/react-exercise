import {
	ADD_TODO,
	TOGGLE_TODO,
	FETCH_TODO
} from '../actions/actionTodo';

const initialState = {
	todos: [{text:'start', didit:false, id:0}],
	fetchTodo: false
};

const todoReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_TODO:
			return Object.assign({}, state, {
				todos:[...state.todos,
					{
						text: action.text,
						didIt: false,
						id: action.id
					}
				]
			});
		case TOGGLE_TODO:
			return Object.assign({}, state, {
				todos: state.todos.map((todo, index) => {
					if (index === action.id) {
						return Object.assign({}, todo, {
							didIt: !todo.didIt
						})
					}
					return todo;
				})
			});
		case FETCH_TODO:
			return Object.assign({}, state, {fetchTodo: !state.fetchTodo})
		default:
			return state;
	}
};

export default todoReducer;
