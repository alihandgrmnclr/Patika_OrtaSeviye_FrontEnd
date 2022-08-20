import "./style.css"
import React, { useState, useEffect } from 'react'
import List from "./List/index"
import Form from "./Form/index"

function Contacts() {
    const [contacts, setContacts] = useState([
        {
            fullName:"Mehmet",
            phoneNumber: "123"
        },
        {
            fullName:"Ayşe",
            phoneNumber: "456"
        },
        {
            fullName:"Fatma",
            phoneNumber: "88989"
        }
    ]);

    useEffect(() => {
        console.log(contacts);
    },[contacts]);

    return (
        
        <div id='container'>
            <h1>Contacts</h1>
            <List contacts={contacts}/>
            <Form addContact={setContacts} contacts={contacts}/> 
        </div>
    )
}

export default Contacts;