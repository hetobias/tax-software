import '@trussworks/react-uswds/lib/index.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignInForm from './pages/SignInForm';
import CreateAccountForm from './pages/CreateAccountForm';
import PersonalInfoForm from './pages/PersonalInfoForm';
import HouseholdStatusForm from './pages/HouseholdStatusForm';
import HouseholdIncomeForm from './pages/HouseholdIncomeForm';
import ReviewForm from './pages/ReviewForm';
import TaxEstimateForm from './pages/TaxEstimateForm';
import UserPage from './pages/UserPage';
import { FormDataProvider } from './FormDataContext';


export default function App() {


    return (
        <div >
            <FormDataProvider>
             <Router>
                 <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/sign_in" element={<SignInForm />} />
                    <Route path="/create_account" element={<CreateAccountForm />} />
                    <Route path="/personal_information" element={<PersonalInfoForm />} />
                    <Route path="/household_status" element={<HouseholdStatusForm />} />
                    <Route path="/household_income" element={<HouseholdIncomeForm />} />
                    <Route path="/review" element={<ReviewForm />} />
                    <Route path="/tax_estimate" element={<TaxEstimateForm />} />
                    <Route path="/user" element={<UserPage />} />
                </Routes>
             </Router>
            </FormDataProvider>
        </div>
    );

}