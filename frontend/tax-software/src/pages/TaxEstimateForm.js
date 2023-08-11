import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
// @ts-nocheck
import { Button, GridContainer, StepIndicator, StepIndicatorStep, Table } from "@trussworks/react-uswds";
import HeaderComp from "../components/HeaderComp";
import { Link } from "react-router-dom";
import FooterComp from "../components/FooterComp";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { useFormData } from "../FormDataContext";
import axios from 'axios';
export default function TaxEstimateForm() {
    const { t, i18n } = useTranslation(['home', 'main']);
    const { formData } = useFormData();
    const [matchingUser, setMatchingUsers] = useState(null);
    console.log(formData.ein);
    const fetchAndLogMatchingUser = async () => {
        try {
            const response = await axios.get('http://34.224.85.219:8080/api/users');
            const users = response.data;
            // Filter users by EIN
            const matchingUsers = users.filter(user => user.taxInfo &&
                user.taxInfo.w2s &&
                user.taxInfo.w2s.ein === formData.ein);
            setMatchingUsers(matchingUsers[0]);
        }
        catch (error) {
            console.error("There was an error fetching the users:", error);
        }
    };
    useEffect(() => {
        // Fetch and log matching user when the component mounts
        fetchAndLogMatchingUser();
    }, []); // Empty dependency array ensures this useEffect runs once when the component mounts
    return (_jsxs(_Fragment, { children: [_jsx(HeaderComp, {}), _jsx("br", {}), _jsxs(GridContainer, { children: [_jsx("div", { style: { minWidth: "60vw" }, children: _jsxs(StepIndicator, { counters: "default", headingLevel: "h4", children: [_jsx(StepIndicatorStep, { label: t("personalInfo", { ns: ['main', 'home'] }), status: "complete" }), _jsx(StepIndicatorStep, { label: t("householdStatus", { ns: ['main', 'home'] }), status: "complete" }), _jsx(StepIndicatorStep, { label: t("householdIncome", { ns: ['main', 'home'] }), status: "complete" }), _jsx(StepIndicatorStep, { label: t("reviewSubmit", { ns: ['main', 'home'] }), status: "complete" }), _jsx(StepIndicatorStep, { label: t("taxEstimate", { ns: ['main', 'home'] }), status: "current" })] }) }), _jsxs(GridContainer, { children: [_jsx("h2", { style: { textAlign: "center" }, children: t("taxEstimateHere", { ns: ['main', 'home'] }) }), _jsx("br", {}), _jsx("div", { style: { backgroundColor: "white", boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", borderRadius: "8px", padding: "2em" }, children: _jsx(GridContainer, { children: _jsxs(Table, { striped: true, fullWidth: true, fixed: true, className: "bg-accent-cool-light", children: [_jsx("thead", { children: _jsxs("tr", { children: [_jsx("th", { scope: "col", children: "-" }), _jsx("th", { scope: "col", children: "-" })] }) }), _jsxs("tbody", { children: [_jsxs("tr", { children: [_jsx("th", { scope: "row", children: t("totalWageEarned", { ns: ['main', 'home'] }) }), _jsxs("td", { children: ["$", matchingUser && matchingUser.calc ? matchingUser.calc.totalWages.toFixed(2) : "Loading..."] })] }), _jsxs("tr", { children: [_jsx("th", { scope: "row", children: t("totalTax", { ns: ['main', 'home'] }) }), _jsxs("td", { children: ["$", matchingUser && matchingUser.calc ? matchingUser.calc.totalTax.toFixed(2) : "Loading..."] })] }), _jsxs("tr", { children: [_jsx("th", { scope: "row", children: t("ssObligation", { ns: ['main', 'home'] }) }), _jsxs("td", { children: ["$", matchingUser && matchingUser.calc ? matchingUser.calc.ssTaxObligation.toFixed(2) : "Loading..."] })] }), _jsxs("tr", { children: [_jsx("th", { scope: "row", children: t("medicareObligation", { ns: ['main', 'home'] }) }), _jsxs("td", { children: ["$", matchingUser && matchingUser.calc ? matchingUser.calc.medicareTaxObligation.toFixed(2) : "Loading..."] })] }), _jsxs("tr", { children: [_jsx("th", { scope: "row", children: t("taxObligation", { ns: ['main', 'home'] }) }), _jsxs("td", { children: ["$", matchingUser && matchingUser.calc ? matchingUser.calc.federalTaxObligation.toFixed(2) : "Loading..."] })] }), _jsxs("tr", { children: [_jsx("th", { scope: "row", children: t("totalTaxOwed", { ns: ['main', 'home'] }) }), _jsxs("td", { children: ["$", matchingUser && matchingUser.calc ? matchingUser.calc.totalTaxOwed.toFixed(2) : "Loading..."] })] }), _jsxs("tr", { children: [_jsx("th", { scope: "row", children: t("totalTaxReturn", { ns: ['main', 'home'] }) }), _jsxs("td", { children: ["$", matchingUser && matchingUser.calc ? matchingUser.calc.totalTaxReturn.toFixed(2) : "Loading..."] })] })] })] }) }) })] }), _jsx("br", {}), _jsx("br", {}), _jsx("div", { style: { textAlign: "center" }, children: _jsx(Link, { to: "/user", children: _jsx(Button, { type: "button", size: "big", children: t("backToUser", { ns: ['main', 'home'] }) }) }) })] }), _jsx(FooterComp, {})] }));
}
