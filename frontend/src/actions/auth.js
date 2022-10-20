import axios from 'axios'
import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    USER_LOADED_SUCCESS,
    USER_LOADED_FAIL
} from './types';

export const load_user = () => async dispatch => {
    
};

export const login = (email, password) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    
    const body = JSON.stringify({ email, password });

    try {
        const res = await axios.post(`${process.env.REACT_APP_API_URL}/auth/jwt/create/`, body, config);
        
        dispatch({
            type: LOGIN_SUCCESS,
            payload : res.data
        });
    } catch (err) {
        dispatch({
            type: LOGIN_FAIL,
        });
    }
};