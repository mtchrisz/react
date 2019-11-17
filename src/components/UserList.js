import React, { Component } from 'react'
import PropTypes from 'prop-types'
import MaterialTable from 'material-table';
import { connect } from 'react-redux'
import { fetchUsers } from '../actions/userActions'

class UserList extends Component {

    componentDidMount() {
        this.props.fetchUsers();
    }

    render() {
        const table = {
            columns: [
                { title: 'Name', field: 'name' },
                { title: 'Username', field: 'username' },
                { title: 'Email', field: 'email'},
                { title: 'Phone', field: 'phone'},
                { title: 'Website', field: 'website'},
                { title: 'Street', field: 'street'},
                { title: 'City', field: 'city'},
                { title: 'Zip', field: 'zipcode'},
                { title: 'Company', field: 'company'},
            ],
            data: this.props.users.map((user) => {
                return {
                    ...user,
                    ...user.address,
                    street: `${user.address.street} ${user.address.suite}`,
                    company: user.company.name
                }
            })
        }
        return (
            <MaterialTable
                title="Users"
                columns={table.columns}
                data={table.data}
                editable={{
                    onRowAdd: newData =>
                        new Promise(resolve => {
                            setTimeout(() => {
                                resolve();
                                this.setState(prevState => {
                                    const data = [...prevState.data];
                                    data.push(newData);
                                    return { ...prevState, data };
                                });
                            }, 600);
                        }),
                    onRowUpdate: (newData, oldData) =>
                        new Promise(resolve => {
                            setTimeout(() => {
                                resolve();
                                if (oldData) {
                                    this.setState(prevState => {
                                        const data = [...prevState.data];
                                        data[data.indexOf(oldData)] = newData;
                                        return { ...prevState, data };
                                    });
                                }
                            }, 600);
                        }),
                    onRowDelete: oldData =>
                        new Promise(resolve => {
                            setTimeout(() => {
                                resolve();
                                this.setState(prevState => {
                                    const data = [...prevState.data];
                                    data.splice(data.indexOf(oldData), 1);
                                    return { ...prevState, data };
                                });
                            }, 600);
                        }),
                }}
            />
        );
    }
}

UserList.propTypes = {
    fetchUsers: PropTypes.func.isRequired,
    users: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
    users: state.users.items
});

export default connect(mapStateToProps, { fetchUsers })(UserList);