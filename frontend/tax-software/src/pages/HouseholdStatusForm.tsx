import { Button, GridContainer, StepIndicator, StepIndicatorStep } from "@trussworks/react-uswds";
import HeaderComp from "../components/HeaderComp";
import FilingStatusForm from "../components/FilingStatusForm";
import FooterComp from "../components/FooterComp";
import { Link } from "react-router-dom";

export default function HouseholdStatusForm() {


    return (
        <>
            <HeaderComp />
            <br/>
            <GridContainer>
                <div style={{ minWidth: "60vw"}}>
                    <StepIndicator counters="default" headingLevel="h4">
                        <StepIndicatorStep label="Personal information" status="complete" />
                        <StepIndicatorStep label="Household status" status="current" />
                        <StepIndicatorStep label="Household income" />
                        <StepIndicatorStep label="Review and submit" />
                        <StepIndicatorStep label="Tax Estimate" />
                    </StepIndicator>
                </div>
            </GridContainer>
            <FilingStatusForm />
            <br/>
            <GridContainer>
                <Link to={"/personal_information"}><Button type="button" size="big" style={{textAlign: "left"}}>Back</Button></Link>
                <Link to={"/household_income"}><Button type="button" size="big" style={{float: "right"}}>Submit and Next</Button></Link>
            </GridContainer>
            <FooterComp />

        </>
    )
}