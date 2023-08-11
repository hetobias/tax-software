import { Fieldset, GridContainer, Radio, TextInput } from "@trussworks/react-uswds";
import { useState } from "react";
import { useTranslation } from "react-i18next"

export default function FilingStatusForm({ singleOrMarried, setSingleOrMarried, jointlyOrSingle, setJointlyOrSingle, isHeadofHousehold, setIsHeadofHousehold, hasDependent, setHasDependent, dependentInputValue, setDependentInputValue }) {


    const { t, i18n } = useTranslation(['home', 'main']);


    const handleInputChange = (event: any) => {
        const newValue = event.target.value.replace(/[^0-9]/g, '').slice(0,2);
        setDependentInputValue(newValue);
    }

    const handleNoDependentChange = (value: any) => {
        if (value === false) {
            setDependentInputValue("");
        }
    }

    return (
        <>
            <GridContainer>
                <div style={{backgroundColor: "white", boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", borderRadius: "8px", padding: "2em"}}>
                    <Fieldset legend={t("filingStatus", {ns: ['main', 'home']})} legendStyle="large" style={{minWidth: "25vw"}}><br/>
                        <div>
                            <h3>{t("singleOrMarriedQuestion", {ns: ['main', 'home']})}</h3>
                            <Radio
                            id="single"
                            name="married-single"
                            label={t("single", {ns: ['main', 'home']})}
                            value="single"
                            checked={singleOrMarried === "single"}
                            onChange={() => setSingleOrMarried("single")}
                            />
                            <Radio
                            id="married"
                            name="married-single"
                            label={t("married", {ns: ['main', 'home']})}
                            value="married"
                            checked={singleOrMarried === "married"}
                            onChange={() => setSingleOrMarried("married")}
                            />
                        </div><br/>

                        {singleOrMarried === "married" && (
                            <div>
                                <h3>{t("fileJointOrSingleQuestion", {ns: ['main', 'home']})}</h3>
                                <Radio
                                id="single1"
                                name="joint-single"
                                label={t("single", {ns: ['main', 'home']})}
                                value="single"
                                onChange={() => setJointlyOrSingle("single")}
                                />
                                <Radio
                                id="joint"
                                name="joint-single"
                                label={t("joint", {ns: ['main', 'home']})}
                                value="joint"
                                onChange={() => setJointlyOrSingle("joint")}
                                /><br/>
                            </div>
                        )}

                        {singleOrMarried === "single" && (
                            <div>
                                <h3>{t("headOfHouseholdQuestion", {ns: ['main', 'home']})}</h3>
                                <Radio
                                id="yes"
                                name="head-of-household"
                                label={t("yes", {ns: ['main', 'home']})}
                                value="yes"
                                onChange={() => setIsHeadofHousehold(true)}
                                />
                                <Radio
                                id="no"
                                name="head-of-household"
                                label={t("no", {ns: ['main', 'home']})}
                                value="no"
                                onChange={() => setIsHeadofHousehold(false)}
                                />
                            </div>
                        )}
                    
                    </Fieldset>
                </div>
            </GridContainer>
        </>
    )
}