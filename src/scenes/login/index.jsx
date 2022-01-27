import { Field, Form, Formik } from 'formik';
import '../index.css';
import { Typography, Paper, TextField, Button, Alert } from '@mui/material';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import { styles } from '../login-signup-styles';
import { useAuth, currentUser } from '../../context/AuthContext';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const signupSchema = Yup.object().shape({
    email: Yup.string().email('fake ass email').required('required u lazy pos'),
    password: Yup.string()
        .min(7, 'too short! dats what she said')
        .max(30, 'tf is this, a coordinate')
        .required('this crap is also required u tool'),
});


const LoginPage = () => {

    const { login } = useAuth();
    const navigate = useNavigate();

    const [ submitting, setSubmitting ] = useState(false);
    const [ myError, setMyError ] = useState('');

    const handleSubmit = async (data) => {
        // e.preventDefault();

        try {
            setMyError('');
            setSubmitting(true);
            await login(data.email, data.password);
            navigate('/');
        } catch {
            console.log('FAILED TO LOG IN :(');
            setMyError('Failed to log in');
        }
        setSubmitting(false);
    };


    return (
        <Paper sx={ styles.loginBox }>
            <Typography variant='h2' sx={ styles.title }>ReadKeeper</Typography>
            <Typography variant='h5' sx={ styles.subtitle }>Log in</Typography>
            <Formik
                initialValues={{
                    email: '',
                    password: ''
                }}
                validationSchema={ signupSchema }
                onSubmit={ (values) => { handleSubmit(values); } }
            >
                {({ errors, touched }) => (
                    <Form>
                        <Field
                            fullWidth
                            placeholder='Email Address'
                            name='email'
                            type='input'
                            as={ TextField }
                            sx={ styles.fieldBox }
                        />
                        { errors.email && touched.email ? ( <Alert severity="error" variant='filled'>{ errors.email }</Alert> ) : null }

                        <Field
                            fullWidth
                            placeholder='Password'
                            name='password'
                            type='input'
                            as={ TextField }
                            sx={ styles.fieldBox }
                        />
                        { errors.password && touched.password ? ( <Alert severity="error" variant='filled'>{ errors.password }</Alert> ) : null }

                        <Button
                            fullWidth
                            disabled={ submitting }
                            variant='contained'
                            sx={ styles.submitButton }
                            type='submit'
                        >
                            Log in
                        </Button>
                        { myError === '' ? null : ( <Alert sx={{ marginBottom: '1em' }} severity="error" variant='filled'>{ myError }</Alert> ) }
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