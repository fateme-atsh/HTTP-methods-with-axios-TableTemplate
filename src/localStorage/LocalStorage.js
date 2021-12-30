import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { nanoid } from 'nanoid';

const LocalStorage = () => {
    
    const[users, setUsers]= useState();

    useEffect(() => {
        const getUsers = async () => {
            const response = await axios.get('https://jsonplaceholder.typicode.com/users');
            const data = [...response.data]
            setUsers(data);
            console.log(data);
        };
        if (!users) {
            getUsers();
        };
        localStorage.setItem('users', JSON.stringify(users));
        
    }, []);

    return()
}
export default LocalStorage;