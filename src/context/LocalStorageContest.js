import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const LocalStorageContext = createContext();

const LocalStorageContextProvider = ({ ...props }) => {

    const [users, setUsers] = useState(null);
    const [localDAtaObject, setLocalDataObject] = useState([]);

    // get the data from server.
    useEffect(() => {
        const getUsers = async () => {
            const response = await axios.get('https://jsonplaceholder.typicode.com/users');
            const data = [...response.data];
            setUsers(data);
        };
        if(users === null){
            getUsers();
        }
        
    }, []);

    //save the data(has recieved from server) in a localstorage.
    useEffect(() => {
        localStorage.setItem('users', JSON.stringify(users));
        if (users !== null) {
            let LocalData = localStorage.getItem('users');
            setLocalDataObject(JSON.parse(LocalData));
        }
    }, [users]);



    return (
        <LocalStorageContext.Provider value={localDAtaObject}>
            {props.children}
        </LocalStorageContext.Provider>
    );
}

export default LocalStorageContextProvider;
