import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
// @ts-nocheck
import { Button, GridContainer, StepIndicator, StepIndicatorStep } from "@trussworks/react-uswds";
import HeaderComp from "../components/HeaderComp";
import FilingStatusForm from "../components/FilingStatusForm";
import FooterComp from "../components/FooterComp";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { useFormData } from "../FormDataContext";
export default function HouseholdStatusForm() {
    const { t, i18n } = useTranslation(['home', 'main']);
    const { formData, setFormData } = useFormData();
    const [singleOrMarried, setSingleOrMarried] = useState("");
    const [jointlyOrSingle, setJointlyOrSingle] = useState("");
    const [isHeadofHousehold, setIsHeadofHousehold] = useState(false);
    const [hasDependent, setHasDependent] = useState(false);
    const [dependentInputValue, setDependentInputValue] = useState("");
    const handleSubmit = () => {
        setFormData(prevData => ({
            ...prevData,
            singleOrMarried,
            jointlyOrSingle,
            isHeadofHousehold,
            hasDependent,
            dependentInputValue
        }));
    };
    return (_jsxs(_Fragment, { children: [_jsx(HeaderComp, {}), _jsx("br", {}), _jsx(GridContainer, { children: _jsx("div", { style: { minWidth: "60vw" }, children: _jsxs(StepIndicator, { counters: "default", headingLevel: "h4", children: [_jsx(StepIndicatorStep, { label: t("personalInfo", { ns: ['main', 'home'] }), status: "complete" }), _jsx(StepIndicatorStep, { label: t("householdStatus", { ns: ['main', 'home'] }), status: "current" }), _jsx(StepIndicatorStep, { label: t("householdIncome", { ns: ['main', 'home'] }) }), _jsx(StepIndicatorStep, { label: t("reviewSubmit", { ns: ['main', 'home'] }) }), _jsx(StepIndicatorStep, { label: t("taxEstimate", { ns: ['main', 'home'] }) })] }) }) }), _jsx(FilingStatusForm, { singleOrMarried: singleOrMarried, setSingleOrMarried: setSingleOrMarried, jointlyOrSingle: jointlyOrSingle, setJointlyOrSingle: setJointlyOrSingle, isHeadofHousehold: isHeadofHousehold, setIsHeadofHousehold: setIsHeadofHousehold, hasDependent: hasDependent, setHasDependent: setHasDependent, dependentInputValue: dependentInputValue, setDependentInputValue: setDependentInputValue }), _jsx("br", {}), _jsxs(GridContainer, { children: [_jsx(Link, { to: "/personal_information", children: _jsx(Button, { type: "button", size: "big", style: { textAlign: "left" }, children: t("back", { ns: ['main', 'home'] }) }) }), _jsx(Link, { to: "/household_income", onClick: handleSubmit, children: _jsx(Button, { type: "button", size: "big", style: { float: "right" }, children: t("submitAndNext", { ns: ['main', 'home'] }) }) })] }), _jsx(FooterComp, {})] }));
}
