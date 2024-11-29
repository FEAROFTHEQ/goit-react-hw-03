import s from './Contact.module.css'
import { MdPersonOutline } from "react-icons/md";
import { MdOutlinePhone } from "react-icons/md";

const Contact = ({contact}) => {
  return (
    <>
    <p><MdPersonOutline />{contact.name}</p>
    <p><MdOutlinePhone /> {contact.number}</p>
    <button>Delete</button>
    </>
  )
}

export default Contact