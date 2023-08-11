import { Button, Fieldset, GridContainer, StepIndicator, StepIndicatorStep, Table } from "@trussworks/react-uswds";
import HeaderComp from "../components/HeaderComp";
import { Link } from "react-router-dom";
import FooterComp from "../components/FooterComp";
import { useTranslation } from "react-i18next"
import { useFormData } from "../FormDataContext";
import axios from 'axios';

import {
    calculateIncomeTax as calculateIncomeTaxHead,
    calculateSocialSecurityTax as calculateSsTaxHead,
    calculateMedicareTax as calculateMedicareTaxHead,
    calculateTotalTax as calculateTotalTaxHead
  } from '../components/HeadOfHouseholdCalculation';

import { 
    calculateIncomeTaxMarriedJoint,
    calculateSocialSecurityTaxMarriedJoint,
    calculateMedicareTaxMarriedJoint,
    calculateTotalTaxMarriedJoint
} from '../components/MarriedJointCalculation';

import { 
    calculateIncomeTaxMarriedSeparate,
    calculateSocialSecurityTaxMarriedSeparate,
    calculateMedicareTaxMarriedSeparate,
    calculateTotalTaxMarriedSeparate
} from '../components/MarriedSeparateCalculation';

import { 
    calculateIncomeTaxSingle,
    calculateSocialSecurityTaxSingle,
    calculateMedicareTaxSingle,
    calculateTotalTaxSingle
} from '../components/SingleFilingCalculation';


  

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

    if(formData.singleOrMarried == 'single' && formData.isHeadofHousehold){
        filingStatus = 'Single Head of Household';
        federalTax = calculateIncomeTaxHead(totalComp);
        ssTax = calculateSsTaxHead(totalComp);
        medicareTax = calculateMedicareTaxHead(totalComp);
        totalTax = calculateTotalTaxHead(totalComp);

        ssObligation = ssTax - parseInt(formData.ssWithheld);
        medicareObligation = medicareTax - parseInt(formData.medicareWithheld);
        federalTaxObligation = federalTax - parseInt(formData.federalTaxWithheld);

        totalObligation = ssObligation + medicareObligation + federalTaxObligation;

        if(totalObligation <= 0) {
             taxReturn = Math.abs(totalObligation);
        } else {
             taxOwed = totalObligation;
        }
       
    }

    if(formData.singleOrMarried == 'single' && !formData.isHeadofHousehold){
        filingStatus = 'Single';
        federalTax = calculateIncomeTaxSingle(totalComp);
        ssTax = calculateSocialSecurityTaxSingle(totalComp);
        medicareTax = calculateMedicareTaxSingle(totalComp);
        totalTax = calculateTotalTaxSingle(totalComp);

        ssObligation = ssTax - parseInt(formData.ssWithheld);
        medicareObligation = medicareTax - parseInt(formData.medicareWithheld);
        federalTaxObligation = federalTax - parseInt(formData.federalTaxWithheld);

        totalObligation = ssObligation + medicareObligation + federalTaxObligation;

       if(totalObligation <= 0) {
            taxReturn = Math.abs(totalObligation);
       } else {
            taxOwed = totalObligation;
       }
    }

    if(formData.singleOrMarried == 'married' && formData.jointlyOrSingle == 'single'){
        filingStatus = 'Married Separate Filing';
        federalTax = calculateIncomeTaxMarriedSeparate(totalComp);
        ssTax = calculateSocialSecurityTaxMarriedSeparate(totalComp);
        medicareTax = calculateMedicareTaxMarriedSeparate(totalComp);
        totalTax = calculateTotalTaxMarriedSeparate(totalComp);

        ssObligation = ssTax - parseInt(formData.ssWithheld);
        medicareObligation = medicareTax - parseInt(formData.medicareWithheld);
        federalTaxObligation = federalTax - parseInt(formData.federalTaxWithheld);

        totalObligation = ssObligation + medicareObligation + federalTaxObligation;

       if(totalObligation <= 0) {
            taxReturn = Math.abs(totalObligation);
       } else {
            taxOwed = totalObligation;
       }
    }

    if(formData.singleOrMarried == 'married' && formData.jointlyOrSingle == 'joint'){
        filingStatus = 'Married Joint Filing';
        federalTax = calculateIncomeTaxMarriedJoint(totalComp);
        medicareTax = calculateMedicareTaxMarriedJoint(totalComp);
        ssTax = calculateSocialSecurityTaxMarriedJoint(totalComp);
        totalTax = calculateTotalTaxMarriedJoint(totalComp);

        ssObligation = ssTax - parseInt(formData.ssWithheld);
        medicareObligation = medicareTax - parseInt(formData.medicareWithheld);
        federalTaxObligation = federalTax - parseInt(formData.federalTaxWithheld);

        totalObligation = ssObligation + medicareObligation + federalTaxObligation;

       if(totalObligation <= 0) {
            taxReturn = Math.abs(totalObligation);
       } else {
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
    
            const response = await axios.post('http://localhost:8080/api/users', user);
            console.log(response.data);
        } catch (error) {
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

    return (
        <>
            <HeaderComp />
            <br/>
            <GridContainer>
                <div style={{ minWidth: "60vw"}}>
                    <StepIndicator counters="default" headingLevel="h4">
                        <StepIndicatorStep label={t("personalInfo", {ns: ['main', 'home']})} status="complete" />
                        <StepIndicatorStep label={t("householdStatus", {ns: ['main', 'home']})} status="complete" />
                        <StepIndicatorStep label={t("householdIncome", {ns: ['main', 'home']})} status="complete" />
                        <StepIndicatorStep label={t("reviewSubmit", {ns: ['main', 'home']})} status="current" />
                        <StepIndicatorStep label={t("taxEstimate", {ns: ['main', 'home']})} />
                    </StepIndicator>
                </div>

                <h2>{t("pleaseReviewInfo", {ns: ['main', 'home']})}</h2>

                <br/>
                <GridContainer>
                    <Table
                        striped
                        caption={t("personalInfo", {ns: ['main', 'home']}) + " & " + t("filingStatus", {ns: ['main', 'home']})}
                        fullWidth
                        fixed
                        className="bg-accent-cool-light"
                        >
                        <thead>
                        <tr>
                            <th scope="col">{t("fields", {ns: ['main', 'home']})}</th>
                            <th scope="col">{t("infoInput", {ns: ['main', 'home']})}</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th scope="row">{t("fullName", {ns: ['main', 'home']})}</th>
                            <td>{`${formData.firstName} ${formData.middleName} ${formData.lastName}`}</td>
                        </tr>
                        <tr>
                            <th scope="row">{t("address", {ns: ['main', 'home']})}</th>
                            <td>{`${formData.streetAddress}, ${formData.streetAddress2}, ${formData.city}, ${formData.state} ${formData.zip}`}</td>
                        </tr>
                        <tr>
                            <th scope="row">{t("filingStatus", {ns: ['main', 'home']})}</th>
                            <td>{formData.singleOrMarried}</td>
                        </tr>
                        <tr>
                            <th scope="row">{t("headOfHousehold", {ns: ['main', 'home']})}</th>
                            <td>{formData.isHeadofHousehold ? "Yes" : "No"}</td>
                        </tr>
                        </tbody>
                    </Table>
                </GridContainer>
                <br/>

                <br/>
                <GridContainer>
                    <Table
                        striped
                        caption={ "W2 " + t("form", {ns: ['main', 'home']})}
                        fullWidth
                        fixed
                        className="bg-accent-warm-light"
                        >
                        <thead>
                        <tr>
                            <th scope="col">{t("fields", {ns: ['main', 'home']})}</th>
                            <th scope="col">{t("infoInput", {ns: ['main', 'home']})}</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th scope="row">EIN</th>
                            <td>{formData.ein}</td>
                        </tr>
                        <tr>
                            <th scope="row">{t("wagesTips", {ns: ['main', 'home']})}</th>
                            <td>${formData.wagesTips}</td>
                        </tr>
                        <tr>
                            <th scope="row">{t("totalComp", {ns: ['main', 'home']})}</th>
                            <td>${formData.w2TotalComp}</td>
                        </tr>
                        <tr>
                            <th scope="row">{t("ssWithheld", {ns: ['main', 'home']})}</th>
                            <td>${formData.ssWithheld}</td>
                        </tr>
                        <tr>
                            <th scope="row">{t("medicareWithheld", {ns: ['main', 'home']})}</th>
                            <td>${formData.medicareWithheld}</td>
                        </tr>
                        <tr>
                            <th scope="row">{t("federalTaxWithheld", {ns: ['main', 'home']})}</th>
                            <td>${formData.federalTaxWithheld}</td>
                        </tr>
                        </tbody>
                    </Table>
                </GridContainer>
                <br/>

                <br/>
                <GridContainer>
                    <Table
                        striped
                        caption={ "1099 " + t("form", {ns: ['main', 'home']})}
                        fullWidth
                        fixed
                        className="bg-accent-warm"
                        >
                        <thead>
                        <tr>
                            <th scope="col">{t("fields", {ns: ['main', 'home']})}</th>
                            <th scope="col">{t("infoInput", {ns: ['main', 'home']})}</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th scope="row">Social Security Number / EIN</th>
                            <td>{formData.ssnOrEin}</td>
                        </tr>
                        <tr>
                            <th scope="row">{t("totalComp", {ns: ['main', 'home']})}</th>
                            <td>${formData.ten99TotalComp}</td>
                        </tr>
                        </tbody>
                    </Table>
                </GridContainer>
                <br/><br/>

                <Link to={"/household_income"}><Button type="button" size="big" style={{textAlign: "left"}}>{t("back", {ns: ['main', 'home']})}</Button></Link>
                <Link to={"/tax_estimate"}><Button type="button" size="big" onClick={handleSubmit} style={{float: "right"}}>{t("getTaxEstimate", {ns: ['main', 'home']})}</Button></Link>
            </GridContainer>
            <FooterComp />
        </>
    )
}