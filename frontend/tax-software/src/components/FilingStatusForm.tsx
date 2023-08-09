import { Fieldset, GridContainer, Radio, TextInput } from "@trussworks/react-uswds";
import { useState } from "react";

export default function FilingStatusForm() {

    const [selectedOption, setSelectedOption] = useState("");
    const [selectedOption1, setSelectedOption1] = useState("");
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (event: any) => {
        const newValue = event.target.value.replace(/[^0-9]/g, '').slice(0,2);
        setInputValue(newValue);
    }

    const handleNoDependentChange = (value: any) => {
        if (value === "no1") {
            setInputValue("");
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
                            checked={selectedOption === "single"}
                            onChange={() => setSelectedOption("single")}
                            />
                            <Radio
                            id="married"
                            name="married-single"
                            label="Married"
                            value="married"
                            checked={selectedOption === "married"}
                            onChange={() => setSelectedOption("married")}
                            />
                        </div><br/>

                        {selectedOption === "married" && (
                            <div>
                                <h3>Will you file jointly or as single?</h3>
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
                                /><br/>
                            </div>
                        )}

                        {selectedOption === "single" && (
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
                            </div>
                        )}

                        <div>
                            <h3>Do you have Dependents?</h3>
                            <Radio
                            id="yes1"
                            name="dependents"
                            label="Yes"
                            value="yes1"
                            checked={selectedOption1 === "yesDependent"}
                            onChange={() => setSelectedOption1("yesDependent")}
                            />
                            <Radio
                            id="no1"
                            name="dependents"
                            label="No"
                            value="no1"
                            checked={selectedOption1 === "no1"}
                            onChange={() => {
                                setSelectedOption1("no1");
                                handleNoDependentChange("no1");
                            }}
                            />
                        </div><br/>

                        {selectedOption1 === "yesDependent" && (
                            <div>
                                <h3>How many Dependents do you have?</h3>
                                <span className="usa-hint">Please insert a number (Example: 2)</span>
                                <TextInput
                                id="dependents"
                                name="dependents"
                                type="text"
                                inputSize="medium"
                                maxLength={2}
                                value={inputValue}
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