import Contact from '../Contact/Contact'
import s from './ContactList.module.css'

const ContactList = ({contacts}) => {
  return (
    <ul>
        {contacts.map(contact =><li key={contact.id}><Contact contact ={contact}/></li> )}
    </ul>
  )
}

export default ContactList