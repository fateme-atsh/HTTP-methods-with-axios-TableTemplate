import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ShowTable from './ShowTable';
import AddNewUser from './AddNewUser';

const Table = () => {

    const [users, setUsers] = useState(null);

    useEffect(() => {
        const getUsers = async () => {
            const response = await axios.get('https://jsonplaceholder.typicode.com/users');
            const data = [...response.data]
            setUsers(data);
            const saveLocalData = JSON.stringify(data);
            localStorage.setItem('users', saveLocalData);
        };
        if (!users) {
            getUsers();
        };
    }, []);
    useEffect(() => {
        localStorage.setItem('users', JSON.stringify(users));
    }, [users]);



    return (
        <main className='my-5 mx-2  grid grid-cols-1'>
            <table className='table-fixed'>
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
                        {users.map(user => (<ShowTable
                            id={user.id}
                            name={user.name}
                            username={user.username}
                            email={user.email}
                            phone={user.phone}/>
                        ))}
                    </tbody>
                    :
                    <tbody><tr><td className='text-red-500 font-8xl font-black'> NO DATA </td></tr></tbody>

                }

            </table>
        </main>
    )
}

export default Table;