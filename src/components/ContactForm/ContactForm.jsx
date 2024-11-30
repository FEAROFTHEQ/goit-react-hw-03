import s from './ContactForm.module.css'
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { nanoid } from 'nanoid'
import { useId } from "react";




const ContactForm = ({ onAdd }) => {
  const ContactSchema = Yup.object().shape({
    name: Yup.string().min(3, "Name is too short!").max(50, "Name is too long!").required("Required"),
    number: Yup.string().min(3, "Number is too short!").max(50, "Number is too long!").required("Required"),
  });
  const nameFieldId = useId();
  const numberFieldId = useId();
  const handleSubmit = (values, actions)=>{
    onAdd({
      id:nanoid(),
      name: values.name,
      number: values.number,
    })
    actions.resetForm();
  }
  return (
    <div>
        <Formik initialValues={{
          name:'',
          number:''
        }} onSubmit={handleSubmit} validationSchema={ContactSchema}>
        <Form>
        <label htmlFor={nameFieldId}>Name</label>
        <Field type="text" name="name" />
        <ErrorMessage name="name" component="span" />
        <label htmlFor={numberFieldId}>Number</label>
				<Field type="number" name="number" />
        <ErrorMessage name="number" component="span" />
        <button type="submit">Add contact</button>
        </Form>
        </Formik>
    </div>
  )
}

export default ContactForm