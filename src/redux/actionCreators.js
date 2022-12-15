import * as actionTypes from './actionTypes';
import { baseUrl } from './baseUrl';
import axios from 'axios';

export const addComment = (dishId, rating, author, comment) => dispatch => {

    // type: actionTypes.ADD_COMMENT,
    // payload: {
    //     dishId: dishId,
    //     author: author,
    //     rating: rating,
    //     comment: comment,
    // }
    const newComment = {
        dishId: dishId,
        author: author,
        rating: rating,
        comment: comment
    }
    newComment.date = new Date().toISOString();
    axios.post(baseUrl + 'comments', newComment)
        .then(res => res.data)
        .then(comment => dispatch(commentConcat(comment)))
        .catch(err => console.log(err));

}

export const commentConcat = (comment) => ({
    type: actionTypes.ADD_COMMENT,
    payload: comment
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