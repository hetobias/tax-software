import { Button, Fieldset, GridContainer, StepIndicator, StepIndicatorStep, Table } from "@trussworks/react-uswds";
import HeaderComp from "../components/HeaderComp";
import { Link } from "react-router-dom";
import FooterComp from "../components/FooterComp";
import { useTranslation } from "react-i18next"
import { useFormData } from "../FormDataContext";


export default function ReviewForm() {

    const { t, i18n } = useTranslation(['home', 'main']);

    const { formData } = useFormData();

    return (
        <>
            <HeaderComp />
            <br/>
            <GridContainer>
                <div style={{ minWidth: "60vw"}}>
                    <StepIndicator counters="default" headingLevel="h4">
                        <StepIndicatorStep label={t("personalInfo", {ns: ['main', 'home']})} status="complete" />
                        <StepIndicatorStep label={t("householdStatus", {ns: ['main', 'home']})} status="complete" />
                        <StepIndicatorStep label={t("householdIncome", {ns: ['main', 'home']})} status="complete" />
                        <StepIndicatorStep label={t("reviewSubmit", {ns: ['main', 'home']})} status="current" />
                        <StepIndicatorStep label={t("taxEstimate", {ns: ['main', 'home']})} />
                    </StepIndicator>
                </div>

                <h2>{t("pleaseReviewInfo", {ns: ['main', 'home']})}</h2>

                <br/>
                <GridContainer>
                    <Table
                        striped
                        caption={t("personalInfo", {ns: ['main', 'home']}) + " & " + t("filingStatus", {ns: ['main', 'home']})}
                        fullWidth
                        fixed
                        className="bg-accent-cool-light"
                        >
                        <thead>
                        <tr>
                            <th scope="col">{t("fields", {ns: ['main', 'home']})}</th>
                            <th scope="col">{t("infoInput", {ns: ['main', 'home']})}</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th scope="row">{t("fullName", {ns: ['main', 'home']})}</th>
                            <td>{`${formData.firstName} ${formData.middleName} ${formData.lastName}`}</td>
                        </tr>
                        <tr>
                            <th scope="row">{t("address", {ns: ['main', 'home']})}</th>
                            <td>{`${formData.streetAddress}, ${formData.streetAddress2}, ${formData.city}, ${formData.state} ${formData.zip}`}</td>
                        </tr>
                        <tr>
                            <th scope="row">{t("filingStatus", {ns: ['main', 'home']})}</th>
                            <td>{formData.singleOrMarried}</td>
                        </tr>
                        <tr>
                            <th scope="row">{t("headOfHousehold", {ns: ['main', 'home']})}</th>
                            <td>{formData.isHeadofHousehold ? "Yes" : "No"}</td>
                        </tr>
                        </tbody>
                    </Table>
                </GridContainer>
                <br/>

                <br/>
                <GridContainer>
                    <Table
                        striped
                        caption={ "W2 " + t("form", {ns: ['main', 'home']})}
                        fullWidth
                        fixed
                        className="bg-accent-warm-light"
                        >
                        <thead>
                        <tr>
                            <th scope="col">{t("fields", {ns: ['main', 'home']})}</th>
                            <th scope="col">{t("infoInput", {ns: ['main', 'home']})}</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th scope="row">EIN</th>
                            <td>{formData.ein}</td>
                        </tr>
                        <tr>
                            <th scope="row">{t("wagesTips", {ns: ['main', 'home']})}</th>
                            <td>${formData.wagesTips}</td>
                        </tr>
                        <tr>
                            <th scope="row">{t("totalComp", {ns: ['main', 'home']})}</th>
                            <td>${formData.w2TotalComp}</td>
                        </tr>
                        <tr>
                            <th scope="row">{t("ssWithheld", {ns: ['main', 'home']})}</th>
                            <td>${formData.ssWithheld}</td>
                        </tr>
                        <tr>
                            <th scope="row">{t("medicareWithheld", {ns: ['main', 'home']})}</th>
                            <td>${formData.medicareWithheld}</td>
                        </tr>
                        <tr>
                            <th scope="row">{t("federalTaxWithheld", {ns: ['main', 'home']})}</th>
                            <td>${formData.federalTaxWithheld}</td>
                        </tr>
                        </tbody>
                    </Table>
                </GridContainer>
                <br/>

                <br/>
                <GridContainer>
                    <Table
                        striped
                        caption={ "1099 " + t("form", {ns: ['main', 'home']})}
                        fullWidth
                        fixed
                        className="bg-accent-warm"
                        >
                        <thead>
                        <tr>
                            <th scope="col">{t("fields", {ns: ['main', 'home']})}</th>
                            <th scope="col">{t("infoInput", {ns: ['main', 'home']})}</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th scope="row">Social Security Number / EIN</th>
                            <td>{formData.ssnOrEin}</td>
                        </tr>
                        <tr>
                            <th scope="row">{t("totalComp", {ns: ['main', 'home']})}</th>
                            <td>${formData.ten99TotalComp}</td>
                        </tr>
                        </tbody>
                    </Table>
                </GridContainer>
                <br/><br/>

                <Link to={"/household_income"}><Button type="button" size="big" style={{textAlign: "left"}}>{t("back", {ns: ['main', 'home']})}</Button></Link>
                <Link to={"/tax_estimate"}><Button type="button" size="big" style={{float: "right"}}>{t("getTaxEstimate", {ns: ['main', 'home']})}</Button></Link>
            </GridContainer>
            <FooterComp />
        </>
    )
}