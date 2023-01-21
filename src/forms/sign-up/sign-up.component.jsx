import React from 'react';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import './sign-up.styles.css'
import {Link} from "react-router-dom";

const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
        .min(3, 'First Name should be between 3 to 30 characters long!')
        .max(30, 'Too Long!')
        .required('First Name is required.'),
    lastName: Yup.string()
        .min(3, 'Last Name should be between 3 to 30 characters long!')
        .max(31, 'Too Long!')
        .required('Last Name is required.'),
    email: Yup.string().email('Invalid email provided.').required('Email is required.'),
});

const SignUp = () => (
    <div className='form-box'>
        <h1>Sign Up</h1>
        <Formik
            initialValues={{
                firstName: '',
                lastName: '',
                email: '',
            }}
            validationSchema={SignupSchema}

            onSubmit={async (values) => {
                await new Promise((r) => setTimeout(r, 500));
                alert(JSON.stringify(values, null, 2));
            }}
        >
            {({ errors, touched }) => (
               <Form>
                     <Field id="firstName" name="firstName" placeholder="First Name" />
                   {errors.firstName && touched.firstName ? (
                    <div>{errors.firstName}</div>
                     ) : null}
                <Field id="lastName" name="lastName" placeholder="Last Name" />
                 {errors.lastName && touched.lastName ? (
                       <div>{errors.lastName}</div>
                   ) : null}
                     <Field name="email" type="email" placeholder="Email"/>
                    {errors.email && touched.email ? <div>{errors.email}</div> : null}
                     <button className="button" type="submit">Submit</button>
                 </Form>
            )}
        </Formik>
        <h2 className='title'>Already have an account? </h2>
            <Link to='/sign-in'>Sign In here </Link>
    </div>
);

export default SignUp

