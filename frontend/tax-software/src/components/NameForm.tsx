import { Fieldset, Form, GridContainer, Label, TextInput } from "@trussworks/react-uswds";
import { useState } from "react";

export default function NameForm() {

    const [firstName, setFirstName] = useState("");
    const [middleName, setMiddleName] = useState("");
    const [lastName, setLastName] = useState("");
    

    function handleSubmit() {
        // event.preventDefault();

    }
    return (
        <>
        <GridContainer>
            <div style={{backgroundColor: "white", boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", borderRadius: "8px", padding: "2em"}}>
              <Form onSubmit={handleSubmit} >
                
                    <Fieldset legend="Name" legendStyle="large" style={{minWidth: "25vw"}}>
                        <div>
                            <Label htmlFor="first-name">First or given name{' '}
                            <abbr title="required" className="usa-hint usa-hint--required">
                            *
                            </abbr></Label>
                            <span className="usa-hint">For example, Jose, Darren, or Mai</span>
                            <TextInput 
                                id="first-name" 
                                name="first-name" 
                                type="text"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                 />
                        </div>

                        <div>
                            <Label htmlFor="middle-name">Middle name</Label>
                            <TextInput 
                                id="middle-name" 
                                name="middle-name" 
                                type="text"
                                value={middleName}
                                onChange={(e) => setMiddleName(e.target.value)}
                                 />
                        </div>

                        <div>
                            <Label htmlFor="last-name">Last or family name{' '}
                            <abbr title="required" className="usa-hint usa-hint--required">
                            *
                            </abbr></Label>
                            <span className="usa-hint">
                                For example, Martinez Gonzalez, Gu, or Smith
                            </span>
                            <TextInput 
                                id="last-name" 
                                name="last-name" 
                                type="text"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)} />
                        </div>
                    </Fieldset>
                
                </Form>
                </div>
            </GridContainer>
        </>
    )
}