import { SET_MOVIES } from "./actions.types";


export const setMovies=(data)=>({
    type:SET_MOVIES,
    payload:data
})