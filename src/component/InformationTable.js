import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ShowTable from './ShowTable';

const Table = () => {

        const [user, setUser]= useState([]);

        useEffect( () => { 
            const getUsers = async () => {
                await axios.get('https://jsonplaceholder.typicode.com/users')
                 .then((response) => { setUser = response.data; })  
             }
         }, []);

        

console.log(user);
        // const Users = users.map( user => {
        //     return <ShowTable 
        //     key={user.id} 
        //     name={user.name} 
        //     username={user.username} 
        //     email={user.email} 
        //     phone={user.phone}/>
        //         });

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
                <ShowTable users={user} />
            </table>
        </main>
    )
}

export default Table;