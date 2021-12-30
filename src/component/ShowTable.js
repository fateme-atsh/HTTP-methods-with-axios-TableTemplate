import React from 'react';

const ShowTable = ( user, editClick ) => {
   return (
        <tr key={user.id} className='text-center odd:bg-gray-100 even:bg-gray-200 hover:bg-gray-300'>
            <td className='py-4 px-2'>{user.id}</td>
            <td className='py-4 px-2'>{user.name}</td>
            <td className='py-4 px-2'>{user.username}</td>
            <td className='py-4 px-2'>{user.email}</td>
            <td className='py-4 px-2'>{user.phone}</td>
            <td>
                <button type="button" onClick={(e) => editClick(e,user)} 
                    className='px-3 py-2 mx-3 bg-white border border-gray-900 rounded-md hover:bg-gray-500 hover:text-white'>
                    Edit </button>

                <button type="button"
                    className='px-3 py-2 bg-red-400 text-white border border-gray-900 rounded-md hover:bg-red-700'>
                    Delete </button>
            </td>
        </tr>
   )
}

export default ShowTable;