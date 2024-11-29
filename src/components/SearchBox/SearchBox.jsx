import s from './SearchBox.module.css'
import { Formik, Field } from 'formik';

const SearchBox = ({value, onFilter}) => {
  return (
    <div>
        <p>Find contact by name</p>
        
        <Formik initialValues={{}} onSubmit={() => {}}>
        <Field type='text' name='filter' value={value} onChange={(e)=> onFilter(e.target.value)} />
        </Formik>
    </div>
  )
}

export default SearchBox