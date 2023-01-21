import React from "react";
import './sign-in.styles.css'
import {Field, Form, Formik} from "formik";

const SignIn = ()=>{
    return(
        <div className='form-box'>
            <h1>Sign In</h1>
            <Formik
                initialValues={{
                    email: '',
                    password:''
                }}
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 500));
                    alert(JSON.stringify(values, null, 2));
                }}
            >
                <Form>
                    <Field id="email" name="email" placeholder="Email" type="email"/>
                    <Field id="password" name="password" placeholder="Password" />
                    <button className='button' type="submit">Submit</button>
                </Form>
            </Formik>
        </div>
    )
}

export default SignIn