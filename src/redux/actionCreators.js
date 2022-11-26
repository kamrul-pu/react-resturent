import * as actionTypes from './actionTypes';
import { baseUrl } from './baseUrl';
import axios from 'axios';

export const addComment = (dishId, rating, author, comment) => ({

    type: actionTypes.ADD_COMMENT,
    payload: {
        dishId: dishId,
        author: author,
        rating: rating,
        comment: comment,
    }
})

export const commentLoading = () => ({
    type: actionTypes.COMMENT_LOADING
})

export const loadComments = comments => ({
    type: actionTypes.LOAD_COMMENTS,
    payload: comments
})

export const fetchComments = () => {
    return dispatch => {
        dispatch(commentLoading());
        axios.get(baseUrl + "comments")
            .then(res => res.data)
            .then(comments => dispatch(loadComments(comments)))
            .catch(err => console.log(err.message));
    }
}

export const loadDishes = dishes => ({
    type: actionTypes.LOAD_DISHES,
    payload: dishes
})

export const dishesLoading = () => ({
    type: actionTypes.DISHES_LOADING,
})




export const fetchDishes = () => {
    return dispatch => {
        dispatch(dishesLoading());
        axios.get(baseUrl + "dishes")
            .then(res => res.data)
            .then(dishes => dispatch(loadDishes(dishes)))
            .catch(err => console.log(err.message))
    }
}