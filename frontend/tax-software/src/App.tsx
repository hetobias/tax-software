import '@trussworks/react-uswds/lib/index.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignInForm from './components/SignInForm';

export default function App() {


    return (
        <div >
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/signin" element={<SignInForm />} />
                </Routes>
            </Router>
        </div>
    );

}