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
    }


    return (
        <>
            <HeaderComp />
            <br/>
            <GridContainer>
                <div style={{ minWidth: "60vw"}}>
                    <StepIndicator counters="default" headingLevel="h4">
                        <StepIndicatorStep label={t("personalInfo", {ns: ['main', 'home']})} status="complete" />
                        <StepIndicatorStep label={t("householdStatus", {ns: ['main', 'home']})} status="current" />
                        <StepIndicatorStep label={t("householdIncome", {ns: ['main', 'home']})} />
                        <StepIndicatorStep label={t("reviewSubmit", {ns: ['main', 'home']})} />
                        <StepIndicatorStep label={t("taxEstimate", {ns: ['main', 'home']})} />
                    </StepIndicator>
                </div>
            </GridContainer>
            <FilingStatusForm
                singleOrMarried={singleOrMarried}
                setSingleOrMarried={setSingleOrMarried}
                jointlyOrSingle={jointlyOrSingle}
                setJointlyOrSingle={setJointlyOrSingle}
                isHeadofHousehold={isHeadofHousehold}
                setIsHeadofHousehold={setIsHeadofHousehold}
                hasDependent={hasDependent}
                setHasDependent={setHasDependent}
                dependentInputValue={dependentInputValue}
                setDependentInputValue={setDependentInputValue}
            />
            <br/>
            <GridContainer>
                <Link to={"/personal_information"}><Button type="button" size="big" style={{textAlign: "left"}}>{t("back", {ns: ['main', 'home']})}</Button></Link>
                <Link to={"/household_income"} 
                      onClick={handleSubmit}><Button type="button" size="big" style={{float: "right"}}>{t("submitAndNext", {ns: ['main', 'home']})}</Button></Link>
    
            </GridContainer>
            <FooterComp />

        </>
    )
}