import { Button, Fieldset, GridContainer, StepIndicator, StepIndicatorStep, Table } from "@trussworks/react-uswds";
import HeaderComp from "../components/HeaderComp";
import { Link } from "react-router-dom";
import FooterComp from "../components/FooterComp";

export default function ReviewForm() {

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
                        <StepIndicatorStep label="Review and submit" status="current" />
                        <StepIndicatorStep label="Tax Estimate" />
                    </StepIndicator>
                </div>

                <h2>Please make sure that all information are accurate</h2>

                <br/>
                <GridContainer>
                    <Table
                        striped
                        caption="Personal Information & Filing Status"
                        fullWidth
                        fixed
                        className="bg-accent-cool-light"
                        >
                        <thead>
                        <tr>
                            <th scope="col">Fields</th>
                            <th scope="col">Information Input</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th scope="row">Full Name</th>
                            <td>John A. Doe</td>
                        </tr>
                        <tr>
                            <th scope="row">Address</th>
                            <td>123 Main St. Springfield,
                                IL, 12345
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">Filing Status</th>
                            <td>Single</td>
                        </tr>
                        <tr>
                            <th scope="row">Head of Household?</th>
                            <td>Yes</td>
                        </tr>
                        </tbody>
                    </Table>
                </GridContainer>
                <br/>

                <br/>
                <GridContainer>
                    <Table
                        striped
                        caption="W2 Form"
                        fullWidth
                        fixed
                        className="bg-accent-warm-light"
                        >
                        <thead>
                        <tr>
                            <th scope="col">Fields</th>
                            <th scope="col">Information Input</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th scope="row">EIN</th>
                            <td>123456789</td>
                        </tr>
                        <tr>
                            <th scope="row">Wages, tips, or other compensation</th>
                            <td>$15,000</td>
                        </tr>
                        <tr>
                            <th scope="row">Total Compensation</th>
                            <td>$70,000</td>
                        </tr>
                        <tr>
                            <th scope="row">Social Security Withheld</th>
                            <td>$4,500</td>
                        </tr>
                        <tr>
                            <th scope="row">Medicare Withheld</th>
                            <td>$1,200</td>
                        </tr>
                        <tr>
                            <th scope="row">Federal Tax Withheld</th>
                            <td>$5,500</td>
                        </tr>
                        </tbody>
                    </Table>
                </GridContainer>
                <br/>

                <br/>
                <GridContainer>
                    <Table
                        striped
                        caption="1099 Form"
                        fullWidth
                        fixed
                        className="bg-accent-warm"
                        >
                        <thead>
                        <tr>
                            <th scope="col">Fields</th>
                            <th scope="col">Information Input</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th scope="row">Social Security Number / EIN</th>
                            <td>123-45-6789</td>
                        </tr>
                        <tr>
                            <th scope="row">Total Compensation</th>
                            <td>$70,000</td>
                        </tr>
                        </tbody>
                    </Table>
                </GridContainer>
                <br/><br/>

                <Link to={"/household_income"}><Button type="button" size="big" style={{textAlign: "left"}}>Back</Button></Link>
                <Link to={"/tax_estimate"}><Button type="button" size="big" style={{float: "right"}}>Get Tax Estimate</Button></Link>
            </GridContainer>
            <FooterComp />
        </>
    )
}