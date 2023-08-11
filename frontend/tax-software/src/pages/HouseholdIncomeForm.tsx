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
import { useFormData } from "../FormDataContext";

export default function HouseholdIncomeForm() {

    const { t, i18n } = useTranslation(['home', 'main']);

    const [selectedTaxChoice, setSelectedTaxChoice] = useState<string | null>(null);

    const handleTaxChoice = (choice: string) => {
        setSelectedTaxChoice(choice);
    };

    const goBackToTaxChoice = () => {
        setSelectedTaxChoice(null);
    }

    return (
        <>
            <HeaderComp />
            <br/>
            <GridContainer>
                <div style={{ minWidth: "60vw"}}>
                    <StepIndicator counters="default" headingLevel="h4">
                        <StepIndicatorStep label={t("personalInfo", {ns: ['main', 'home']})} status="complete" />
                        <StepIndicatorStep label={t("householdStatus", {ns: ['main', 'home']})} status="complete" />
                        <StepIndicatorStep label={t("householdIncome", {ns: ['main', 'home']})} status="current" />
                        <StepIndicatorStep label={t("reviewSubmit", {ns: ['main', 'home']})} />
                        <StepIndicatorStep label={t("taxEstimate", {ns: ['main', 'home']})} />
                    </StepIndicator>
                </div>
            </GridContainer>
            {selectedTaxChoice === null ? (
                <TaxChoice onTaxChoice={handleTaxChoice} />
            ) : selectedTaxChoice === "w2" ? (
                <FormW2 goBackToTaxChoice={goBackToTaxChoice}/>
            ) : (
                <Form1099 goBackToTaxChoice={goBackToTaxChoice}/>
            )}

            <br/>
            <GridContainer>
                <Link to={"/household_status"}><Button type="button" size="big" style={{textAlign: "left"}}>{t("back", {ns: ['main', 'home']})}</Button></Link>
                <Link to={"/review"}><Button type="button" size="big" style={{float: "right"}}>{t("next", {ns: ['main', 'home']})}</Button></Link>
            </GridContainer>
            <FooterComp />
        </>
    )
}