import React from "react";
import './sign-in.styles.css'
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

const SignIn = ()=>{
    return(
        <div className='form-box'>
            <div className='formBox'>
                    <h1>Sign In</h1>
                    <Formik
                        initialValues={{
                            email: '',
                            password:''
                        }}
                        validationSchema={SignInSchema}
                        onSubmit={async (values) => {
                            await new Promise((r) => setTimeout(r, 500));
                            alert(JSON.stringify(values, null, 2));
                        }}
                    >
                        {({ errors, touched }) => (
                            <Form>
                                <Field name="email" type="email" placeholder="Email"/>
                                {errors.email && touched.email ? <div>{errors.email}</div> : null}

                                <Field id="password" name="password" placeholder="Password" />
                                {errors.password && touched.password ? (
                                    <div>{errors.password}</div>
                                ) : null}

                                <div className='forgot-text'>
                                    <Link to='/forgotPassword'>Forgot Password?</Link>
                                </div>

                                <button className="button" type="submit">Sign In</button>
                            </Form>
                        )}
                       </Formik>
                </div>

                <div className='imageBox'>
                    <img src={formImage} alt="image" width='600px' height='650px'/>
                    <div className='image-text'>Let us guide you home. </div>
                </div>
        </div>
    )
}

export default SignIn