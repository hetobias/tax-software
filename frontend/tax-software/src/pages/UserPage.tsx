import { Button, GridContainer, StepIndicator, StepIndicatorStep, Table } from "@trussworks/react-uswds";
import HeaderComp from "../components/HeaderComp";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next"
import FooterComp from "../components/FooterComp";
import { useFormData } from "../FormDataContext";

export default function UserPage() {

    const { t, i18n } = useTranslation(['home', 'main']);

    const { formData } = useFormData();

    return (
        <>
            <HeaderComp />
                <br/>
                <GridContainer>
                    <h1 style={{textAlign: "center"}}>Welcome to your User Page!</h1>
                    <br/>
                    <div style={{textAlign: "center"}}>
                        <Link to="/personal_information">
                            <Button type="button" size="big" accentStyle="cool">{t("getStartedToday", {ns: ['main', 'home']})}</Button>
                        </Link>
                    </div>
                </GridContainer>
                <GridContainer>
                    <Table
                        striped
                        caption={t("personalInfo", {ns: ['main', 'home']}) + " & " + t("filingStatus", {ns: ['main', 'home']})}
                        fullWidth
                        fixed
                        className="bg-accent-cool-lighter"
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
                <GridContainer>
                    <Table
                        striped
                        caption={ "W2 " + t("form", {ns: ['main', 'home']})}
                        fullWidth
                        fixed
                        className="bg-accent-cool-lighter"
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
                <GridContainer>
                    <Table
                        striped
                        caption={ "1099 " + t("form", {ns: ['main', 'home']})}
                        fullWidth
                        fixed
                        className="bg-accent-cool-lighter"
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
                <br/>
                <FooterComp />

                
        </>
    )
}