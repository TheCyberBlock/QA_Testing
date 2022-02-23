import { AUTH } from '../constants/actionTypes';
import * as api from '../api/index.js';

export const signin = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData); /* this will destructure the data from backend */

    dispatch({ type: AUTH, data }); /* this will send the data to reducers */

    history.push('/'); /* "/" will direct us to home page using history */
    window.location.reload();
  } catch (error) {
    console.log(error);
  }
};

export const signup = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);

    dispatch({ type: AUTH, data });

    history.push('/');
    window.location.reload();
    
  } catch (error) {
    console.log(error);
  }
};
