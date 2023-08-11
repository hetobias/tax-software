import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
// @ts-nocheck
import { Button, GridContainer } from "@trussworks/react-uswds";
import { useTranslation } from "react-i18next";
export default function TaxChoice({ onTaxChoice }) {
    const { t, i18n } = useTranslation(['home', 'main']);
    const handleTaxChoice = (choice) => {
        onTaxChoice(choice);
    };
    return (_jsx(_Fragment, { children: _jsxs(GridContainer, { children: [_jsx("br", {}), _jsxs("div", { style: { backgroundColor: "white", boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", borderRadius: "8px", padding: "2em" }, children: [_jsx("h2", { style: { textAlign: "center", marginTop: "2rem" }, children: t("TaxChoiceQuestion", { ns: ['main', 'home'] }) }), _jsxs("div", { style: { display: "flex", justifyContent: "space-evenly", margin: "5rem" }, children: [_jsx(Button, { type: "button", size: "big", accentStyle: "cool", onClick: () => handleTaxChoice("w2"), children: "W2" }), _jsx(Button, { type: "button", size: "big", accentStyle: "cool", onClick: () => handleTaxChoice("1099"), children: "1099" })] })] }), _jsx("br", {})] }) }));
}
