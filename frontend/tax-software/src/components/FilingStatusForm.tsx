import { Fieldset, GridContainer, Radio } from "@trussworks/react-uswds";

export default function FilingStatusForm() {

    return (
        <>
            <GridContainer>
                <div style={{backgroundColor: "white", boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", borderRadius: "8px"}}>
                    <Fieldset legend="Filing Status" legendStyle="large" style={{minWidth: "25vw", paddingBottom: "2em", marginLeft: "2em"}}><br/>
                        <div>
                            <h3>Are you single or married?</h3>
                            <Radio
                            id="single"
                            name="married-single"
                            label="Single"
                            value="single"
                            />
                            <Radio
                            id="married"
                            name="married-single"
                            label="Married"
                            value="married"
                            />
                        </div><br/>

                        <div>
                            <h3>If you are married, will you file jointly or as single?</h3>
                            <Radio
                            id="single1"
                            name="joint-single"
                            label="Single"
                            value="single1"
                            />
                            <Radio
                            id="Joint"
                            name="joint-single"
                            label="Joint"
                            value="Joint"
                            />
                        </div><br/>

                        <div>
                            <h3>Are you the head of household?</h3>
                            <Radio
                            id="yes"
                            name="head-of-household"
                            label="Yes"
                            value="yes"
                            />
                            <Radio
                            id="no"
                            name="head-of-household"
                            label="No"
                            value="no"
                            />
                            <Radio
                            id="n/a"
                            name="head-of-household"
                            label="Not Applicable"
                            value="n/a"
                            />
                        </div>

                    </Fieldset>
                </div>
            </GridContainer>
        </>
    )
}