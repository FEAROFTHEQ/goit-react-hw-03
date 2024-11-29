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
const [filter, setFilter] = useState('');
const visibleContacts = initContacts.filter((contact)=> contact.name.toLowerCase().includes(filter.toLowerCase()));
  return (
<div>
  <h1>Phonebook</h1>
  <ContactForm />
  <SearchBox value={filter} onFilter={setFilter} />
  <ContactList contacts = {visibleContacts}/>
</div>
  );
};

export default App;