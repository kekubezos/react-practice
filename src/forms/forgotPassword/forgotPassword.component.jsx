import React from "react";
import './forgotPassword.styles.css'
import {Field, Form, Formik} from "formik";
import * as Yup from "yup";
import YupPassword from "yup-password";
import {Link} from "react-router-dom";

import formImage from '../../assets/form-image.jpg'

YupPassword(Yup) //extending password functionality to yup.

const SignInSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email provided.').required('Email is required.'),
    password: Yup.string().password().required('Password is required.')
});

const ForgotPassword = ()=>{
    return(
        <div className='form-box'>
            <div className='formBox'>
                <h1>Forgot Password?</h1>
                <p className='text'>Enter your email below, you will receive an email with instructions on how to reset your password in a few minutes.</p>
                <Formik
                    initialValues={{
                        email: ''
                    }}
                    validationSchema={SignInSchema}
                    onSubmit={async (values) => {
                        await new Promise((r) => setTimeout(r, 500));
                        alert(JSON.stringify(values, null, 2));
                    }}
                >
                    {({ errors, touched }) => (
                        <Form>
                            <Field name="email" type="email" placeholder="Enter your email"/>
                            {errors.email && touched.email ? <div>{errors.email}</div> : null}

                            <button className="button" type="submit">Submit</button>
                        </Form>
                    )}
                </Formik>
                <p>Go back to <Link to='/sign-in'>sign in</Link></p>
                    </div>

                    <div className='imageBox'>
                        <img src={formImage} alt="image" width='600px' height='650px'/>
                        <div className='image-text'>Let us guide you home. </div>
                        </div>
        </div>
    )
}
export default ForgotPassword



