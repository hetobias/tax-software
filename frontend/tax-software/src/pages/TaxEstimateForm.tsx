import { Button, GridContainer, StepIndicator, StepIndicatorStep, Table } from "@trussworks/react-uswds";
import HeaderComp from "../components/HeaderComp";
import { Link } from "react-router-dom";
import FooterComp from "../components/FooterComp";
import { useTranslation } from "react-i18next"
import { useState } from "react";
import HeadOfHouseholdCalculation from "../components/HeadOfHouseholdCalculation";
import SingleFilingCalculation from "../components/SingleFilingCalculation";
import MarriedSeparateCalculation from "../components/MarriedSeparateCalculation";
import MarriedJointCalculation from "../components/MarriedJointCalculation";

export default function TaxEstimateForm() {

    const { t, i18n } = useTranslation(['home', 'main']);

    const [totalWageEarned, setTotalWageEarned] = useState<number>(0);
    const [totalTax, setTotalTax] = useState<number>(0);
    const [ssObligation, setSsObligation] = useState<number>(0);
    const [medicareObligation, setMedicareObligation] = useState<number>(0);
    const [taxObligation, setTaxObligation] = useState<number>(0);
    const [totalTaxReturn, setTotalTaxReturn] = useState<number>(0);
    

    
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
                                    <td>$ {totalWageEarned.toFixed(2)}</td>
                                </tr>
                                <tr>
                                    <th scope="row">{t("totalTax", {ns: ['main', 'home']})}</th>
                                    <td>$ {totalTax.toFixed(2)}</td>
                                </tr>
                                <tr>
                                    <th scope="row">{t("ssObligation", {ns: ['main', 'home']})}</th>
                                    <td>$0</td>
                                </tr>
                                <tr>
                                    <th scope="row">{t("medicareObligation", {ns: ['main', 'home']})}</th>
                                    <td>$0</td>
                                </tr>
                                <tr>
                                    <th scope="row">{t("taxObligation", {ns: ['main', 'home']})}</th>
                                    <td>$5000</td>
                                </tr>
                                <tr>
                                    <th scope="row">{t("totalTaxReturn", {ns: ['main', 'home']})}</th>
                                    <td>$400</td>
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