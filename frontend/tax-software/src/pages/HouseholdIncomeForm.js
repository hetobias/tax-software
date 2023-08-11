import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
// @ts-nocheck
import { Button, GridContainer, StepIndicator, StepIndicatorStep } from "@trussworks/react-uswds";
import HeaderComp from "../components/HeaderComp";
import { Link } from "react-router-dom";
import FooterComp from "../components/FooterComp";
import TaxChoice from "../components/TaxChoice";
import { useState } from "react";
import FormW2 from "../components/FormW2";
import Form1099 from "../components/Form1099";
import { useTranslation } from "react-i18next";
export default function HouseholdIncomeForm() {
    const { t, i18n } = useTranslation(['home', 'main']);
    const [selectedTaxChoice, setSelectedTaxChoice] = useState(null);
    const handleTaxChoice = (choice) => {
        setSelectedTaxChoice(choice);
    };
    const goBackToTaxChoice = () => {
        setSelectedTaxChoice(null);
    };
    return (_jsxs(_Fragment, { children: [_jsx(HeaderComp, {}), _jsx("br", {}), _jsx(GridContainer, { children: _jsx("div", { style: { minWidth: "60vw" }, children: _jsxs(StepIndicator, { counters: "default", headingLevel: "h4", children: [_jsx(StepIndicatorStep, { label: t("personalInfo", { ns: ['main', 'home'] }), status: "complete" }), _jsx(StepIndicatorStep, { label: t("householdStatus", { ns: ['main', 'home'] }), status: "complete" }), _jsx(StepIndicatorStep, { label: t("householdIncome", { ns: ['main', 'home'] }), status: "current" }), _jsx(StepIndicatorStep, { label: t("reviewSubmit", { ns: ['main', 'home'] }) }), _jsx(StepIndicatorStep, { label: t("taxEstimate", { ns: ['main', 'home'] }) })] }) }) }), selectedTaxChoice === null ? (_jsx(TaxChoice, { onTaxChoice: handleTaxChoice })) : selectedTaxChoice === "w2" ? (_jsx(FormW2, { goBackToTaxChoice: goBackToTaxChoice })) : (_jsx(Form1099, { goBackToTaxChoice: goBackToTaxChoice })), _jsx("br", {}), _jsxs(GridContainer, { children: [_jsx(Link, { to: "/household_status", children: _jsx(Button, { type: "button", size: "big", style: { textAlign: "left" }, children: t("back", { ns: ['main', 'home'] }) }) }), _jsx(Link, { to: "/review", children: _jsx(Button, { type: "button", size: "big", style: { float: "right" }, children: t("next", { ns: ['main', 'home'] }) }) })] }), _jsx(FooterComp, {})] }));
}
