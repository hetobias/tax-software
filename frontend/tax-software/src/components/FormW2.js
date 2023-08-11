import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
// @ts-nocheck
import { Button, Fieldset, Form, GridContainer, Label, TextInput } from "@trussworks/react-uswds";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useFormData } from "../FormDataContext";
export default function FormW2({ goBackToTaxChoice }) {
    const { t, i18n } = useTranslation(['home', 'main']);
    const { formData, setFormData } = useFormData();
    const [ein, setEin] = useState("");
    const [wagesTips, setWagesTips] = useState("");
    const [w2TotalComp, setW2TotalComp] = useState("");
    const [ssWithheld, setSsWithheld] = useState("");
    const [medicareWithheld, setMedicareWithheld] = useState("");
    const [federalTaxWithheld, setFederalTaxWithheld] = useState("");
    function handleSubmit() {
        setFormData(prevData => ({
            ...prevData,
            ein,
            wagesTips,
            w2TotalComp,
            ssWithheld,
            medicareWithheld,
            federalTaxWithheld
        }));
    }
    return (_jsxs(_Fragment, { children: [_jsx("div", { style: { display: "flex", justifyContent: "center" }, children: _jsx(Button, { type: "button", size: "big", accentStyle: "warm", onClick: goBackToTaxChoice, children: t("goBack", { ns: ['main', 'home'] }) }) }), _jsx(GridContainer, { children: _jsx("div", { style: { backgroundColor: "white", boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", borderRadius: "8px", padding: "2em" }, children: _jsxs(Form, { onSubmit: handleSubmit, children: [_jsxs(Fieldset, { legend: "W2 " + t("form", { ns: ['main', 'home'] }), legendStyle: "large", style: { minWidth: "25vw" }, children: [_jsxs("div", { children: [_jsxs(Label, { htmlFor: "ein", children: ["EIN", ' ', _jsx("abbr", { title: "required", className: "usa-hint usa-hint--required", children: "*" })] }), _jsx("span", { className: "usa-hint", children: t("forExample", { ns: ['main', 'home'] }) + "123456789" }), _jsx(TextInput, { id: "ein", name: "ein", type: "text", value: ein, onChange: (e) => setEin(e.target.value), style: { maxWidth: "20rem" } })] }), _jsxs("div", { children: [_jsx(Label, { htmlFor: "wagesTips", children: t("wagesTips", { ns: ['main', 'home'] }) }), _jsx("span", { className: "usa-hint", children: t("inputValidNumber", { ns: ['main', 'home'] }) }), _jsx(TextInput, { id: "wagesTips", name: "wagesTips", type: "text", placeholder: "$", value: wagesTips, onChange: (e) => setWagesTips(e.target.value), style: { maxWidth: "15rem" } })] }), _jsxs("div", { children: [_jsxs(Label, { htmlFor: "totalComp", children: [t("totalComp", { ns: ['main', 'home'] }), ' ', _jsx("abbr", { title: "required", className: "usa-hint usa-hint--required", children: "*" })] }), _jsx("span", { className: "usa-hint", children: t("inputValidNumber", { ns: ['main', 'home'] }) }), _jsx(TextInput, { id: "totalComp", name: "totalComp", type: "text", placeholder: "$", value: w2TotalComp, onChange: (e) => setW2TotalComp(e.target.value), style: { maxWidth: "15rem" } })] }), _jsxs("div", { children: [_jsxs(Label, { htmlFor: "ssWithheld", children: [t("ssWithheld", { ns: ['main', 'home'] }), ' ', _jsx("abbr", { title: "required", className: "usa-hint usa-hint--required", children: "*" })] }), _jsx("span", { className: "usa-hint", children: t("inputValidNumber", { ns: ['main', 'home'] }) }), _jsx(TextInput, { id: "ssWithheld", name: "ssWithheld", type: "text", placeholder: "$", value: ssWithheld, onChange: (e) => setSsWithheld(e.target.value), style: { maxWidth: "15rem" } })] }), _jsxs("div", { children: [_jsxs(Label, { htmlFor: "medicareWithheld", children: [t("medicareWithheld", { ns: ['main', 'home'] }), ' ', _jsx("abbr", { title: "required", className: "usa-hint usa-hint--required", children: "*" })] }), _jsx("span", { className: "usa-hint", children: t("inputValidNumber", { ns: ['main', 'home'] }) }), _jsx(TextInput, { id: "medicareWithheld", name: "medicareWithheld", type: "text", placeholder: "$", value: medicareWithheld, onChange: (e) => setMedicareWithheld(e.target.value), style: { maxWidth: "15rem" } })] }), _jsxs("div", { children: [_jsxs(Label, { htmlFor: "federalTaxtotalComp", children: [t("federalTaxtotalComp", { ns: ['main', 'home'] }), ' ', _jsx("abbr", { title: "required", className: "usa-hint usa-hint--required", children: "*" })] }), _jsx("span", { className: "usa-hint", children: t("inputValidNumber", { ns: ['main', 'home'] }) }), _jsx(TextInput, { id: "federalTaxtotalComp", name: "federalTaxtotalComp", type: "text", placeholder: "$", value: federalTaxWithheld, onChange: (e) => setFederalTaxWithheld(e.target.value), style: { maxWidth: "15rem" } })] })] }), _jsx("br", {}), _jsx(Button, { type: "button", accentStyle: "cool", onClick: handleSubmit, children: t("submit", { ns: ['main', 'home'] }) })] }) }) })] }));
}
