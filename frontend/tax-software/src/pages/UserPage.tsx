import { Button, GridContainer, StepIndicator, StepIndicatorStep } from "@trussworks/react-uswds";
import HeaderComp from "../components/HeaderComp";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next"

export default function UserPage() {

    const { t, i18n } = useTranslation(['home', 'main']);

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
        </>
    )
}