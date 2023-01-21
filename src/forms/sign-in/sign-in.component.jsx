import React from "react";
import './sign-in.styles.css'
import {Field, Form, Formik} from "formik";
import * as Yup from "yup";
import YupPassword from "yup-password";
import {Link} from "react-router-dom";

YupPassword(Yup) //extending password functionality to yup.

const SignInSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email provided.').required('Email is required.'),
    password: Yup.string().password().required('Password is required.')
});

const SignIn = ()=>{
    return(
        <div className='form-box'>
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

                        <button className="button" type="submit">Submit</button>
                    </Form>
                )}
               </Formik>
            <h2 className='title'>Do not have an account? </h2>

            <Link to='/sign-up'>Sign Up here </Link>
        </div>
    )
}

export default SignIn