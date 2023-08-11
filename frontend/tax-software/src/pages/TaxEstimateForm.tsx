import { Button, GridContainer, StepIndicator, StepIndicatorStep, Table } from "@trussworks/react-uswds";
import HeaderComp from "../components/HeaderComp";
import { Link } from "react-router-dom";
import FooterComp from "../components/FooterComp";
import { useTranslation } from "react-i18next"
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
            const response = await axios.get('http://localhost:8080/api/users');
            const users = response.data;
    
            // Filter users by EIN
            const matchingUsers = users.filter(user => 
                user.taxInfo && 
                user.taxInfo.w2s && 
                user.taxInfo.w2s.ein === formData.ein
            );
            
            setMatchingUsers(matchingUsers[0]);
            console.log(matchingUsers[0].calc);
    
        } catch (error) {
            console.error("There was an error fetching the users:", error);
        }
    }

    useEffect(() => {
        // Fetch and log matching user when the component mounts
        fetchAndLogMatchingUser();
    }, []);  // Empty dependency array ensures this useEffect runs once when the component mounts

    
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
                        <StepIndicatorStep label={t("reviewSubmit", {ns: ['main', 'home']})} status="complete" />
                        <StepIndicatorStep label={t("taxEstimate", {ns: ['main', 'home']})} status="current" />
                    </StepIndicator>
                </div>

                <GridContainer>
                    <h2 style={{textAlign: "center"}}>{t("taxEstimateHere", {ns: ['main', 'home']})}</h2>
                    <br/>
                    <div style={{backgroundColor: "white", boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", borderRadius: "8px", padding: "2em"}}>
                        <GridContainer>
                            <Table
                                striped
                                fullWidth
                                fixed
                                className="bg-accent-cool-light"
                                >
                                <thead>
                                <tr>
                                    <th scope="col">-</th>
                                    <th scope="col">-</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <th scope="row">{t("totalWageEarned", {ns: ['main', 'home']})}</th>
                                    <td>${matchingUser && matchingUser.calc ? matchingUser.calc.totalWages.toFixed(2) : "Loading..."}</td>
                                </tr>
                                <tr>
                                    <th scope="row">{t("totalTax", {ns: ['main', 'home']})}</th>
                                    <td>${matchingUser && matchingUser.calc ? matchingUser.calc.totalTax.toFixed(2) : "Loading..."}</td>
                                </tr>
                                <tr>
                                    <th scope="row">{t("ssObligation", {ns: ['main', 'home']})}</th>
                                    <td>${matchingUser && matchingUser.calc ? matchingUser.calc.ssTaxObligation.toFixed(2) : "Loading..."}</td>
                                </tr>
                                <tr>
                                    <th scope="row">{t("medicareObligation", {ns: ['main', 'home']})}</th>
                                    <td>${matchingUser && matchingUser.calc ? matchingUser.calc.medicareTaxObligation.toFixed(2) :"Loading..."}</td>
                                </tr>
                                <tr>
                                    <th scope="row">{t("taxObligation", {ns: ['main', 'home']})}</th>
                                    <td>${matchingUser && matchingUser.calc ? matchingUser.calc.federalTaxObligation.toFixed(2) : "Loading..."}</td>
                                </tr>
                                <tr>
                                    <th scope="row">{t("totalTaxOwed", {ns: ['main', 'home']})}</th>
                                    <td>${matchingUser && matchingUser.calc ? matchingUser.calc.totalTaxOwed.toFixed(2) : "Loading..."}</td>
                                </tr>
                                <tr>
                                    <th scope="row">{t("totalTaxReturn", {ns: ['main', 'home']})}</th>
                                    <td>${matchingUser && matchingUser.calc ? matchingUser.calc.totalTaxReturn.toFixed(2) : "Loading..."}</td>
                                </tr>
                                </tbody>
                            </Table>
                        </GridContainer>
                    </div>
                </GridContainer>
                <br/><br/>
                <div style={{textAlign: "center"}}>
                    <Link to={"/user"}><Button type="button" size="big">{t("backToUser", {ns: ['main', 'home']})}</Button></Link>
                </div>
            </GridContainer>
            <FooterComp />
        </>
    )
}