export const FETCH_USERS = "FETCH_USERS";

export const fetchUsers = () => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => dispatch({
            type: FETCH_USERS,
            payload: data 
        })
    )
};
