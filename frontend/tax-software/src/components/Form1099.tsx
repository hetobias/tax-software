import { Button, Fieldset, Form, GridContainer, Label, TextInput } from "@trussworks/react-uswds";
import { useState } from "react";

interface FormW2Props {
    goBackToTaxChoice: () => void;
}

export default function Form1099({ goBackToTaxChoice }: FormW2Props) {

    const [ssnOrEin, setSsnOrEin] = useState("");
    const [totalComp, setTotalComp] = useState("");

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
                
                    <Fieldset legend="1099 Form" legendStyle="large" style={{minWidth: "25vw"}}>
                        <div>
                            <Label htmlFor="ein">Social Security Number or EIN{' '}
                            <abbr title="required" className="usa-hint usa-hint--required">
                            *
                            </abbr></Label>
                            <span className="usa-hint">SSN: 123-45-6789 / EIN: 123456789</span>
                            <TextInput 
                                id="ein" 
                                name="ein" 
                                type="text" 
                                value={ssnOrEin}
                                onChange={(e) => setSsnOrEin(e.target.value)}
                                style={{maxWidth: "20rem"}} />
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
                                style={{maxWidth: "15rem"}}/>
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