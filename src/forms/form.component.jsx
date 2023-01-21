import React from 'react';
import { Formik, Field, Form } from 'formik';

import './form.styles.css'

const BasicForm = () => (
    <div className='form-box'>
        <h1>Sign Up</h1>
        <Formik
            initialValues={{
                firstName: '',
                lastName: '',
                email: '',
            }}
            onSubmit={async (values) => {
                await new Promise((r) => setTimeout(r, 500));
                alert(JSON.stringify(values, null, 2));
            }}
        >
            <Form>
                <Field id="firstName" name="firstName" placeholder="First Name" />
                <Field id="lastName" name="lastName" placeholder="Last Name" />
                <Field id="email" name="email" placeholder="Email" type="email"/>
                <button className='button' type="submit">Submit</button>
            </Form>
        </Formik>
    </div>
);

export default BasicForm