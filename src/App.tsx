import Landing from './scenes/landing/index';
import LoginPage from './scenes/login/index';
import SignupPage from './scenes/signup/index';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = (): JSX.Element => {
    return (
        <Router>
            <Routes>
                <Route path='/login' element={ <LoginPage /> } />

                <Route path='/signup' element={ <SignupPage /> } />
            </Routes>
        </Router>
    );
};

export default App;
