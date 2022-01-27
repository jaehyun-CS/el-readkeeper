import React from 'react';
import LoginPage from './scenes/login/index';
import SignupPage from './scenes/signup/index';
import LibraryPage from './scenes/library/index';
import ReadingsPage from './scenes/readings/index';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from '../src/context/AuthContext';
import { useAuth } from './context/AuthContext';
import PropTypes from 'prop-types';


const App = () => {
    return (
        <Router>
            <AuthProvider>
                <Routes>
                    <Route path='/login' element={ <LoginPage /> } />
                    <Route path='/signup' element={ <SignupPage /> } />
                    <Route
                        path='/library'
                        element={
                            <PrivateRoute redirectTo="/login">
                                <LibraryPage />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path='/readings'
                        element={
                            <PrivateRoute redirectTo="/login">
                                <ReadingsPage/>
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path='/'
                        element={
                            <PrivateRoute redirectTo="/login">
                                <LibraryPage />
                            </PrivateRoute>
                        }
                    />
                </Routes>
            </AuthProvider>
        </Router>
    );
};

const PrivateRoute = ({ children, redirectTo }) => {
    PrivateRoute.propTypes = {
        redirectTo: PropTypes.element,
        children: PropTypes.element
    };

    const { currentUser } = useAuth();
    return currentUser ? children : <Navigate to={redirectTo} />;
};

export default App;
