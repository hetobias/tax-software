import { Fieldset, Form, GridContainer, Label, TextInput } from "@trussworks/react-uswds";

export default function NameForm() {

    function handleSubmit() {
        // event.preventDefault();

    }
    return (
        <>
        <GridContainer>
            <div style={{backgroundColor: "white", boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", borderRadius: "8px"}}>
              <Form onSubmit={handleSubmit} >
                
                    <Fieldset legend="Name" legendStyle="large" style={{minWidth: "25vw", paddingBottom: "2em", marginLeft: "2em"}}>
                        <div>
                            <Label htmlFor="first-name">First or given name{' '}
                            <abbr title="required" className="usa-hint usa-hint--required">
                            *
                            </abbr></Label>
                            <span className="usa-hint">For example, Jose, Darren, or Mai</span>
                            <TextInput id="first-name" name="first-name" type="text" />
                        </div>

                        <div>
                            <Label htmlFor="middle-name">Middle name</Label>
                            <TextInput id="middle-name" name="middle-name" type="text" />
                        </div>

                        <div>
                            <Label htmlFor="last-name">Last or family name{' '}
                            <abbr title="required" className="usa-hint usa-hint--required">
                            *
                            </abbr></Label>
                            <span className="usa-hint">
                                For example, Martinez Gonzalez, Gu, or Smith
                            </span>
                            <TextInput id="last-name" name="last-name" type="text" />
                        </div>
                    </Fieldset>
                
                </Form>
                </div>
            </GridContainer>
        </>
    )
}