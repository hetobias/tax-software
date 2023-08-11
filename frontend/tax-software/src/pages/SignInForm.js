import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Button, Fieldset, Form, Label, TextInput } from "@trussworks/react-uswds";
import React from "react";
import { Link } from "react-router-dom";
import HeaderComp from "../components/HeaderComp";
import { useTranslation } from "react-i18next";
export default function SignInForm() {
    const { t } = useTranslation(['main', 'home']);
    const [showPassword, setShowPassword] = React.useState(false);
    function handleSubmit() {
        // event.preventDefault();
        // const signIn = {
        //     usernameOrEmail: usernameOrEmail,
        //     password: password
        // };
    }
    return (_jsxs(_Fragment, { children: [_jsx(HeaderComp, {}), _jsx("div", { style: { display: "flex", justifyContent: "center", marginTop: "10em" }, children: _jsx("div", { style: { maxWidth: "35em", minHeight: "100vh" }, children: _jsx(Form, { onSubmit: handleSubmit, large: true, style: { minWidth: "100vw", minHeight: "100vh" }, children: _jsxs(Fieldset, { legend: t("signIn", { ns: ['main', 'home'] }), legendStyle: "large", children: [_jsxs("span", { children: [t("or", { ns: ['main', 'home'] }), " ", _jsx(Link, { to: "/create_account", children: t("createAccount", { ns: ['main', 'home'] }) })] }), _jsx(Label, { htmlFor: "username", children: t("email", { ns: ['main', 'home'] }) }), _jsx(TextInput, { id: "username", name: "username", type: "text", autoCapitalize: "off", autoCorrect: "off", style: { maxWidth: "35em" } }), _jsx(Label, { htmlFor: "password-sign-in", children: t("password", { ns: ['main', 'home'] }) }), _jsx(TextInput, { id: "password-sign-in", name: "password-sign-in", type: showPassword ? 'text' : 'password', style: { maxWidth: "35em" } }), _jsx("div", { style: { maxWidth: "35em" }, children: _jsx("p", { className: "usa-form__note", children: _jsx("a", { title: "Show password", href: "javascript:void(0);", className: "usa-show-password", "aria-controls": "password-sign-in", onClick: () => setShowPassword((showPassword) => !showPassword), children: t(showPassword ? 'hidePass' : 'showPass', { ns: ['main', 'home'] }) }) }) }), _jsx(Link, { to: "/personal_information", children: _jsx(Button, { type: "submit", children: t("signIn", { ns: ['main', 'home'] }) }) })] }) }) }) })] }));
}
