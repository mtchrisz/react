export const FETCH_USERS = "FETCH_USERS";
export const ADD_USER = "ADD_USER";
export const DELETE_USER = "DELETE_USER";
export const MODIFY_USER = "MODIFY_USER";

export const fetchUsers = () => dispatch => {
    fetch('http://192.168.0.247:5000/users/')
        .then(res => res.json())
        .then(data => dispatch({
            type: FETCH_USERS,
            payload: data 
        })
    )
};

export const addUser = (newUser) => dispatch => {
    fetch('http://192.168.0.247:5000/users/', {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(newUser)
    })
        .then(res => res.json())
        .then(data => dispatch({
            type: ADD_USER,
            payload: data
        })
    );
};

export const deleteUser = (oldUser) => dispatch => {
    fetch(`http://192.168.0.247:5000/users/${oldUser.id}`, {
        method: 'DELETE',
        headers: {
            'content-type': 'application/json'
        },
    })
        .then(res => res.json())
        .then(data => dispatch({
            type: DELETE_USER,
            payload: {
                id: data.id
            }
        })
    );
};

export const modifyUser = (oldUser, newUser) => dispatch => {
    fetch(`http://192.168.0.247:5000/users/${oldUser.id}`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(newUser)
    })
        .then(res => res.json())
        .then(data => dispatch({
            type: MODIFY_USER,
            payload: data
        })
    );
};