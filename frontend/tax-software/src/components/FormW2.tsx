import { Button, Fieldset, Form, GridContainer, Label, TextInput } from "@trussworks/react-uswds";
import { useState } from "react";
import { useTranslation } from "react-i18next"
import { useFormData } from "../FormDataContext";


interface FormW2Props {
    goBackToTaxChoice: () => void;
}

export default function FormW2({ goBackToTaxChoice }: FormW2Props) {

    const { t, i18n } = useTranslation(['home', 'main']);

    const { formData, setFormData } = useFormData();
    
    const [ein, setEin] = useState("");
    const [wagesTips, setWagesTips] = useState("");
    const [w2TotalComp, setW2TotalComp] = useState("");
    const [ssWithheld, setSsWithheld] = useState("");
    const [medicareWithheld, setMedicareWithheld] = useState("");
    const [federalTaxWithheld, setFederalTaxWithheld] = useState("");

    function handleSubmit() {
        if(!isFormValid()) {
            setFormData(prevData => ({
                ...prevData,
                ein,
                wagesTips,
                w2TotalComp,
                ssWithheld,
                medicareWithheld,
                federalTaxWithheld
            }));
            isFormW2Completed(true);
        }
        
    }

    const isFormValid = () => {
        return (
            ein &&
            w2TotalComp &&
            ssWithheld &&
            medicareWithheld &&
            federalTaxWithheld
        );
    };

    const handleEinChange = (event) => {
        const newValue = event.target.value.replace(/[^0-9]/g, '');
        setEin(newValue); // Using the destructured setters directly
    }

    const handleWagesTipsChange = (event) => {
        const newValue = event.target.value.replace(/[^0-9]/g, '');
        setWagesTips(newValue); // Using the destructured setters directly
    }

    const handleW2TotalCompChange = (event) => {
        const newValue = event.target.value.replace(/[^0-9]/g, '');
        setW2TotalComp(newValue); // Using the destructured setters directly
    }

    const handleSsWithheldChange = (event) => {
        const newValue = event.target.value.replace(/[^0-9]/g, '');
        setSsWithheld(newValue); // Using the destructured setters directly
    }

    const handleMedicareWithheldChange = (event) => {
        const newValue = event.target.value.replace(/[^0-9]/g, '');
        setMedicareWithheld(newValue); // Using the destructured setters directly
    }

    const handleFederalTaxWithheldChange = (event) => {
        const newValue = event.target.value.replace(/[^0-9]/g, '');
        setFederalTaxWithheld(newValue); // Using the destructured setters directly
    }


    return (
        <>
        <div style={{display: "flex", justifyContent: "center"}}>
            <Button type="button" size="big" accentStyle="warm" onClick={goBackToTaxChoice}>{t("goBack", {ns: ['main', 'home']})}</Button>
        </div>
        <GridContainer>
            <div style={{backgroundColor: "white", boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", borderRadius: "8px", padding: "2em"}}>
              <Form onSubmit={handleSubmit} >
                
                    <Fieldset legend={ "W2 " + t("form", {ns: ['main', 'home']})} legendStyle="large" style={{minWidth: "25vw"}}>
                        <div>
                            <Label htmlFor="ein">{t("signIn", {ns: ['main', 'home']})}{' '}
                            <abbr title="required" className="usa-hint usa-hint--required">
                            *
                            </abbr></Label>
                            <span className="usa-hint">{t("forExample", {ns: ['main', 'home']}) + "123456789"}</span>
                            <TextInput 
                                id="ein" 
                                name="ein" 
                                type="text" 
                                value={ein}
                                onChange={handleEinChange}
                                style={{maxWidth: "20rem"}}
                                 />
                        </div>

                        <div>
                            <Label htmlFor="wagesTips">{t("wagesTips", {ns: ['main', 'home']})}</Label>
                            <span className="usa-hint">{t("inputValidNumber", {ns: ['main', 'home']})}</span>
                            <TextInput 
                                id="wagesTips" 
                                name="wagesTips" 
                                type="text" 
                                placeholder="$" 
                                value={wagesTips}
                                onChange={handleWagesTipsChange}
                                style={{maxWidth: "15rem"}}
                                 />
                        </div>

                        <div>
                            <Label htmlFor="totalComp">{t("totalComp", {ns: ['main', 'home']})}{' '}
                            <abbr title="required" className="usa-hint usa-hint--required">
                            *
                            </abbr></Label>
                            <span className="usa-hint">{t("inputValidNumber", {ns: ['main', 'home']})}</span>
                            <TextInput 
                                id="totalComp" 
                                name="totalComp" 
                                type="text" 
                                placeholder="$" 
                                value={w2TotalComp}
                                onChange={handleW2TotalCompChange}
                                style={{maxWidth: "15rem"}}
                                />
                        </div>

                        <div>
                            <Label htmlFor="ssWithheld">{t("ssWithheld", {ns: ['main', 'home']})}{' '}
                            <abbr title="required" className="usa-hint usa-hint--required">
                            *
                            </abbr></Label>
                            <span className="usa-hint">{t("inputValidNumber", {ns: ['main', 'home']})}</span>
                            <TextInput 
                                id="ssWithheld" 
                                name="ssWithheld" 
                                type="text" 
                                placeholder="$" 
                                value={ssWithheld}
                                onChange={handleSsWithheldChange}
                                style={{maxWidth: "15rem"}}
                                />
                        </div>

                        <div>
                            <Label htmlFor="medicareWithheld">{t("medicareWithheld", {ns: ['main', 'home']})}{' '}
                            <abbr title="required" className="usa-hint usa-hint--required">
                            *
                            </abbr></Label>
                            <span className="usa-hint">{t("inputValidNumber", {ns: ['main', 'home']})}</span>
                            <TextInput 
                                id="medicareWithheld" 
                                name="medicareWithheld" 
                                type="text" 
                                placeholder="$" 
                                value={medicareWithheld}
                                onChange={handleMedicareWithheldChange}
                                style={{maxWidth: "15rem"}}
                                />
                        </div>

                        <div>
                            <Label htmlFor="federalTaxtotalComp">{t("federalTaxtotalComp", {ns: ['main', 'home']})}{' '}
                            <abbr title="required" className="usa-hint usa-hint--required">
                            *
                            </abbr></Label>
                            <span className="usa-hint">{t("inputValidNumber", {ns: ['main', 'home']})}</span>
                            <TextInput 
                                id="federalTaxtotalComp" 
                                name="federalTaxtotalComp" 
                                type="text" 
                                placeholder="$" 
                                value={federalTaxWithheld}
                                onChange={handleFederalTaxWithheldChange}
                                style={{maxWidth: "15rem"}}
                                />
                        </div>
                    </Fieldset>
                    <br/>
                    <Button type="button" accentStyle="cool" disabled={!isFormValid()}
                            onClick={handleSubmit}>{t("submit", {ns: ['main', 'home']})}</Button>
                
                </Form>
                </div>
            </GridContainer>
        </>
    )
}