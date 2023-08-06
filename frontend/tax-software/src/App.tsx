import '@trussworks/react-uswds/lib/index.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignInForm from './components/SignInForm';
import CreateAccountForm from './components/CreateAccountForm';
import "./i18n.tsx";


export default function App() {


    return (
        <div >
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/signin" element={<SignInForm />} />
                    <Route path="/createaccount" element={<CreateAccountForm />} />
                </Routes>
            </Router>
        </div>
    );

}