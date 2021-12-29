import React from 'react';

const AddNewUser = () =>{
 return(
 <header className='bg-violet-700 text-white p-4 grid grid-cols-2'>
     <h1 className='text-3xl font-bold'>User Imformations</h1>
     <div className='grid justify-items-end'>
     <a href='' className='bg-gray-100 text-slate-900 rounded-md px-4 py-3 hover:bg-gray-300'>Add new user</a>
     </div>
 </header>
 )
}

export default AddNewUser;