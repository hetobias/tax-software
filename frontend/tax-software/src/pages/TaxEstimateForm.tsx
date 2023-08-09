import { Button, GridContainer, StepIndicator, StepIndicatorStep, Table } from "@trussworks/react-uswds";
import HeaderComp from "../components/HeaderComp";
import { Link } from "react-router-dom";
import FooterComp from "../components/FooterComp";

export default function TaxEstimateForm() {

    return (
        <>
            <HeaderComp />
            <br/>
            <GridContainer>
                <div style={{ minWidth: "60vw"}}>
                    <StepIndicator counters="default" headingLevel="h4">
                        <StepIndicatorStep label="Personal information" status="complete" />
                        <StepIndicatorStep label="Household status" status="complete" />
                        <StepIndicatorStep label="Household income" status="complete" />
                        <StepIndicatorStep label="Review and submit" status="complete" />
                        <StepIndicatorStep label="Tax Estimate" status="current" />
                    </StepIndicator>
                </div>

                <GridContainer>
                    <h2 style={{textAlign: "center"}}>Here are your Tax Estimates!</h2>
                    <br/>
                    <div style={{backgroundColor: "white", boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", borderRadius: "8px", padding: "2em"}}>
                        <GridContainer>
                            <Table
                                striped
                                fullWidth
                                fixed
                                className="bg-accent-cool-light"
                                >
                                <thead>
                                <tr>
                                    <th scope="col">-</th>
                                    <th scope="col">-</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <th scope="row">Total Wage Earned</th>
                                    <td>$70,000</td>
                                </tr>
                                <tr>
                                    <th scope="row">Remaining Social Security Tax Obligation</th>
                                    <td>$0</td>
                                </tr>
                                <tr>
                                    <th scope="row">Remaining Medicare Tax Obligation</th>
                                    <td>$0</td>
                                </tr>
                                <tr>
                                    <th scope="row">Remaining Federal Tax Obligation</th>
                                    <td>$5000</td>
                                </tr>
                                <tr>
                                    <th scope="row">Total Tax Return</th>
                                    <td>$400</td>
                                </tr>
                                </tbody>
                            </Table>
                        </GridContainer>
                    </div>
                </GridContainer>
                <br/><br/>
                <div style={{textAlign: "center"}}>
                    <Link to={"/user"}><Button type="button" size="big">Go Back to User Page</Button></Link>
                </div>
            </GridContainer>
            <FooterComp />
        </>
    )
}