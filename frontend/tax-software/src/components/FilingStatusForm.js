import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
// @ts-nocheck
import { Fieldset, GridContainer, Radio } from "@trussworks/react-uswds";
import { useTranslation } from "react-i18next";
export default function FilingStatusForm({ singleOrMarried, setSingleOrMarried, jointlyOrSingle, setJointlyOrSingle, isHeadofHousehold, setIsHeadofHousehold, hasDependent, setHasDependent, dependentInputValue, setDependentInputValue }) {
    const { t, i18n } = useTranslation(['home', 'main']);
    const handleInputChange = (event) => {
        const newValue = event.target.value.replace(/[^0-9]/g, '').slice(0, 2);
        setDependentInputValue(newValue);
    };
    const handleNoDependentChange = (value) => {
        if (value === false) {
            setDependentInputValue("");
        }
    };
    return (_jsx(_Fragment, { children: _jsx(GridContainer, { children: _jsx("div", { style: { backgroundColor: "white", boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", borderRadius: "8px", padding: "2em" }, children: _jsxs(Fieldset, { legend: t("filingStatus", { ns: ['main', 'home'] }), legendStyle: "large", style: { minWidth: "25vw" }, children: [_jsx("br", {}), _jsxs("div", { children: [_jsx("h3", { children: t("singleOrMarriedQuestion", { ns: ['main', 'home'] }) }), _jsx(Radio, { id: "single", name: "married-single", label: t("single", { ns: ['main', 'home'] }), value: "single", checked: singleOrMarried === "single", onChange: () => setSingleOrMarried("single") }), _jsx(Radio, { id: "married", name: "married-single", label: t("married", { ns: ['main', 'home'] }), value: "married", checked: singleOrMarried === "married", onChange: () => setSingleOrMarried("married") })] }), _jsx("br", {}), singleOrMarried === "married" && (_jsxs("div", { children: [_jsx("h3", { children: t("fileJointOrSingleQuestion", { ns: ['main', 'home'] }) }), _jsx(Radio, { id: "single1", name: "joint-single", label: t("single", { ns: ['main', 'home'] }), value: "single", onChange: () => setJointlyOrSingle("single") }), _jsx(Radio, { id: "joint", name: "joint-single", label: t("joint", { ns: ['main', 'home'] }), value: "joint", onChange: () => setJointlyOrSingle("joint") }), _jsx("br", {})] })), singleOrMarried === "single" && (_jsxs("div", { children: [_jsx("h3", { children: t("headOfHouseholdQuestion", { ns: ['main', 'home'] }) }), _jsx(Radio, { id: "yes", name: "head-of-household", label: t("yes", { ns: ['main', 'home'] }), value: "yes", onChange: () => setIsHeadofHousehold(true) }), _jsx(Radio, { id: "no", name: "head-of-household", label: t("no", { ns: ['main', 'home'] }), value: "no", onChange: () => setIsHeadofHousehold(false) })] }))] }) }) }) }));
}
