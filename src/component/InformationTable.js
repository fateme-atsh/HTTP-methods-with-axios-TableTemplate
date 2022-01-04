import React, { useState, Fragment, useContext } from 'react';
import ShowTable from './ShowTable';
import EditTable from './EditTable';
import { LocalStorageContext } from '../context/LocalStorageContest';

const InformationTable = () => {
    
    const localDAta = useContext(LocalStorageContext);
    if(localDAta){console.log(localDAta);}

    const [editTableRows, setEditTableRows] = useState(
        {
            name: '',
            username: '',
            email: '',
            phone: '',
        }
    );

    //rowId uses for editting the row data.
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

    // const handleEditFormSubmit = (event) => {
    //     event.preventDefault();
    
    //     const rowId = {
    //       id: editContactId,
    //       fullName: editFormData.fullName,
    //       address: editFormData.address,
    //       phoneNumber: editFormData.phoneNumber,
    //       email: editFormData.email,
    //     };    


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
                    {localDAta !== null ?
                        <tbody>
                            {localDAta.map((user) => (
                                <Fragment>
                                    {rowId === user.id ?
                                        <EditTable
                                            id={user.id}
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