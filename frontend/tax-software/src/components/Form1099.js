import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
// @ts-nocheck
import { Button, Fieldset, Form, GridContainer, Label, TextInput } from "@trussworks/react-uswds";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useFormData } from "../FormDataContext";
export default function Form1099({ goBackToTaxChoice }) {
    const { t, i18n } = useTranslation(['home', 'main']);
    const { formData, setFormData } = useFormData();
    const [ssnOrEin, setSsnOrEin] = useState("");
    const [ten99TotalComp, setTen99TotalComp] = useState("");
    function handleSubmit() {
        setFormData(prevData => ({
            ...prevData,
            ssnOrEin,
            ten99TotalComp
        }));
    }
    return (_jsxs(_Fragment, { children: [_jsx("div", { style: { display: "flex", justifyContent: "center" }, children: _jsx(Button, { type: "button", size: "big", accentStyle: "warm", onClick: goBackToTaxChoice, children: t("goBack", { ns: ['main', 'home'] }) }) }), _jsx(GridContainer, { children: _jsx("div", { style: { backgroundColor: "white", boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", borderRadius: "8px", padding: "2em" }, children: _jsxs(Form, { onSubmit: handleSubmit, children: [_jsxs(Fieldset, { legend: "1099 " + t("form", { ns: ['main', 'home'] }), legendStyle: "large", style: { minWidth: "25vw" }, children: [_jsxs("div", { children: [_jsxs(Label, { htmlFor: "ein", children: [t("socialSecurityEin", { ns: ['main', 'home'] }), ' ', _jsx("abbr", { title: "required", className: "usa-hint usa-hint--required", children: "*" })] }), _jsx("span", { className: "usa-hint", children: "SSN: 123-45-6789 / EIN: 123456789" }), _jsx(TextInput, { id: "ein", name: "ein", type: "text", value: ssnOrEin, onChange: (e) => setSsnOrEin(e.target.value), style: { maxWidth: "20rem" } })] }), _jsxs("div", { children: [_jsxs(Label, { htmlFor: "totalComp", children: [t("totalComp", { ns: ['main', 'home'] }), ' ', _jsx("abbr", { title: "required", className: "usa-hint usa-hint--required", children: "*" })] }), _jsx("span", { className: "usa-hint", children: t("inputValidNumber", { ns: ['main', 'home'] }) }), _jsx(TextInput, { id: "totalComp", name: "totalComp", type: "text", placeholder: "$", value: ten99TotalComp, onChange: (e) => setTen99TotalComp(e.target.value), style: { maxWidth: "15rem" } })] })] }), _jsx("br", {}), _jsx(Button, { type: "button", accentStyle: "cool", onClick: handleSubmit, children: t("submit", { ns: ['main', 'home'] }) })] }) }) })] }));
}
