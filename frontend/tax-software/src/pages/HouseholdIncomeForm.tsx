import { Button, GridContainer, StepIndicator, StepIndicatorStep } from "@trussworks/react-uswds";
import HeaderComp from "../components/HeaderComp";
import { Link } from "react-router-dom";
import FooterComp from "../components/FooterComp";

export default function HouseholdIncomeForm() {

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
            <br/>
            <GridContainer>
                <Link to={"/household_status"}><Button type="button" size="big" style={{textAlign: "left"}}>Back</Button></Link>
                <Link to={""}><Button type="button" size="big" style={{float: "right"}}>Next</Button></Link>
            </GridContainer>
            <FooterComp />
        </>
    )
}