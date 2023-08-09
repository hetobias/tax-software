import { Button, GridContainer, StepIndicator, StepIndicatorStep } from "@trussworks/react-uswds";
import HeaderComp from "../components/HeaderComp";
import NameForm from "../components/NameForm";
import AddressForm from "../components/AddressForm";
import FooterComp from "../components/FooterComp";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function PersonalInfoForm() {

    const { t, i18n } = useTranslation(['home', 'main']);

    return (
        <>
            <HeaderComp />
            <br/>
            <GridContainer>
                <div style={{ minWidth: "60vw"}}>
                    <StepIndicator counters="default" headingLevel="h4">
                        <StepIndicatorStep label={t("personalInfo", {ns: ['main', 'home']})} status="current" />
                        <StepIndicatorStep label={t("householdStatus", {ns: ['main', 'home']})} />
                        <StepIndicatorStep label={t("householdIncome", {ns: ['main', 'home']})} />
                        <StepIndicatorStep label={t("reviewSubmit", {ns: ['main', 'home']})} />
                        <StepIndicatorStep label={t("taxEstimate", {ns: ['main', 'home']})} />
                    </StepIndicator>
                </div>
            </GridContainer>
            <GridContainer>
                <div >
                    <div >
                        <NameForm /><br/>
                        <AddressForm />
                    </div>
                </div>
            </GridContainer>
            <br/>
            <GridContainer>
                <div style={{textAlign: "right"}}>
                <Link to={"/household_status"}><Button type="button" size="big">{t("submitAndNext", {ns: ['main', 'home']})}</Button></Link>
                </div>
            </GridContainer>
            <FooterComp />

        </>
    )
}