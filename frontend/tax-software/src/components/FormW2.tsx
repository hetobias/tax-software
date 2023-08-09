import { Button, Fieldset, Form, GridContainer, Label, TextInput } from "@trussworks/react-uswds";
import { useState } from "react";

interface FormW2Props {
    goBackToTaxChoice: () => void;
}

export default function FormW2({ goBackToTaxChoice }: FormW2Props) {

    const [ein, setEin] = useState("");
    const [wagesTips, setWagesTips] = useState("");
    const [totalComp, setTotalComp] = useState("");
    const [ssWithheld, setSsWithheld] = useState("");
    const [medicareWithheld, setMedicareWithheld] = useState("");
    const [federalTaxWithheld, setFederalTaxWithheld] = useState("");

    function handleSubmit() {
        // event.preventDefault();

    }
    return (
        <>
        <div style={{display: "flex", justifyContent: "center"}}>
            <Button type="button" size="big" accentStyle="warm" onClick={goBackToTaxChoice}>Go Back</Button>
        </div>
        <GridContainer>
            <div style={{backgroundColor: "white", boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", borderRadius: "8px", padding: "2em"}}>
              <Form onSubmit={handleSubmit} >
                
                    <Fieldset legend="W2 Form" legendStyle="large" style={{minWidth: "25vw"}}>
                        <div>
                            <Label htmlFor="ein">EIN{' '}
                            <abbr title="required" className="usa-hint usa-hint--required">
                            *
                            </abbr></Label>
                            <span className="usa-hint">For example, 123456789</span>
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
                            <Label htmlFor="wagesTips">Wages, tips, or other compensation</Label>
                            <span className="usa-hint">Please input a valid number</span>
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
                            <Label htmlFor="totalComp">Total Compensation{' '}
                            <abbr title="required" className="usa-hint usa-hint--required">
                            *
                            </abbr></Label>
                            <span className="usa-hint">Please input a valid number</span>
                            <TextInput 
                                id="totalComp" 
                                name="totalComp" 
                                type="text" 
                                placeholder="$" 
                                value={totalComp}
                                onChange={(e) => setTotalComp(e.target.value)}
                                style={{maxWidth: "15rem"}}
                                />
                        </div>

                        <div>
                            <Label htmlFor="ssWithheld">Social Security Withheld{' '}
                            <abbr title="required" className="usa-hint usa-hint--required">
                            *
                            </abbr></Label>
                            <span className="usa-hint">Please input a valid number</span>
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
                            <Label htmlFor="medicareWithheld">Medicare Withheld{' '}
                            <abbr title="required" className="usa-hint usa-hint--required">
                            *
                            </abbr></Label>
                            <span className="usa-hint">Please input a valid number</span>
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
                            <Label htmlFor="federalTaxtotalComp">Federal Tax Withheld{' '}
                            <abbr title="required" className="usa-hint usa-hint--required">
                            *
                            </abbr></Label>
                            <span className="usa-hint">Please input a valid number</span>
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
                    <Button type="button" accentStyle="cool" onClick={handleSubmit}>Submit</Button>
                
                </Form>
                </div>
            </GridContainer>
        </>
    )
}