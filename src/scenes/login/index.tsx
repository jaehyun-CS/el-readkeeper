import React from 'react';
import { Field, Form, Formik } from 'formik';
import theme from '../../theme';
import '../index.css';
import { ThemeProvider, Typography, Grid, Paper, TextField, Button, Tabs } from '@mui/material';
import { getAuth, connectAuthEmulator, signInWithEmailAndPassword } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../../firebase.config';
import * as Yup from 'yup';
import { useAuth } from '../../context/AuthContext';
import { Link } from 'react-router-dom';
import { styles } from '../login-signup-styles';



const signupSchema = Yup.object().shape({
    firstName: Yup.string()
        .min(2, 'too short! first name mid tbh')
        .max(20, 'way too damn long, yo mom smokin sum')
        .required('this crap is required bruh'),
    lastName: Yup.string()
        .min(2, 'too short! dats what she said')
        .max(30, 'tf is this, a coordinate')
        .required('this crap is also required u tool'),
    email: Yup.string().email('fake ass email').required('required u lazy pos')
});

const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp);

const loginEmailPassword = async () => {
    // lsoe
};

const handleSubmit = (data: { email: string, password: string }, { setSubmitting }: { setSubmitting: any }): void => {
    setSubmitting(true);
    console.log('SUBMITTED: ', data);






    setSubmitting(false);
};

const LoginPage = (): JSX.Element => {


    return (
        <Paper sx={ styles.loginBox }>
            <Typography variant='h2' sx={ styles.title }>ReadKeeper</Typography>
            <Typography variant='h5' sx={ styles.subtitle }>Log in</Typography>
            <Formik
                initialValues={{
                    email: '',
                    password: ''
                }}
                onSubmit={ handleSubmit }
            >
                {({ values, isSubmitting }) => (
                    <Form>
                        <Field
                            fullWidth
                            placeholder='Email Address'
                            name='email'
                            type='input'
                            as={ TextField }
                            sx={ styles.fieldBox }
                        />

                        <Field
                            fullWidth
                            placeholder='Password'
                            name='password'
                            type='input'
                            as={ TextField }
                            sx={ styles.fieldBox }
                        />

                        <Button
                            fullWidth
                            disabled={ isSubmitting }
                            variant='contained'
                            sx={ styles.submitButton }
                            type='submit'
                        >
                            Log in
                        </Button>
                    </Form>
                )}
            </Formik>

            {/*<Button*/}
            {/*    fullWidth*/}
            {/*    sx={ styles.redirectButton }*/}
            {/*>*/}
            {/*    Don&apos;t have an account? Sign Up*/}
            {/*</Button>*/}

            <Link to='/signup'>
                <Typography variant='subtitle1' sx={ styles.redirectText }>
                    Don&apos;t have an account? Sign Up
                </Typography>
            </Link>
        </Paper>
    );
};

export default LoginPage;