import DISHES from "../data/dishes";
import COMMENTS from "../data/comments";
import { combineReducers } from 'redux'
import * as actionTypes from './actionTypes';
// const initialState = {
//     dishes: DISHES,
//     comments: COMMENTS,
//     sample: "This is sample text",
// }

const dishReducer = (dishState = DISHES, action) => {
    return dishState;
}

const commentReducer = (commentState = COMMENTS, action) => {
    switch (action.type) {
        case actionTypes.ADD_COMMENT:
            let comment = action.payload;
            comment.id = commentState.length;
            comment.date = new Date().toDateString();
            return commentState.concat(comment)
        default:
            return commentState;
    }
}

export const Reducer = combineReducers({
    dishes: dishReducer,
    comments: commentReducer,
})


// backup
// if (action.type === 'ADD_COMMENT') {
//     let comment = action.payload;
//     comment.id = state.comments.length;
//     comment.date = new Date().toDateString();
//     return {
//         ...state,
//         comments: state.comments.concat(comment),
//     }
// }