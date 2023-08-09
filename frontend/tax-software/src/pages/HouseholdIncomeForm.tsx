import { Button, GridContainer, StepIndicator, StepIndicatorStep } from "@trussworks/react-uswds";
import HeaderComp from "../components/HeaderComp";
import { Link } from "react-router-dom";
import FooterComp from "../components/FooterComp";
import TaxChoice from "../components/TaxChoice";
import { useState } from "react";
import FormW2 from "../components/FormW2";
import Form1099 from "../components/Form1099";

export default function HouseholdIncomeForm() {

    const [selectedTaxChoice, setSelectedTaxChoice] = useState<string | null>(null);

    const handleTaxChoice = (choice: string) => {
        setSelectedTaxChoice(choice);
    };

    const goBackToTaxChoice = () => {
        setSelectedTaxChoice(null);
    }

    return (
        <>
            <HeaderComp />
            <br/>
            <GridContainer>
                <div style={{ minWidth: "60vw"}}>
                    <StepIndicator counters="default" headingLevel="h4">
                        <StepIndicatorStep label="Personal information" status="complete" />
                        <StepIndicatorStep label="Household status" status="complete" />
                        <StepIndicatorStep label="Household income" status="current" />
                        <StepIndicatorStep label="Signature" />
                        <StepIndicatorStep label="Review and submit" />
                    </StepIndicator>
                </div>
            </GridContainer>
            {selectedTaxChoice === null ? ( // Display TaxChoice component initially
                <TaxChoice onTaxChoice={handleTaxChoice} />
            ) : selectedTaxChoice === "w2" ? (
                <FormW2 goBackToTaxChoice={goBackToTaxChoice}/>
            ) : (
                <Form1099 goBackToTaxChoice={goBackToTaxChoice}/>
            )}

            <br/>
            <GridContainer>
                <Link to={"/household_status"}><Button type="button" size="big" style={{textAlign: "left"}}>Back</Button></Link>
                <Link to={""}><Button type="button" size="big" style={{float: "right"}}>Next</Button></Link>
            </GridContainer>
            <FooterComp />
        </>
    )
}