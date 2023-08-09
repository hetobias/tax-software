import { Button, GridContainer, StepIndicator, StepIndicatorStep } from "@trussworks/react-uswds";
import HeaderComp from "../components/HeaderComp";
import NameForm from "../components/NameForm";
import AddressForm from "../components/AddressForm";
import FooterComp from "../components/FooterComp";
import { Link } from "react-router-dom";

export default function PersonalInfoForm() {

    return (
        <>
            <HeaderComp />
            <br/>
            <GridContainer>
                <div style={{ minWidth: "60vw"}}>
                    <StepIndicator counters="default" headingLevel="h4">
                        <StepIndicatorStep label="Personal information" status="current" />
                        <StepIndicatorStep label="Household status" />
                        <StepIndicatorStep label="Household income" />
                        <StepIndicatorStep label="Review and submit" />
                        <StepIndicatorStep label="Tax Estimate" />
                    </StepIndicator>
                </div>
            </GridContainer>
            <GridContainer>
                <div >
                    <div >
                        <NameForm /><br/>
                        <AddressForm />
                    </div>
                </div>
            </GridContainer>
            <br/>
            <GridContainer>
                <div style={{textAlign: "right"}}>
                <Link to={"/household_status"}><Button type="button" size="big">Submit and Next</Button></Link>
                </div>
            </GridContainer>
            <FooterComp />

        </>
    )
}