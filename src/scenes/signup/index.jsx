import { Field, Form, Formik } from 'formik';
import '../index.css';
import { Typography, Paper, TextField, Button, Alert } from '@mui/material';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import { styles } from '../login-signup-styles';
import { useAuth, currentUser } from '../../context/AuthContext';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createNewUser } from '../../services/user-services';


const signupSchema = Yup.object().shape({
    fName: Yup.string()
        .max(15, 'Dude wtf is this long ass first name, chill out')
        .required('First name is required doofus'),
    lName: Yup.string()
        .max(20, 'Holy cow get that shortened dawg')
        .required('How tf u not got a last name'),
    email: Yup.string().email('Fake email, nice try').required('Email is required'),
    password: Yup.string()
        .min(7, 'Too short! dats what she said')
        .max(30, 'tf is this, a coordinate')
        .required('Password is required'),
});


const SignupPage = () => {

    const { signup } = useAuth();
    const navigate = useNavigate();

    const [ submitting, setSubmitting ] = useState(false);
    const [ myError, setMyError ] = useState('');

    const handleSubmit = async (data) => {
        // e.preventDefault();

        try {
            setMyError('');
            setSubmitting(true);

            signup(data.email, data.password).then(cred => {
                createNewUser(cred.user.uid, data.fName, data.lName, data.email).catch(err => {
                    console.log('Something went wrong while creating a new user: ', err);
                });

                navigate('/');
            });

        } catch {
            console.log('FAILED TO CREATE AN ACCOUNT :(');
            setMyError('Failed to create account');
        }
        setSubmitting(false);
    };


    return(
        <Paper sx={ styles.loginBox }>
            <Typography variant='h2' sx={ styles.title }>ReadKeeper</Typography>
            <Typography variant='h5' sx={ styles.subtitle }>Sign up</Typography>
            <Formik
                initialValues={{
                    fName: '',
                    lName: '',
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
                            placeholder='First Name'
                            name='fName'
                            type='input'
                            as={ TextField }
                            sx={ styles.fieldBox }
                        />
                        { errors.fName && touched.fName ? ( <Alert severity="error" variant='filled'>{ errors.fName }</Alert> ) : null }

                        <Field
                            fullWidth
                            placeholder='Last Name'
                            name='lName'
                            type='input'
                            as={ TextField }
                            sx={ styles.fieldBox }
                        />
                        { errors.lName && touched.lName ? ( <Alert severity="error" variant='filled'>{ errors.lName }</Alert> ) : null }

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
                            Create Account
                        </Button>
                        { myError === '' ? null : ( <Alert sx={{ marginBottom: '1em' }} severity="error" variant='filled'>{ myError }</Alert> ) }
                    </Form>
                )}
            </Formik>

            <Link to='/login'>
                <Typography variant='subtitle1' sx={ styles.redirectText }>
                    Already have an account? Log in
                </Typography>
            </Link>
        </Paper>
    );
};

export default SignupPage;
