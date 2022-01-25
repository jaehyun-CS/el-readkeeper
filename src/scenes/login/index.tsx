import React from 'react';
import {Field, Form, Formik } from 'formik';
import theme from '../../theme';
import {
    ThemeProvider,
    Typography,
    Grid,
    Paper,
    TextField,
    Button
} from '@mui/material';
import './index.css';


const styles = {
    loginBox: {
        textAlign: 'center',
        margin: '5em auto 5em auto',
        width: '30%',
        padding: '2em 0 2em 0'
    },
    fieldBox: {
        margin: '1em auto 1em auto',
        display: 'block',
    }
};

const handleSubmit = (data: { email: string, password: string }, { setSubmitting }: { setSubmitting: any }): void => {
    setSubmitting(true);
    console.log('SUBMITTED: ', data);
    setSubmitting(false);
};

const LoginPage = (): JSX.Element => {
    return (
        <Paper sx={ styles.loginBox }>
            <Typography variant='h5'>Log in</Typography>
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
                            placeholder='Email Address'
                            name='email'
                            type='input'
                            as={ TextField }
                            sx={ styles.fieldBox }
                        />

                        <Field
                            placeholder='Password'
                            name='password'
                            type='input'
                            as={ TextField }
                            sx={ styles.fieldBox }
                        />

                        <Button disabled={ isSubmitting } variant='contained' sx={ styles.fieldBox } type='submit'>
                            Log in
                        </Button>
                    </Form>
                )}
            </Formik>
        </Paper>
    );
};

export default LoginPage;