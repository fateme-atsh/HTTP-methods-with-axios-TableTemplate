import React, { useState, Fragment, useContext, useEffect } from 'react';
import ShowTable from './ShowTable';
import EditTable from './EditTable';
import { LocalStorageContext } from '../context/LocalStorageContest';
import axios from 'axios';

const InformationTable = () => {

    const localDAta = useContext(LocalStorageContext);
    const [users, setUsers] = useState([]);
    const [editTableRows, setEditTableRows] = useState({
        id: null,
        name: '',
        username: '',
        email: '',
        phone: '',
    }
    );

    useEffect(() => {
        setUsers([...localDAta])
    }, [localDAta]);

    // useEffect(() => {
    //     setUsers([...localDAta])
    // }, []);

    //rowId uses for editting the row data.
    const [rowId, setRowId] = useState(null);


    const handleTableRowsChange = (event) => {
        event.preventDefault();

        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;

        const newFormData = { ...editTableRows };
        newFormData[fieldName] = fieldValue;

        setEditTableRows(newFormData);
    };

    //when user clicked the edit button in a row && edit the field value.
    const editClick = (event, props) => {
        event.preventDefault();
        setRowId(props.id);
        console.log(props.id);

        const editedValues = {
            id: props.id,
            name: props.name,
            username: props.username,
            email: props.email,
            phone: props.phone,
        };

        setEditTableRows(editedValues);
    };

    // function: delete users
    const handleDeleteRows = (event, props) => {
        event.preventDefault();

        const id = props.id;
        console.log(id);
        if (window.confirm(`Are you sure you wish to delete user ${id}?`)) {
            axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`).then(res => {
                console.log(res);
                setUsers(users.filter(props => props.id !== id));
            });
        }
    };

    // function: save EDITED informations
    const handleSaveEditedForm = (event) => {
        event.preventDefault();

        const editedUser = {
            id: rowId,
            name: editTableRows.name,
            username: editTableRows.username,
            phone: editTableRows.phone,
            email: editTableRows.email,
        };

        const newUser = [...users];

        const index = users.findIndex((user) => user.id === rowId);

        newUser[index] = editedUser;

        setUsers(newUser);
        setRowId(null);

        axios.put(`https://jsonplaceholder.typicode.com/users/${rowId}`, editedUser)
            .then(res => {console.log(res)});
    };

    return (
        <main className='m-10  grid grid-cols-1'>
            <form onSubmit={handleSaveEditedForm}>
                <table className='w-full'>
                    <thead className='bg-gray-800 text-white'>
                        <tr>
                            <th className='py-4 px-2'>id</th>
                            <th className='py-4 px-2'>Name</th>
                            <th className='py-4 px-2'>User Name</th>
                            <th className='py-4 px-2'>Email</th>
                            <th className='py-4 px-2'>Phone Number</th>
                            <th className='py-4 px-2'>Action</th>
                        </tr>
                    </thead>
                    {users !== null ?
                        <tbody>
                            {users.map((user) => (
                                <Fragment>
                                    {rowId === user.id ?
                                        <EditTable
                                            id={user.id}
                                            name={user.name}
                                            username={user.username}
                                            email={user.email}
                                            phone={user.phone}
                                            handleTableRowsChange={handleTableRowsChange}
                                            editClick={editClick}
                                            editTableRows={editTableRows}
                                        />
                                        :
                                        <ShowTable
                                            id={user.id}
                                            name={user.name}
                                            username={user.username}
                                            email={user.email}
                                            phone={user.phone}
                                            editClick={editClick}
                                            handleDeleteRows={handleDeleteRows}
                                        />
                                    }
                                </Fragment>
                            ))}
                        </tbody>
                        :
                        <tbody>
                            <tr><td className='text-red-500 font-8xl font-black'> NO DATA </td></tr>
                        </tbody>
                    }
                </table>
            </form>
        </main>
    )
}

export default InformationTable;