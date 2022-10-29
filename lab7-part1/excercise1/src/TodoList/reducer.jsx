import { ADD_TODO, REMOVE_TODO } from "./action";

const initialState = {
  todos: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        todos: [
          ...state.todos,
          {
            id: action.payload.id,
            task: action.payload.task,
            done: action.payload.done
          },
        ],
      };

    case REMOVE_TODO:
      return {
        todos: [...state.todos.filter((todo) => todo.id !== action.payload)],
      };

    default:
      return state;
  }
};

export default reducer;