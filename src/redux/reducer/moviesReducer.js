import { SET_MOVIES } from "../actions/actions.types";

const initailstate = [
  {
    movies: [],
  },
];

const movieReducer = (state = initailstate, action) => {
  switch (action.type) {
    case SET_MOVIES:
      return [
        {
          movies: action.payload,
        },
      ];
    default:
      return state;
  }
};

export default movieReducer;
