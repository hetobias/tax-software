import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
// @ts-nocheck
import { Button, GridContainer, StepIndicator, StepIndicatorStep, Table } from "@trussworks/react-uswds";
import HeaderComp from "../components/HeaderComp";
import { Link } from "react-router-dom";
import FooterComp from "../components/FooterComp";
import { useTranslation } from "react-i18next";
import { useFormData } from "../FormDataContext";
import axios from 'axios';
import { calculateIncomeTax as calculateIncomeTaxHead, calculateSocialSecurityTax as calculateSsTaxHead, calculateMedicareTax as calculateMedicareTaxHead, calculateTotalTax as calculateTotalTaxHead } from '../components/HeadOfHouseholdCalculation';
import { calculateIncomeTaxMarriedJoint, calculateSocialSecurityTaxMarriedJoint, calculateMedicareTaxMarriedJoint, calculateTotalTaxMarriedJoint } from '../components/MarriedJointCalculation';
import { calculateIncomeTaxMarriedSeparate, calculateSocialSecurityTaxMarriedSeparate, calculateMedicareTaxMarriedSeparate, calculateTotalTaxMarriedSeparate } from '../components/MarriedSeparateCalculation';
import { calculateIncomeTaxSingle, calculateSocialSecurityTaxSingle, calculateMedicareTaxSingle, calculateTotalTaxSingle } from '../components/SingleFilingCalculation';
export default function ReviewForm() {
    const { t, i18n } = useTranslation(['home', 'main']);
    const { formData } = useFormData();
    const totalComp = parseInt(formData.ten99TotalComp) + parseInt(formData.w2TotalComp);
    const totalTaxWithheld = parseInt(formData.ssWithheld) + parseInt(formData.medicareWithheld) + parseInt(formData.federalTaxWithheld);
    let federalTax;
    let ssTax;
    let medicareTax;
    let totalTax;
    let ssObligation;
    let medicareObligation;
    let federalTaxObligation;
    let totalObligation;
    let taxReturn = 0;
    let taxOwed = 0;
    let filingStatus;
    if (formData.singleOrMarried == 'single' && formData.isHeadofHousehold) {
        filingStatus = 'Single Head of Household';
        federalTax = calculateIncomeTaxHead(totalComp);
        ssTax = calculateSsTaxHead(totalComp);
        medicareTax = calculateMedicareTaxHead(totalComp);
        totalTax = calculateTotalTaxHead(totalComp);
        ssObligation = ssTax - parseInt(formData.ssWithheld);
        medicareObligation = medicareTax - parseInt(formData.medicareWithheld);
        federalTaxObligation = federalTax - parseInt(formData.federalTaxWithheld);
        totalObligation = ssObligation + medicareObligation + federalTaxObligation;
        if (totalObligation <= 0) {
            taxReturn = Math.abs(totalObligation);
        }
        else {
            taxOwed = totalObligation;
        }
    }
    if (formData.singleOrMarried == 'single' && !formData.isHeadofHousehold) {
        filingStatus = 'Single';
        federalTax = calculateIncomeTaxSingle(totalComp);
        ssTax = calculateSocialSecurityTaxSingle(totalComp);
        medicareTax = calculateMedicareTaxSingle(totalComp);
        totalTax = calculateTotalTaxSingle(totalComp);
        ssObligation = ssTax - parseInt(formData.ssWithheld);
        medicareObligation = medicareTax - parseInt(formData.medicareWithheld);
        federalTaxObligation = federalTax - parseInt(formData.federalTaxWithheld);
        totalObligation = ssObligation + medicareObligation + federalTaxObligation;
        if (totalObligation <= 0) {
            taxReturn = Math.abs(totalObligation);
        }
        else {
            taxOwed = totalObligation;
        }
    }
    if (formData.singleOrMarried == 'married' && formData.jointlyOrSingle == 'single') {
        filingStatus = 'Married Separate Filing';
        federalTax = calculateIncomeTaxMarriedSeparate(totalComp);
        ssTax = calculateSocialSecurityTaxMarriedSeparate(totalComp);
        medicareTax = calculateMedicareTaxMarriedSeparate(totalComp);
        totalTax = calculateTotalTaxMarriedSeparate(totalComp);
        ssObligation = ssTax - parseInt(formData.ssWithheld);
        medicareObligation = medicareTax - parseInt(formData.medicareWithheld);
        federalTaxObligation = federalTax - parseInt(formData.federalTaxWithheld);
        totalObligation = ssObligation + medicareObligation + federalTaxObligation;
        if (totalObligation <= 0) {
            taxReturn = Math.abs(totalObligation);
        }
        else {
            taxOwed = totalObligation;
        }
    }
    if (formData.singleOrMarried == 'married' && formData.jointlyOrSingle == 'joint') {
        filingStatus = 'Married Joint Filing';
        federalTax = calculateIncomeTaxMarriedJoint(totalComp);
        medicareTax = calculateMedicareTaxMarriedJoint(totalComp);
        ssTax = calculateSocialSecurityTaxMarriedJoint(totalComp);
        totalTax = calculateTotalTaxMarriedJoint(totalComp);
        ssObligation = ssTax - parseInt(formData.ssWithheld);
        medicareObligation = medicareTax - parseInt(formData.medicareWithheld);
        federalTaxObligation = federalTax - parseInt(formData.federalTaxWithheld);
        totalObligation = ssObligation + medicareObligation + federalTaxObligation;
        if (totalObligation <= 0) {
            taxReturn = Math.abs(totalObligation);
        }
        else {
            taxOwed = totalObligation;
        }
    }
    //axios post request
    const handleSubmit = async () => {
        try {
            const user = {
                firstName: formData.firstName,
                middleName: formData.middleName,
                lastName: formData.lastName,
                address: {
                    streetAddress: formData.streetAddress,
                    streetAddress2: formData.streetAddress2,
                    city: formData.city,
                    state: formData.state,
                    zipcode: formData.zip
                },
                taxInfo: {
                    filingStatus: filingStatus,
                    form1099: {
                        ssnOrEin: parseInt(formData.ssnOrEin),
                        totalComp: parseInt(formData.ten99TotalComp),
                    },
                    w2s: {
                        ein: parseInt(formData.ein),
                        wagesTips: parseInt(formData.wagesTips),
                        totalComp: parseInt(formData.w2TotalComp),
                        ssWithheld: parseInt(formData.ssWithheld),
                        medicareWithheld: parseInt(formData.medicareWithheld),
                        federalTaxWithheld: parseInt(formData.federalTaxWithheld)
                    }
                },
                calc: {
                    totalWages: totalComp,
                    totalTax: totalTax,
                    ssTaxObligation: ssObligation,
                    medicareTaxObligation: medicareObligation,
                    federalTaxObligation: federalTaxObligation,
                    totalTaxOwed: taxOwed,
                    totalTaxReturn: taxReturn
                }
            };
            const response = await axios.post('http://34.224.85.219:8080/api/users', user);
            console.log(response.data);
        }
        catch (error) {
            console.error("Error submitting the data:", error);
        }
    };
    console.log(`ss obligation: ${ssObligation}
                 medicare obligation: ${medicareObligation}
                 federal obligation: ${federalTaxObligation}
                 medicare tax: ${medicareTax}
                 federal tax: ${federalTax}
                 ss tax: ${ssTax}
                 tax return: ${taxReturn} 
                 tax owed: ${taxOwed}
                 total tax: ${totalTax}`);
    return (_jsxs(_Fragment, { children: [_jsx(HeaderComp, {}), _jsx("br", {}), _jsxs(GridContainer, { children: [_jsx("div", { style: { minWidth: "60vw" }, children: _jsxs(StepIndicator, { counters: "default", headingLevel: "h4", children: [_jsx(StepIndicatorStep, { label: t("personalInfo", { ns: ['main', 'home'] }), status: "complete" }), _jsx(StepIndicatorStep, { label: t("householdStatus", { ns: ['main', 'home'] }), status: "complete" }), _jsx(StepIndicatorStep, { label: t("householdIncome", { ns: ['main', 'home'] }), status: "complete" }), _jsx(StepIndicatorStep, { label: t("reviewSubmit", { ns: ['main', 'home'] }), status: "current" }), _jsx(StepIndicatorStep, { label: t("taxEstimate", { ns: ['main', 'home'] }) })] }) }), _jsx("h2", { children: t("pleaseReviewInfo", { ns: ['main', 'home'] }) }), _jsx("br", {}), _jsx(GridContainer, { children: _jsxs(Table, { striped: true, caption: t("personalInfo", { ns: ['main', 'home'] }) + " & " + t("filingStatus", { ns: ['main', 'home'] }), fullWidth: true, fixed: true, className: "bg-accent-cool-light", children: [_jsx("thead", { children: _jsxs("tr", { children: [_jsx("th", { scope: "col", children: t("fields", { ns: ['main', 'home'] }) }), _jsx("th", { scope: "col", children: t("infoInput", { ns: ['main', 'home'] }) })] }) }), _jsxs("tbody", { children: [_jsxs("tr", { children: [_jsx("th", { scope: "row", children: t("fullName", { ns: ['main', 'home'] }) }), _jsx("td", { children: `${formData.firstName} ${formData.middleName} ${formData.lastName}` })] }), _jsxs("tr", { children: [_jsx("th", { scope: "row", children: t("address", { ns: ['main', 'home'] }) }), _jsx("td", { children: `${formData.streetAddress}, ${formData.streetAddress2}, ${formData.city}, ${formData.state} ${formData.zip}` })] }), _jsxs("tr", { children: [_jsx("th", { scope: "row", children: t("filingStatus", { ns: ['main', 'home'] }) }), _jsx("td", { children: formData.singleOrMarried })] }), _jsxs("tr", { children: [_jsx("th", { scope: "row", children: t("headOfHousehold", { ns: ['main', 'home'] }) }), _jsx("td", { children: formData.isHeadofHousehold ? "Yes" : "No" })] })] })] }) }), _jsx("br", {}), _jsx("br", {}), _jsx(GridContainer, { children: _jsxs(Table, { striped: true, caption: "W2 " + t("form", { ns: ['main', 'home'] }), fullWidth: true, fixed: true, className: "bg-accent-warm-light", children: [_jsx("thead", { children: _jsxs("tr", { children: [_jsx("th", { scope: "col", children: t("fields", { ns: ['main', 'home'] }) }), _jsx("th", { scope: "col", children: t("infoInput", { ns: ['main', 'home'] }) })] }) }), _jsxs("tbody", { children: [_jsxs("tr", { children: [_jsx("th", { scope: "row", children: "EIN" }), _jsx("td", { children: formData.ein })] }), _jsxs("tr", { children: [_jsx("th", { scope: "row", children: t("wagesTips", { ns: ['main', 'home'] }) }), _jsxs("td", { children: ["$", formData.wagesTips] })] }), _jsxs("tr", { children: [_jsx("th", { scope: "row", children: t("totalComp", { ns: ['main', 'home'] }) }), _jsxs("td", { children: ["$", formData.w2TotalComp] })] }), _jsxs("tr", { children: [_jsx("th", { scope: "row", children: t("ssWithheld", { ns: ['main', 'home'] }) }), _jsxs("td", { children: ["$", formData.ssWithheld] })] }), _jsxs("tr", { children: [_jsx("th", { scope: "row", children: t("medicareWithheld", { ns: ['main', 'home'] }) }), _jsxs("td", { children: ["$", formData.medicareWithheld] })] }), _jsxs("tr", { children: [_jsx("th", { scope: "row", children: t("federalTaxWithheld", { ns: ['main', 'home'] }) }), _jsxs("td", { children: ["$", formData.federalTaxWithheld] })] })] })] }) }), _jsx("br", {}), _jsx("br", {}), _jsx(GridContainer, { children: _jsxs(Table, { striped: true, caption: "1099 " + t("form", { ns: ['main', 'home'] }), fullWidth: true, fixed: true, className: "bg-accent-warm", children: [_jsx("thead", { children: _jsxs("tr", { children: [_jsx("th", { scope: "col", children: t("fields", { ns: ['main', 'home'] }) }), _jsx("th", { scope: "col", children: t("infoInput", { ns: ['main', 'home'] }) })] }) }), _jsxs("tbody", { children: [_jsxs("tr", { children: [_jsx("th", { scope: "row", children: t("socialSecurityEin", { ns: ['main', 'home'] }) }), _jsx("td", { children: formData.ssnOrEin })] }), _jsxs("tr", { children: [_jsx("th", { scope: "row", children: t("totalComp", { ns: ['main', 'home'] }) }), _jsxs("td", { children: ["$", formData.ten99TotalComp] })] })] })] }) }), _jsx("br", {}), _jsx("br", {}), _jsx(Link, { to: "/household_income", children: _jsx(Button, { type: "button", size: "big", style: { textAlign: "left" }, children: t("back", { ns: ['main', 'home'] }) }) }), _jsx(Link, { to: "/tax_estimate", children: _jsx(Button, { type: "button", size: "big", onClick: handleSubmit, style: { float: "right" }, children: t("getTaxEstimate", { ns: ['main', 'home'] }) }) })] }), _jsx(FooterComp, {})] }));
}
