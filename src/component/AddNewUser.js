import React, { useEffect, useState } from 'react';

const AddNewUser = () => {
    const[newUser,setNewUser] = useState({
        name: '',
        username: '',
        email: '',
        phone: '',
    });
    const handleFormChange = (event) => {
        event.preventDefault();
    
        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;
    
        const newFormData = { ...newUser };
        newFormData[fieldName] = fieldValue;
    
        setNewUser(newFormData);
      };

    return (
        <>
            <header className='bg-violet-700 text-white p-4 grid grid-cols-2'>
                <h1 className='text-3xl font-bold'>Add New User Imformations</h1>
            </header>

            <section className='my-5 mx-2 relative'>
                <form>
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
                        <button type="submit" value="save"
                            className='border rounded-md bg-violet-700 text-white m-4 p-4 w-1/12 hover:cursor-pointer'>Save</button>
                        <button type="click" value="canlcel"
                            className='border rounded-md bg-gray-300 m-4 p-4 w-1/12 text-center hover:cursor-pointer'>Cancel</button>
                    </div>

                </form>
            </section>
        </>
    )
}
export default AddNewUser;