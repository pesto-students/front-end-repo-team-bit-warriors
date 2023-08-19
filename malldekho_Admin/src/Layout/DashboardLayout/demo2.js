import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
    name: Yup.string().min(6, 'Password must be at least 6 characters').required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
});

const RealTimeValidationForm = () => {
  const handleSubmit = (values) => {
    console.log(values);
  };


  const [storeFormData, SetStoreFormData] = React.useState({
    Name: "",

 
})
// const handleFormData = (event) => {
//     let currentFieldName = event.target.name;
//     let value = event.target.value;
//     SetStoreFormData({
//         ...storeFormData,
//         [currentFieldName]: value
//     });
// };

const handleNameChange = (e, handleChange) => {
    // Call your custom function here
    let currentFieldName = e.target.name;
    let value = e.target.value;
    SetStoreFormData({
        ...storeFormData,
        [currentFieldName]: value
    });
    // Call Formik's handleChange to update the field's value and trigger validation
    handleChange(e);
  };

  return (
    <Formik
      initialValues={{ storeFormData}}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched, handleChange }) => (
        <Form>
           <Field
              type="text"
              name="name"
              onChange={(e) => handleNameChange(e, handleChange)}
            />
        </Form>
      )}
    </Formik>
  );
};

export default RealTimeValidationForm;
