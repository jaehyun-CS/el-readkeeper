import { Field, Form, Formik } from 'formik';
import '../index.css';
import { ThemeProvider, Typography, Grid, Paper, TextField, Button, Tabs } from '@mui/material';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import { styles } from '../login-signup-styles';
import { useAuth } from '../../context/AuthContext';



// const handleSubmit = (data: { email: string, password: string }, { setSubmitting }: { setSubmitting: any }): void => {
//     setSubmitting(true);
//     console.log('SUBMITTED: ', data);
//
//
//
//
//
//
//     setSubmitting(false);
// };



const SignupPage = (): JSX.Element => {

    // const { signup } = useAuth();

    const handleSubmit = (data: { email: string, password: string }, { setSubmitting }: { setSubmitting: any }): void => {
        // e.preventDefault();

        // signup(data.email, data.password);

    };


    return(
        <Paper sx={ styles.loginBox }>
            <Typography variant='h2' sx={ styles.title }>ReadKeeper</Typography>
            <Typography variant='h5' sx={ styles.subtitle }>Sign up</Typography>
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
                            Create Account
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

            <Link to='/login'>
                <Typography variant='subtitle1' sx={ styles.redirectText }>
                    Already have an account? Log in
                </Typography>
            </Link>
        </Paper>
    );
};

export default SignupPage;
