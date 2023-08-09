import '@trussworks/react-uswds/lib/index.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignInForm from './pages/SignInForm';
import CreateAccountForm from './pages/CreateAccountForm';
import PersonalInfoForm from './pages/PersonalInfoForm';
import HouseholdStatusForm from './pages/HouseholdStatusForm';
import HouseholdIncomeForm from './pages/HouseholdIncomeForm';
import FormW2 from './components/FormW2';
import Form1099 from './components/Form1099';


export default function App() {


    return (
        <div >
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/sign_in" element={<SignInForm />} />
                    <Route path="/create_account" element={<CreateAccountForm />} />
                    <Route path="/personal_information" element={<PersonalInfoForm />} />
                    <Route path="/household_status" element={<HouseholdStatusForm />} />
                    <Route path="/household_income" element={<HouseholdIncomeForm />} />
                </Routes>
            </Router>
        </div>
    );

}