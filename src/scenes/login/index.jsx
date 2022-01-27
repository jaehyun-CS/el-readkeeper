import { Field, Form, Formik } from 'formik';
import '../index.css';
import { Typography, Paper, TextField, Button } from '@mui/material';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import { styles } from '../login-signup-styles';
import { useAuth } from '../../context/AuthContext';



//
// const handleSubmit = (data: { email: string, password: string }, { setSubmitting }: { setSubmitting: any }): void => {
//     setSubmitting(true);
//     console.log('SUBMITTED: ', data);
//
//     setSubmitting(false);
// };

const LoginPage = () => {


    return (
        <Paper sx={ styles.loginBox }>
            <Typography variant='h2' sx={ styles.title }>ReadKeeper</Typography>
            <Typography variant='h5' sx={ styles.subtitle }>Log in</Typography>
            <Formik
                initialValues={{
                    email: '',
                    password: ''
                }}
                onSubmit={ (values) => {
                    console.log(values); }
                }
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


            <Link to='/signup'>
                <Typography variant='subtitle1' sx={ styles.redirectText }>
                    Don&apos;t have an account? Sign Up
                </Typography>
            </Link>
        </Paper>
    );
};

export default LoginPage;