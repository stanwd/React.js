import {ADD_POST, GET_POSTS, DELETE_POST} from "../constants/postConstants";
import axios from 'axios';

export function addPost(title, userId, body) {
    return {
        type: ADD_POST,
        payload: {title, userId, body}
    };
}

export function getPosts() {
    return {
        type: GET_POSTS,
        payload: axios.get('https://jsonplaceholder.typicode.com/posts/')
    };
}

export function deletePost(idPost) {
    return {
        type: DELETE_POST,
        payload: idPost
    }
}