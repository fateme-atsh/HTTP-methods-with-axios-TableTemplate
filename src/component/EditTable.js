import React from 'react';

const EditTable = ( handleTableRowsChange , editClick) => {
    return (
        <tr className='text-center odd:bg-gray-100 even:bg-gray-200 hover:bg-gray-300'>
            <td className='py-4 px-2'></td>

            <td className='py-4 px-2'>
                <input name="name" type="text" required="required" 
                value={editClick.name}
                onChange={handleTableRowsChange}/>
            </td>

            <td className='py-4 px-2'>
                <input name="username" type="text" required="required" 
                value={editClick.username}
                onChange={handleTableRowsChange}/>
            </td>

            <td className='py-4 px-2'>
                <input name="email" type="text" required="required" 
                value={editClick.email}
                onChange={handleTableRowsChange}/>
            </td>

            <td className='py-4 px-2'>
                <input name="phone" type="text" required="required"
                value={editClick.phone}
                onChange={handleTableRowsChange} />
            </td>

            <td>
                <button type="submit"
                    className='px-3 py-2 mx-3 bg-white border border-gray-900 rounded-md hover:bg-gray-500 hover:text-white'>
                    Save </button>

                <button type="button"
                    className='px-3 py-2 bg-red-400 text-white border border-gray-900 rounded-md hover:bg-red-700'>
                    Cancel </button>
            </td>
        </tr >
    )
}

export default EditTable;