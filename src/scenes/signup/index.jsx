import { Field, Form, Formik } from 'formik';
import '../index.css';
import { Typography, Paper, TextField, Button } from '@mui/material';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import { styles } from '../login-signup-styles';
import { useAuth } from '../../context/AuthContext';


const signupSchema = Yup.object().shape({
    email: Yup.string().email('fake ass email').required('required u lazy pos'),
    password: Yup.string()
        .min(7, 'too short! dats what she said')
        .max(30, 'tf is this, a coordinate')
        .required('this crap is also required u tool'),
});


const SignupPage = () => {

    const { signup } = useAuth();

    // const handleSubmit = (data: { email: string, password: string }, { setSubmitting }: { setSubmitting: any }): void => {
    //     setSubmitting(true);
    //     console.log('SUBMITTED: ', data);
    //     setSubmitting(false);
    // };


    const handleSubmit = (values) => {
        // e.preventDefault();

        signup(values.email, values.password);
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
                validationSchema={ signupSchema }
                onSubmit={ (values) => { handleSubmit(values); } }
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

            <Link to='/login'>
                <Typography variant='subtitle1' sx={ styles.redirectText }>
                    Already have an account? Log in
                </Typography>
            </Link>
        </Paper>
    );
};

export default SignupPage;
