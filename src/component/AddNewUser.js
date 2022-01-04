import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ShowTable from './ShowTable';
import { LocalStorageContext } from '../context/LocalStorageContest';


const AddNewUser = () => {

    const localDAta = useContext(LocalStorageContext);
    const [user, setUser] = useState([]);
    
    // useEffect(() => {
        localStorage.setItem('newusers', JSON.stringify(user));
    // }, [user]);

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
            name: addNewUser.name,
            username: addNewUser.username,
            email: addNewUser.email,
            phone: addNewUser.phone,
        };

        let LocalData = localStorage.getItem('newusers');
        
        if (LocalData) {
            let localDataObject = JSON.parse(LocalData);
            const newUsers = [...localDataObject, newUser];
            setUser(newUsers);
        }
        axios.post('https://jsonplaceholder.typicode.com/posts/', newUser).then(response => {
            console.log(response);
        });
    }
    
    return (
        <>
            <header className='bg-violet-700 text-white p-4 grid grid-cols-2'>
                <h1 className='text-3xl font-bold'>Add New User Imformations</h1>
                <div className='grid justify-items-end'>
     <Link to="/home" className='bg-gray-100 text-slate-900 rounded-md px-6 py-3 hover:bg-gray-300 text-xl'>Back</Link>
     </div>
            </header>

            <main className='my-5 mx-2 relative'>
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
                        <input type="reset" value="Canlcel"
                            className='border rounded-md bg-gray-300 m-4 p-4 w-1/12 text-center hover:cursor-pointer'/>
                    </div>
                </form>
                <section className='grid grid-cols-1'>
                <table className='my-5 mx-2'>
                <thead className='bg-gray-800 text-white'>
                    <tr>
                        <th className='py-4 px-2'></th>
                        <th className='py-4 px-2'>Name</th>
                        <th className='py-4 px-2'>User Name</th>
                        <th className='py-4 px-2'>Email</th>
                        <th className='py-4 px-2'>Phone Number</th>
                        <th className='py-4 px-2'>Action</th>
                    </tr>
                </thead>
                {user !== null ?
                <tbody>
                        {user.map(user => (<ShowTable
                            id={null}
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
                </section>
            </main>
        </>
    )
}
export default AddNewUser;