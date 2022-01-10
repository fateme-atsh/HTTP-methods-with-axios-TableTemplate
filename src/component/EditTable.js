import React from 'react';

const EditTable = ({ ...props }) => {
 
    return (
        <tr className='text-center odd:bg-gray-100 even:bg-gray-200 hover:bg-gray-300'>
            {/* <td className='py-4 px-2'>
            {props.id}
            </td> */}

            <td className='py-4 px-2'>
                <input name="name" type="text" required="required" placeholder='name'
                    value={props.editTableRows.name}
                    onChange={props.handleTableRowsChange} />
            </td>

            <td className='py-4 px-2'>
                <input name="username" type="text" required="required" placeholder='user name'
                    value={props.editTableRows.username}
                    onChange={props.handleTableRowsChange} />
            </td>

            <td className='py-4 px-2'>
                <input name="email" type="text" required="required" placeholder='email'
                    value={props.editTableRows.email}
                    onChange={props.handleTableRowsChange} />
            </td>

            <td className='py-4 px-2'>
                <input name="phone" type="text" required="required" placeholder='phone number'
                    value={props.editTableRows.phone}
                    onChange={props.handleTableRowsChange} />
            </td>

            <td>
                <button type="submit"
                    className='px-3 py-2 mx-3 border border-gray-900 rounded-md bg-green-300 hover:bg-green-500 hover:text-white'>
                    Save </button>

                <button type="button" onClick={props.handleCancelEdditing}
                    className='px-3 py-2 bg-red-400 text-white border border-gray-900 rounded-md hover:bg-red-700'>
                    Cancel </button>
            </td>
        </tr >
    )
}

export default EditTable;