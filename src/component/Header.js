import React from 'react';
import { Link } from 'react-router-dom';

const Header = () =>{
 return(
 <header className='bg-violet-700 text-white p-4 grid grid-cols-2'>
     <h1 className='text-3xl font-bold'>User Imformations</h1>
     <div className='grid justify-items-end'>
     <Link to="/new" className='bg-gray-100 text-slate-900 rounded-md px-4 py-3 hover:bg-gray-300'>Add new user</Link>
     </div>
 </header>
 )
}

export default Header;