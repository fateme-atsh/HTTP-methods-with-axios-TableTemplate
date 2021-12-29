import React from 'react';

const ShowTable = (users) => {

    return (
                <tbody>
                    <tr className='text-center odd:bg-gray-100 even:bg-gray-200 hover:bg-gray-300'>
                        <td className='py-4 px-2'>{users.id}</td>
                        <td className='py-4 px-2'>{users.name}</td>
                        <td className='py-4 px-2'>{users.username}</td>
                        <td className='py-4 px-2'>{users.email}</td>
                        <td className='py-4 px-2'>{users.phone}</td>
                        <td></td>
                    </tr>
                </tbody>
    )
}

export default ShowTable;