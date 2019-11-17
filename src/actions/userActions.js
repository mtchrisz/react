import uuid from 'uuid';

export const FETCH_USERS = "FETCH_USERS";
export const ADD_USER = "ADD_USER";
export const DELETE_USER = "DELETE_USER";
export const MODIFY_USER = "MODIFY_USER";

export const fetchUsers = () => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => dispatch({
            type: FETCH_USERS,
            payload: data 
        })
    )
};

// Simulate the PUT call
export const addUser = (newUser) => dispatch => {
    dispatch({
        type: ADD_USER,
        payload: {
            id: uuid.v4(),
            ...newUser,
            address: {
                street: newUser.street || '',
                suite: '',
                city: newUser.city,
                zipcode: newUser.zipcode,
            },
            company: {
                name: newUser.company
            }
        }
    });
};

// Simulate the DELETE call
export const deleteUser = (oldUser) => dispatch => {
    dispatch({
        type: DELETE_USER,
        payload: {
            id: oldUser.id
        }
    });
};

// Simulate the POST call
export const modifyUser = (oldUser, newUser) => dispatch => {
    dispatch({
        type: MODIFY_USER,
        payload: {
            id: oldUser.id,
            ...newUser,
            address: {
                street: newUser.street || '',
                suite: '',
                city: newUser.city,
                zipcode: newUser.zipcode,
            },
            company: {
                name: newUser.company
            }
        }
    });
};