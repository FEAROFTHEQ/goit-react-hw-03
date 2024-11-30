import s from './Contact.module.css'
import { MdPersonOutline } from "react-icons/md";
import { MdOutlinePhone } from "react-icons/md";

const Contact = ({contact, onDelete}) => {
  return (
    <div className={s.container}>
    <div className={s.text}>
      <p><MdPersonOutline />{contact.name}</p>
      <p><MdOutlinePhone /> {contact.number}</p>
    </div>
    <button onClick={()=> onDelete(contact.id)}>Delete</button>
    </div>
  )
}

export default Contact