import React, { useState } from 'react';
import { Button, GridContainer, StepIndicator, StepIndicatorStep } from "@trussworks/react-uswds";
import HeaderComp from "../components/HeaderComp";
import NameForm from "../components/NameForm";
import AddressForm from "../components/AddressForm";
import FooterComp from "../components/FooterComp";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useFormData } from '../FormDataContext';

export default function PersonalInfoForm() {
    const { t, i18n } = useTranslation(['home', 'main']);

    const { formData, setFormData } = useFormData();

    // NameForm state variables
    const [firstName, setFirstName] = useState("");
    const [middleName, setMiddleName] = useState("");
    const [lastName, setLastName] = useState("");

    // AddressForm state variables
    const [streetAddress, setStreetAddress] = useState("");
    const [streetAddress2, setStreetAddress2] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [zip, setZip] = useState("");

    const handleSubmit = () => {
        setFormData({
            ...formData, // This spreads the existing context data to preserve other fields
            firstName,
            middleName,
            lastName,
            streetAddress,
            streetAddress2,
            city,
            state,
            zip
        });
    }


    return (
        <>
            <HeaderComp />
            <br />
            <GridContainer>
                <div style={{ minWidth: "60vw" }}>
                    <StepIndicator counters="default" headingLevel="h4">
                        <StepIndicatorStep label={t("personalInfo", { ns: ['main', 'home'] })} status="current" />
                        <StepIndicatorStep label={t("householdStatus", { ns: ['main', 'home'] })} />
                        <StepIndicatorStep label={t("householdIncome", { ns: ['main', 'home'] })} />
                        <StepIndicatorStep label={t("reviewSubmit", { ns: ['main', 'home'] })} />
                        <StepIndicatorStep label={t("taxEstimate", { ns: ['main', 'home'] })} />
                    </StepIndicator>
                </div>
            </GridContainer>
            <GridContainer>
                <div>
                    <NameForm
                        firstName={firstName}
                        setFirstName={setFirstName}
                        middleName={middleName}
                        setMiddleName={setMiddleName}
                        lastName={lastName}
                        setLastName={setLastName}
                    />
                    <br />
                    <AddressForm
                        streetAddress={streetAddress}
                        setStreetAddress={setStreetAddress}
                        streetAddress2={streetAddress2}
                        setStreetAddress2={setStreetAddress2}
                        city={city}
                        setCity={setCity}
                        state={state}
                        setState={setState}
                        zip={zip}
                        setZip={setZip}
                    />
                </div>
            </GridContainer>
            <br />
            <GridContainer>
                <div style={{ textAlign: "right" }}>
                    <Link 
                        to="/household_status"
                        onClick={handleSubmit}
                    >
                        <Button type="button" size="big">
                            {t("submitAndNext", { ns: ['main', 'home'] })}
                        </Button>
                    </Link>        
                </div>
            </GridContainer>
            <FooterComp />
        </>
    )
}
