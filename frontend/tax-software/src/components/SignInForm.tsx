import { Button, Fieldset, Form, Label, TextInput } from "@trussworks/react-uswds"
import React from "react"
import { Link } from "react-router-dom"
import HeaderComp from "./HeaderComp"
import { useTranslation } from "react-i18next"

export default function SignInForm() {

    const { t } = useTranslation(['main', 'home']); 

    const [showPassword, setShowPassword] = React.useState(false)

    function handleSubmit() {
        // event.preventDefault();

        // const signIn = {
        //     usernameOrEmail: usernameOrEmail,
        //     password: password
        // };
    }

    return (
        <>
            <HeaderComp />
            <div style={{ display: "flex", justifyContent: "center", marginTop: "10em"}}>
                <div style={{ maxWidth: "35em", minHeight: "100vh"}}>
                    <Form onSubmit={handleSubmit} large style={{minWidth: "100vw", minHeight: "100vh"}}>
                        <Fieldset legend={t("signIn", {ns: ['main', 'home']})} legendStyle="large" >
                        <span>
                        {t("or", {ns: ['main', 'home']})} <Link to="/createaccount">{t("createAccount", {ns: ['main', 'home']})}</Link>
                        </span>
                        <Label htmlFor="username">{t("email", {ns: ['main', 'home']})}</Label>
                        <TextInput
                            id="username"
                            name="username"
                            type="text"
                            autoCapitalize="off"
                            autoCorrect="off"
                            style={{maxWidth: "35em"}}
                        />
                        <Label htmlFor="password-sign-in">{t("password", {ns: ['main', 'home']})}</Label>
                        <TextInput
                            id="password-sign-in"
                            name="password-sign-in"
                            type={showPassword ? 'text' : 'password'}
                            style={{maxWidth: "35em"}}
                        />
                        <div style={{maxWidth: "35em"}}>
                        <p className="usa-form__note">
                            <a
                            title="Show password"
                            href="javascript:void(0);"
                            className="usa-show-password"
                            aria-controls="password-sign-in"
                            onClick={(): void =>
                                setShowPassword((showPassword) => !showPassword)
                            }>
                            {t(showPassword ? 'hidePass' : 'showPass', { ns: ['main', 'home'] })}
                            </a>
                        </p>
                        </div>
                
                        <Button type="submit">{t("signIn", {ns: ['main', 'home']})}</Button>

                        </Fieldset>
                    </Form>
                </div>
            </div>
        </>


    )
}