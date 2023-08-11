import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
// @ts-nocheck
import { Dropdown, Fieldset, Form, GridContainer, Label, TextInput } from "@trussworks/react-uswds";
import { useTranslation } from "react-i18next";
export default function AddressForm({ streetAddress, setStreetAddress, streetAddress2, setStreetAddress2, state, setState, city, setCity, zip, setZip }) {
    const { t, i18n } = useTranslation(['home', 'main']);
    const handleCityChange = (event) => {
        const newValue = event.target.value.replace(/[0-9]/g, '');
        setCity(newValue); // Using the destructured setters directly
    };
    const handleZipChange = (event) => {
        const newValue = event.target.value.replace(/[^0-9]/g, '');
        setZip(newValue); // Using the destructured setters directly
    };
    function handleSubmit() {
        // event.preventDefault();
    }
    return (_jsx(_Fragment, { children: _jsx(GridContainer, { children: _jsx("div", { style: { backgroundColor: "white", boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", borderRadius: "8px", padding: "2em" }, children: _jsx(Form, { onSubmit: handleSubmit, large: true, children: _jsxs(Fieldset, { legend: t("address", { ns: ['main', 'home'] }), legendStyle: "large", style: { minWidth: "25vw" }, children: [_jsxs("p", { children: [t("requiredFields", { ns: ['main', 'home'] }), " (", _jsx("abbr", { title: "required", className: "usa-hint usa-hint--required", children: "*" }), ")."] }), _jsxs(Label, { htmlFor: "mailing-address-1", children: [t("streetAddress", { ns: ['main', 'home'] }), ' ', _jsx("abbr", { title: "required", className: "usa-hint usa-hint--required", children: "*" })] }), _jsx(TextInput, { id: "mailing-address-1", name: "mailing-address-1", type: "text", value: streetAddress, onChange: (e) => setStreetAddress(e.target.value) }), _jsx(Label, { htmlFor: "mailing-address-2", children: t("streetAddress2", { ns: ['main', 'home'] }) }), _jsx(TextInput, { id: "mailing-address-2", name: "mailing-address-2", type: "text", value: streetAddress2, onChange: (e) => setStreetAddress2(e.target.value) }), _jsxs(Label, { htmlFor: "city", children: [t("city", { ns: ['main', 'home'] }), ' ', _jsx("abbr", { title: "required", className: "usa-hint usa-hint--required", children: "*" })] }), _jsx(TextInput, { id: "city", name: "city", type: "text", value: city, onChange: handleCityChange, required: true }), _jsxs(Label, { htmlFor: "state", children: [t("state", { ns: ['main', 'home'] }), ' ', _jsx("abbr", { title: "required", className: "usa-hint usa-hint--required", children: "*" })] }), _jsxs(Dropdown, { id: "state", name: "state", value: state, onChange: (e) => setState(e.target.value), required: true, children: [_jsxs("option", { children: ["- ", t("select", { ns: ['main', 'home'] }), " -"] }), _jsx("option", { value: "AL", children: "Alabama" }), _jsx("option", { value: "AK", children: "Alaska" }), _jsx("option", { value: "AZ", children: "Arizona" }), _jsx("option", { value: "AR", children: "Arkansas" }), _jsx("option", { value: "CA", children: "California" }), _jsx("option", { value: "CO", children: "Colorado" }), _jsx("option", { value: "CT", children: "Connecticut" }), _jsx("option", { value: "DE", children: "Delaware" }), _jsx("option", { value: "DC", children: "District of Columbia" }), _jsx("option", { value: "FL", children: "Florida" }), _jsx("option", { value: "GA", children: "Georgia" }), _jsx("option", { value: "HI", children: "Hawaii" }), _jsx("option", { value: "ID", children: "Idaho" }), _jsx("option", { value: "IL", children: "Illinois" }), _jsx("option", { value: "IN", children: "Indiana" }), _jsx("option", { value: "IA", children: "Iowa" }), _jsx("option", { value: "KS", children: "Kansas" }), _jsx("option", { value: "KY", children: "Kentucky" }), _jsx("option", { value: "LA", children: "Louisiana" }), _jsx("option", { value: "ME", children: "Maine" }), _jsx("option", { value: "MD", children: "Maryland" }), _jsx("option", { value: "MA", children: "Massachusetts" }), _jsx("option", { value: "MI", children: "Michigan" }), _jsx("option", { value: "MN", children: "Minnesota" }), _jsx("option", { value: "MS", children: "Mississippi" }), _jsx("option", { value: "MO", children: "Missouri" }), _jsx("option", { value: "MT", children: "Montana" }), _jsx("option", { value: "NE", children: "Nebraska" }), _jsx("option", { value: "NV", children: "Nevada" }), _jsx("option", { value: "NH", children: "New Hampshire" }), _jsx("option", { value: "NJ", children: "New Jersey" }), _jsx("option", { value: "NM", children: "New Mexico" }), _jsx("option", { value: "NY", children: "New York" }), _jsx("option", { value: "NC", children: "North Carolina" }), _jsx("option", { value: "ND", children: "North Dakota" }), _jsx("option", { value: "OH", children: "Ohio" }), _jsx("option", { value: "OK", children: "Oklahoma" }), _jsx("option", { value: "OR", children: "Oregon" }), _jsx("option", { value: "PA", children: "Pennsylvania" }), _jsx("option", { value: "RI", children: "Rhode Island" }), _jsx("option", { value: "SC", children: "South Carolina" }), _jsx("option", { value: "SD", children: "South Dakota" }), _jsx("option", { value: "TN", children: "Tennessee" }), _jsx("option", { value: "TX", children: "Texas" }), _jsx("option", { value: "UT", children: "Utah" }), _jsx("option", { value: "VT", children: "Vermont" }), _jsx("option", { value: "VA", children: "Virginia" }), _jsx("option", { value: "WA", children: "Washington" }), _jsx("option", { value: "WV", children: "West Virginia" }), _jsx("option", { value: "WI", children: "Wisconsin" }), _jsx("option", { value: "WY", children: "Wyoming" }), _jsx("option", { value: "AA", children: "AA - Armed Forces Americas" }), _jsx("option", { value: "AE", children: "AE - Armed Forces Africa" }), _jsx("option", { value: "AE", children: "AE - Armed Forces Canada" }), _jsx("option", { value: "AE", children: "AE - Armed Forces Europe" }), _jsx("option", { value: "AE", children: "AE - Armed Forces Middle East" }), _jsx("option", { value: "AP", children: "AP - Armed Forces Pacific" })] }), _jsx(Label, { htmlFor: "zip", children: t("zip", { ns: ['main', 'home'] }) }), _jsx(TextInput, { id: "zip", name: "zip", type: "text", inputSize: "medium", pattern: "[\\d]{5}(-[\\d]{4})?", value: zip, onChange: handleZipChange })] }) }) }) }) }));
}
