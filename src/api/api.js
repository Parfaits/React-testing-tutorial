import axios from 'axios';

const api_url = process.env.REACT_APP_API_URL;

const registerEndPoint = '/register';
const usersEndpoint = '/users';
const loginEndPoint = '/login';
const emailEndPoint = '/email';

const headers = {
    'Content-Type': 'application/json',
    'x-api-key': process.env.REACT_APP_API_KEY
};

/** Don't need authorization */

// register a user 
export const registerUser = (userData) => axios.post(api_url + registerEndPoint, userData, { headers });

// login user
export const loginUser = (userData) => axios.post(api_url + loginEndPoint, userData, { headers }  );

// get all users
export const getUsers = () => axios.get(api_url + usersEndpoint, { headers });

// get a user
export const getUser = (id) => axios.get(`${api_url}${usersEndpoint}/${id}`, { headers });

// create user
export const createUser = (userData) => axios.post(api_url + registerEndPoint, userData, { headers });

// delete a user
// export const deleteUser = (id) => axios.delete(`${api_url}${usersEndpoint}/${id}`, { headers });
export const deleteUser = (email) => axios.delete(`${api_url}${usersEndpoint}/user?email=${email}`, { headers });

// send an email
export const sendEmail = (data) => axios.post(api_url + emailEndPoint, data, { headers });