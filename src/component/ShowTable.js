import React from 'react';

const ShowTable = ( {...props} ) => {
   return (
        <tr className='text-center odd:bg-gray-100 even:bg-gray-200 hover:bg-gray-300'>
            <td className='py-4 px-2'>{props.name}</td>
            <td className='py-4 px-2'>{props.username}</td>
            <td className='py-4 px-2'>{props.email}</td>
            <td className='py-4 px-2'>{props.phone}</td>
            <td>
                <button type="button" onClick={(event) => props.editClick(event,props)} 
                    className='px-3 py-2 mx-3 bg-white border border-gray-900 rounded-md hover:bg-gray-500 hover:text-white'>
                    Edit </button>

                <button type="button" onClick={(event) => props.handleDeleteRows(event,props)}
                    className='px-3 py-2 bg-red-400 text-white border border-gray-900 rounded-md hover:bg-red-800 active:animate-pulse'>
                    Delete </button>
            </td>
        </tr>
   )
}

export default ShowTable;