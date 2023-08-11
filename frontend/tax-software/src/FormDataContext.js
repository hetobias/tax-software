import { jsx as _jsx } from "react/jsx-runtime";
// @ts-nocheck
import { createContext, useContext, useState } from 'react';
const FormDataContext = createContext();
export const useFormData = () => {
    return useContext(FormDataContext);
};
export const FormDataProvider = ({ children }) => {
    const [formData, setFormData] = useState({
        //personal info
        firstName: '',
        middleName: '',
        lastName: '',
        streetAddress: '',
        streetAddress2: '',
        city: '',
        state: '',
        zip: '',
        //filing status
        singleOrMarried: '',
        jointlyOrSingle: '',
        isHeadofHousehold: false,
        hasDependent: false,
        dependentInputValue: '',
        //w2
        ein: '',
        wagesTips: '',
        w2TotalComp: '',
        ssWithheld: '',
        medicareWithheld: '',
        federalTaxWithheld: '',
        //1099
        ssnOrEin: '',
        ten99TotalComp: ''
    });
    return (_jsx(FormDataContext.Provider, { value: { formData, setFormData }, children: children }));
};
