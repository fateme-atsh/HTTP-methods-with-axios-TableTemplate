import React, { useState } from 'react';

const EditTable = ({ ...props }) => {
    const [users, setUsers] = useState([]);

    const handleCancelEdditing = (event, props) => {
        event.preventDefault();

        const user = {
            name: props.name,
            username: props.username,
            email: props.email,
            phone: props.phone,
        };

        setUsers(user);
    }

    return (
        <tr className='text-center odd:bg-gray-100 even:bg-gray-200 hover:bg-gray-300'>
            <td className='py-4 px-2'>{props.id}</td>

            <td className='py-4 px-2'>
                <input name="name" type="text" required="required"
                    value={props.editClick.name}
                    onChange={props.handleTableRowsChange} />
            </td>

            <td className='py-4 px-2'>
                <input name="username" type="text" required="required"
                    value={props.editClick.username}
                    onChange={props.handleTableRowsChange} />
            </td>

            <td className='py-4 px-2'>
                <input name="email" type="text" required="required"
                    value={props.editClick.email}
                    onChange={props.handleTableRowsChange} />
            </td>

            <td className='py-4 px-2'>
                <input name="phone" type="text" required="required"
                    value={props.editClick.phone}
                    onChange={props.handleTableRowsChange} />
            </td>

            <td>
                <button type="submit"
                    className='px-3 py-2 mx-3 border border-gray-900 rounded-md bg-green-300 hover:bg-green-500 hover:text-white'>
                    Save </button>

                <button type="button" onClick={handleCancelEdditing}
                    className='px-3 py-2 bg-red-400 text-white border border-gray-900 rounded-md hover:bg-red-700'>
                    Cancel </button>
            </td>
        </tr >
    )
}

export default EditTable;