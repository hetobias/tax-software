// @ts-nocheck
import { Button, GridContainer, StepIndicator, StepIndicatorStep, Table } from "@trussworks/react-uswds";
import HeaderComp from "../components/HeaderComp";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next"
import FooterComp from "../components/FooterComp";
import { useFormData } from "../FormDataContext";
import { useEffect, useState } from "react";
import axios from "axios";

export default function UserPage() {

    const { t, i18n } = useTranslation(['home', 'main']);
    const { formData } = useFormData();
    
    const [matchingUser, setMatchingUsers] = useState(null);

    const fetchAndLogMatchingUser = async () => {
        try {
            const response = await axios.get('http://34.224.85.219:8080/api/users');
            const users = response.data;
    
            // Filter users by EIN
            const matchingUsers = users.filter(user => 
                user.taxInfo && 
                user.taxInfo.w2s && 
                user.taxInfo.w2s.ein === formData.ein
            );
            
            setMatchingUsers(matchingUsers[0]);
    
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
                    <h1 style={{textAlign: "center"}}>Welcome to your User Page!</h1>
                    <br/>
                </GridContainer>
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
                            <th scope="row">{t("firstName", {ns: ['main', 'home']})}</th>
                            <td>{`${matchingUser ? matchingUser.firstName : "Loading..."}`}</td>
                        </tr>
                        <tr>
                            <th scope="row">{t("middleName", {ns: ['main', 'home']})}</th>
                            <td>{`${matchingUser ? matchingUser.middleName : "Loading..."}`}</td>
                        </tr>
                        <tr>
                            <th scope="row">{t("lastName", {ns: ['main', 'home']})}</th>
                            <td>{`${matchingUser ? matchingUser.lastName : "Loading..."}`}</td>
                        </tr>
                        <tr>
                            <th scope="row">{t("streetAddress", {ns: ['main', 'home']})}</th>
                            <td>{`${matchingUser ? matchingUser.address.streetAddress : "Loading..."}`}</td>
                        </tr>
                        <tr>
                            <th scope="row">{t("streetAddress2", {ns: ['main', 'home']})}</th>
                            <td>{`${matchingUser ? matchingUser.address.streetAddress2 : "Loading..."}`}</td>
                        </tr>
                        <tr>
                            <th scope="row">{t("city", {ns: ['main', 'home']})}</th>
                            <td>{`${matchingUser ? matchingUser.address.city : "Loading..."}`}</td>
                        </tr>
                        <tr>
                            <th scope="row">{t("state", {ns: ['main', 'home']})}</th>
                            <td>{`${matchingUser ? matchingUser.address.state : "Loading..."}`}</td>
                        </tr>
                        <tr>
                            <th scope="row">{t("zip", {ns: ['main', 'home']})}</th>
                            <td>{`${matchingUser ? matchingUser.address.zipcode : "Loading..."}`}</td>
                        </tr>
                        <tr>
                            <th scope="row">{t("filingStatus", {ns: ['main', 'home']})}</th>
                            <td>{`${matchingUser ? matchingUser.taxInfo.filingStatus : "Loading..."}`}</td>
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
                            <td>{`${matchingUser ? matchingUser.taxInfo.w2s.ein : "Loading..."}`}</td>
                        </tr>
                        <tr>
                            <th scope="row">{t("wagesTips", {ns: ['main', 'home']})}</th>
                            <td>${`${matchingUser ? matchingUser.taxInfo.w2s.wagesTips : "Loading..."}`}</td>
                        </tr>
                        <tr>
                            <th scope="row">{t("totalComp", {ns: ['main', 'home']})}</th>
                            <td>${`${matchingUser ? matchingUser.taxInfo.w2s.totalComp : "Loading..."}`}</td>
                        </tr>
                        <tr>
                            <th scope="row">{t("ssWithheld", {ns: ['main', 'home']})}</th>
                            <td>${`${matchingUser ? matchingUser.taxInfo.w2s.ssWithheld : "Loading..."}`}</td>
                        </tr>
                        <tr>
                            <th scope="row">{t("medicareWithheld", {ns: ['main', 'home']})}</th>
                            <td>${`${matchingUser ? matchingUser.taxInfo.w2s.medicareWithheld : "Loading..."}`}</td>
                        </tr>
                        <tr>
                            <th scope="row">{t("federalTaxWithheld", {ns: ['main', 'home']})}</th>
                            <td>${`${matchingUser ? matchingUser.taxInfo.w2s.federalTaxWithheld : "Loading..."}`}</td>
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
                            <th scope="row">{t("socialSecurityEin", {ns: ['main', 'home']})}</th>
                            <td>{`${matchingUser ? matchingUser.taxInfo.form1099.ssnOrEin : "Loading..."}`}</td>
                        </tr>
                        <tr>
                            <th scope="row">{t("totalComp", {ns: ['main', 'home']})}</th>
                            <td>${`${matchingUser ? matchingUser.taxInfo.form1099.totalComp : "Loading..."}`}</td>
                        </tr>
                        </tbody>
                    </Table>
                </GridContainer>
                <FooterComp />
        </>
    )
}