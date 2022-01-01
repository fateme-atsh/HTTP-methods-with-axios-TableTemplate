import React, { useEffect, useState, Fragment } from 'react';
import axios from 'axios';
import ShowTable from './ShowTable';
import EditTable from './EditTable';

const InformationTable = () => {

    const [users, setUsers] = useState(null);
    const [localDAtaObject, setLocalDataObject] = useState([]);
    const [editTableRows, setEditTableRows] = useState(
        {
            name: '',
            username: '',
            email: '',
            phone: '',
        }
    );

    // get the data from server.
    useEffect(() => {
        const getUsers = async () => {
            const response = await axios.get('https://jsonplaceholder.typicode.com/users');
            const data = [...response.data]
            setUsers(data);
        };
        if (!users) {
            getUsers();
        };
    }, []);

    //save the data(recieved from server) in a localstorage.
    useEffect(() => {
        localStorage.setItem('users', JSON.stringify(users));
        if (users !== null) {
            let LocalData = localStorage.getItem('users');
            setLocalDataObject(JSON.parse(LocalData));
        }
    }, [users]);

    //rowId used for editting the row data.
    const [rowId, setRowId] = useState(null);

    //
    const handleTableRowsChange = (event) => {
        event.preventDefault();

        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;

        const newFormData = { ...editTableRows };
        newFormData[fieldName] = fieldValue;

        setEditTableRows(newFormData);
    }

    //when user clicked the edit button in a row && edit the field value.
    const editClick = (event, props) => {
        event.preventDefault();
        setRowId(props.id);
        console.log(props.id);

        const editValues = {
            name: props.name,
            username: props.username,
            email: props.email,
            phone: props.phone,
        };

        setEditTableRows(editValues);
    }

    return (
        <main className='m-10  grid grid-cols-1'>
            <form>
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
                    {localDAtaObject !== null ?
                        <tbody>
                            {localDAtaObject.map((user) => (
                                <Fragment>
                                    {rowId === user.id ?
                                        <EditTable
                                            handleTableRowsChange={handleTableRowsChange}
                                            editClick={editClick} />
                                        :
                                        <ShowTable
                                            id={user.id}
                                            name={user.name}
                                            username={user.username}
                                            email={user.email}
                                            phone={user.phone}
                                            editClick={editClick}
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
;