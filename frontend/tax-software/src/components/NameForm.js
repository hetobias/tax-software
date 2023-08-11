import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
// @ts-nocheck
import { Fieldset, Form, GridContainer, Label, TextInput } from "@trussworks/react-uswds";
import { useTranslation } from "react-i18next";
export default function NameForm({ firstName, setFirstName, middleName, setMiddleName, lastName, setLastName }) {
    const { t, i18n } = useTranslation(['home', 'main']);
    function handleSubmit() {
        // event.preventDefault();
    }
    return (_jsx(_Fragment, { children: _jsx(GridContainer, { children: _jsx("div", { style: { backgroundColor: "white", boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", borderRadius: "8px", padding: "2em" }, children: _jsx(Form, { onSubmit: handleSubmit, children: _jsxs(Fieldset, { legend: t("name", { ns: ['main', 'home'] }), legendStyle: "large", style: { minWidth: "25vw" }, children: [_jsxs("div", { children: [_jsxs(Label, { htmlFor: "first-name", children: [t("firstName", { ns: ['main', 'home'] }), ' ', _jsx("abbr", { title: "required", className: "usa-hint usa-hint--required", children: "*" })] }), _jsx("span", { className: "usa-hint", children: t("exampleFirstName", { ns: ['main', 'home'] }) }), _jsx(TextInput, { id: "first-name", name: "first-name", type: "text", value: firstName, onChange: (e) => setFirstName(e.target.value) })] }), _jsxs("div", { children: [_jsx(Label, { htmlFor: "middle-name", children: t("middleName", { ns: ['main', 'home'] }) }), _jsx(TextInput, { id: "middle-name", name: "middle-name", type: "text", value: middleName, onChange: (e) => setMiddleName(e.target.value) })] }), _jsxs("div", { children: [_jsxs(Label, { htmlFor: "last-name", children: [t("lastName", { ns: ['main', 'home'] }), ' ', _jsx("abbr", { title: "required", className: "usa-hint usa-hint--required", children: "*" })] }), _jsx("span", { className: "usa-hint", children: t("exampleLastName", { ns: ['main', 'home'] }) }), _jsx(TextInput, { id: "last-name", name: "last-name", type: "text", value: lastName, onChange: (e) => setLastName(e.target.value) })] })] }) }) }) }) }));
}
