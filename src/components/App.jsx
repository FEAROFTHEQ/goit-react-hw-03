import './App.css'
import { useState, useEffect } from "react";
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import SearchBox from './SearchBox/SearchBox';


function App() {

const initContacts = [
  {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
  {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
  {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
  {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
];

const [contacts, setContacts] = useState(() => {
  const savedContacts = window.localStorage.getItem("save-contacts");
  if (savedContacts !== null) {
    return JSON.parse(savedContacts);
  }
  return initContacts;});


useEffect(()=>{
    window.localStorage.setItem("save-contacts", JSON.stringify(contacts));
  },[contacts])


const [filter, setFilter] = useState('');


const visibleContacts = contacts.filter((contact)=> contact.name.toLowerCase().includes(filter.toLowerCase()));
  const addContact= (newContact)=>{
    setContacts((prev)=>{
      return [...prev, newContact]
    })
  }


  const deleteContact = (contactId)=>{
    setContacts((prev)=>{
      return prev.filter((contact)=> contact.id !== contactId)
    })
  }

  return (
<div>
  <h1>Phonebook</h1>
  <ContactForm onAdd={addContact} />
  <SearchBox value={filter} onFilter={setFilter} />
  <ContactList contacts = {visibleContacts} onDelete={deleteContact}/>
</div>
  );
};

export default App;
