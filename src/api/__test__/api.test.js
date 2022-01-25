import axios from "axios";

import { registerUser, getUsers, getUser } from "../api";

// mock lets you spy on the behavior of the implementations
// So, whenever making a call via axios, jest can see the calls in action
// see more from https://jestjs.io/docs/mock-function-api
jest.mock('axios');

const headers = {
    'Content-Type': 'application/json',
    'x-api-key': process.env.REACT_APP_API_KEY
};

test('should register user', async () => {
    const userData = {
        name: 'john',
        email: 'john@john.com'
    };
    const mockResponse = {
        status: 200
    };
    // mockResolvedValueOnce useful to resolve different values over multiple async calls
    axios.post.mockResolvedValueOnce(mockResponse);

    const actual = await registerUser(userData);
    
    expect(axios.post).toHaveBeenCalledWith(`${process.env.REACT_APP_API_URL}/register`, userData, {headers});
});


test('should get all users', async () => {
    const userDatas = [{
        name: 'john',
        email: 'john@john.com'
    }];
    axios.get.mockResolvedValueOnce(userDatas);

    const actual = await getUsers();

    expect(axios.get).toHaveBeenCalledWith(`${process.env.REACT_APP_API_URL}/users`, { headers });
    expect(actual).toEqual(userDatas);
});

test('should query user by id', async () => {
    const userData = {
        name: 'john',
        email: 'john@john.com'
    };
    axios.get.mockResolvedValueOnce(userData);

    const actual = await getUser(userData.email);

    expect(axios.get).toHaveBeenCalledWith(`${process.env.REACT_APP_API_URL}/users/${userData.email}`, { headers });
    expect(actual).toEqual(userData);
});
