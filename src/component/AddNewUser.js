import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import ShowTable from './ShowTable';


const AddNewUser = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        localStorage.setItem('users', JSON.stringify(users))

    }, [users]);

    const [addNewUser, setAddNewUser] = useState({
        name: '',
        username: '',
        email: '',
        phone: '',
    });
    const handleFormChange = (event) => {
        event.preventDefault();

        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;

        const newFormData = { ...addNewUser };
        newFormData[fieldName] = fieldValue;

        setAddNewUser(newFormData);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();

        const newUser = {
            id: nanoid(),
            name: addNewUser.name,
            username: addNewUser.username,
            email: addNewUser.email,
            phone: addNewUser.phone,
        };

        let LocalData = localStorage.getItem('users');
        if (LocalData) {
            let localDataObject = JSON.parse(LocalData);
            console.log(localDataObject);
            const newUsers = [...localDataObject, newUser];
            setUsers(newUsers);
            console.log(newUsers)
        }
    }

    const handleFormCancle = (event) => {
        

    }
    

    return (
        <>
            <header className='bg-violet-700 text-white p-4 grid grid-cols-2'>
                <h1 className='text-3xl font-bold'>Add New User Imformations</h1>
            </header>

            <section className='my-5 mx-2 relative'>
                <form onSubmit={handleFormSubmit}>
                    <div className='my-5'>
                        <label className='font-semibold text-2xl px-3 mt-5'>
                            Enter name<span className='text-red-700'>*</span> :
                        </label>
                        <input type="text" required="required" name="name"
                            className='input-style'
                            onChange={handleFormChange}></input><br />
                    </div>

                    <div className='my-5'>
                        <label className='font-semibold text-2xl px-3 mt-5'>Enter user name
                            <span className='text-red-700'>*</span> :
                        </label>
                        <input type="text" required="required" name="username"
                            className='input-style'
                            onChange={handleFormChange}></input><br />
                    </div>

                    <div className='my-5'>
                        <label className='font-semibold text-2xl px-3 mt-5'>
                            Enter email<span className='text-red-700'>*</span> :
                        </label>
                        <input type="email" required="required" name="email"
                            className='input-style'
                            onChange={handleFormChange}></input><br />
                    </div>

                    <div className='my-5'>
                        <label className='font-semibold text-2xl px-3 mt-5'>
                            Enter phone number<span className='text-red-700'>*</span> :
                        </label>
                        <input type="number" required="required" name="phone"
                            className='input-style'
                            onChange={handleFormChange}></input><br />
                    </div>

                    <div className='my-5'>
                        <input type="submit" value="Save"
                            className='border rounded-md bg-violet-700 text-white m-4 p-4 w-1/12 hover:cursor-pointer'/>
                        <input type="click" value="Canlcel" onClick={handleFormCancle}
                            className='border rounded-md bg-gray-300 m-4 p-4 w-1/12 text-center hover:cursor-pointer'/>
                    </div>
                </form>
                <div className='grid grid-cols-1'>
                <table className='my-5 mx-2'>
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
                </div>
            </section>
        </>
    )
}
export default AddNewUser;