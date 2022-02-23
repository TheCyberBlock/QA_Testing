import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });



export const signIn = (formData) => API.post('/api/user/signin', formData); //  to request the database and as return it will give us form data
export const signUp = (formData) => API.post('/api/user/signup', formData);
