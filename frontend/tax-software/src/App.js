import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
    return (_jsx("div", { children: _jsx(FormDataProvider, { children: _jsx(Router, { children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Home, {}) }), _jsx(Route, { path: "/sign_in", element: _jsx(SignInForm, {}) }), _jsx(Route, { path: "/create_account", element: _jsx(CreateAccountForm, {}) }), _jsx(Route, { path: "/personal_information", element: _jsx(PersonalInfoForm, {}) }), _jsx(Route, { path: "/household_status", element: _jsx(HouseholdStatusForm, {}) }), _jsx(Route, { path: "/household_income", element: _jsx(HouseholdIncomeForm, {}) }), _jsx(Route, { path: "/review", element: _jsx(ReviewForm, {}) }), _jsx(Route, { path: "/tax_estimate", element: _jsx(TaxEstimateForm, {}) }), _jsx(Route, { path: "/user", element: _jsx(UserPage, {}) })] }) }) }) }));
}
