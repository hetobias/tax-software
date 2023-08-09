import { Fieldset, GridContainer, Radio, TextInput } from "@trussworks/react-uswds";
import { useState } from "react";

export default function FilingStatusForm() {

    const [singleOrMarried, setSingleOrMarried] = useState("");
    const [jointlyOrSingle, setJointlyOrSingle] = useState("");
    const [isHeadofHousehold, setIsHeadofHousehold] = useState(false);
    const [hasDependent, setHasDependent] = useState(false);
    const [dependentInputValue, setDependentInputValue] = useState("");

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
                    <Fieldset legend="Filing Status" legendStyle="large" style={{minWidth: "25vw"}}><br/>
                        <div>
                            <h3>Are you single or married?</h3>
                            <Radio
                            id="single"
                            name="married-single"
                            label="Single"
                            value="single"
                            checked={singleOrMarried === "single"}
                            onChange={() => setSingleOrMarried("single")}
                            />
                            <Radio
                            id="married"
                            name="married-single"
                            label="Married"
                            value="married"
                            checked={singleOrMarried === "married"}
                            onChange={() => setSingleOrMarried("married")}
                            />
                        </div><br/>

                        {singleOrMarried === "married" && (
                            <div>
                                <h3>Will you file jointly or as single?</h3>
                                <Radio
                                id="single1"
                                name="joint-single"
                                label="Single"
                                value="single"
                                onChange={() => setJointlyOrSingle("single")}
                                />
                                <Radio
                                id="joint"
                                name="joint-single"
                                label="Joint"
                                value="joint"
                                onChange={() => setJointlyOrSingle("joint")}
                                /><br/>
                            </div>
                        )}

                        {singleOrMarried === "single" && (
                            <div>
                                <h3>Are you the head of household?</h3>
                                <Radio
                                id="yes"
                                name="head-of-household"
                                label="Yes"
                                value="yes"
                                onChange={() => setIsHeadofHousehold(true)}
                                />
                                <Radio
                                id="no"
                                name="head-of-household"
                                label="No"
                                value="no"
                                onChange={() => setIsHeadofHousehold(false)}
                                />
                            </div>
                        )}

                        <div>
                            <h3>Do you have Dependents?</h3>
                            <Radio
                            id="yes1"
                            name="dependents"
                            label="Yes"
                            value="yes1"
                            checked={hasDependent === true}
                            onChange={() => setHasDependent(true)}
                            />
                            <Radio
                            id="no1"
                            name="dependents"
                            label="No"
                            value="no1"
                            checked={hasDependent === false}
                            onChange={() => {
                                setHasDependent(false);
                                handleNoDependentChange(false);
                            }}
                            />
                        </div><br/>

                        {hasDependent === true && (
                            <div>
                                <h3>How many Dependents do you have?</h3>
                                <span className="usa-hint">Please insert a number (Example: 2)</span>
                                <TextInput
                                id="dependents"
                                name="dependents"
                                type="text"
                                inputSize="medium"
                                maxLength={2}
                                value={dependentInputValue}
                                onChange={handleInputChange}
                                style={{maxWidth: "10rem"}}
                                />
                            </div>
                        )}

                    
                    </Fieldset>
                </div>
            </GridContainer>
        </>
    )
}