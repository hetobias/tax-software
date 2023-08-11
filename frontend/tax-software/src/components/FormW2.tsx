// @ts-nocheck
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
        setFormData(prevData => ({
            ...prevData,
            ein,
            wagesTips,
            w2TotalComp,
            ssWithheld,
            medicareWithheld,
            federalTaxWithheld
        }));

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
                            <Label htmlFor="ein">EIN{' '}
                            <abbr title="required" className="usa-hint usa-hint--required">
                            *
                            </abbr></Label>
                            <span className="usa-hint">{t("forExample", {ns: ['main', 'home']}) + "123456789"}</span>
                            <TextInput 
                                id="ein" 
                                name="ein" 
                                type="text" 
                                value={ein}
                                onChange={(e) => setEin(e.target.value)}
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
                                onChange={(e) => setWagesTips(e.target.value)}
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
                                onChange={(e) => setW2TotalComp(e.target.value)}
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
                                onChange={(e) => setSsWithheld(e.target.value)}
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
                                onChange={(e) => setMedicareWithheld(e.target.value)}
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
                                onChange={(e) => setFederalTaxWithheld(e.target.value)}
                                style={{maxWidth: "15rem"}}
                                />
                        </div>
                    </Fieldset>
                    <br/>
                    <Button type="button" accentStyle="cool" onClick={handleSubmit}>{t("submit", {ns: ['main', 'home']})}</Button>
                
                </Form>
                </div>
            </GridContainer>
        </>
    )
}