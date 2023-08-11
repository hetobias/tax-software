import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
// @ts-nocheck
import { Button, GridContainer, ProcessList, ProcessListHeading, ProcessListItem } from "@trussworks/react-uswds";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import HeaderComp from "../components/HeaderComp";
import FooterComp from "../components/FooterComp";
export default function Home() {
    const { t } = useTranslation(['main', 'home']);
    return (_jsxs(_Fragment, { children: [_jsx(HeaderComp, {}), _jsxs("main", { id: "main-content", children: [_jsx("section", { children: _jsx(GridContainer, { children: _jsx("img", { className: "usa-media-block__img", src: t("landingImage", { ns: ['main', 'home'] }), alt: "Alt text" }) }) }), _jsx("div", { style: { marginTop: '32px', textAlign: 'center' }, children: _jsx(GridContainer, { children: _jsx(Link, { to: "/sign_in", children: _jsx(Button, { type: "button", size: "big", accentStyle: "cool", children: t("getStartedToday", { ns: ['main', 'home'] }) }) }) }) }), _jsx("section", { children: _jsx(GridContainer, { children: _jsx(GridContainer, { children: _jsxs(ProcessList, { children: [_jsx(ProcessListItem, { className: "padding-bottom-4", children: _jsx(ProcessListHeading, { type: "p", className: "font-sans-xl line-height-sans-1", children: t("main1", { ns: ['main', 'home'] }) }) }), _jsx(ProcessListItem, { className: "padding-bottom-4", children: _jsx(ProcessListHeading, { type: "p", className: "font-sans-xl line-height-sans-1", children: t("main2", { ns: ['main', 'home'] }) }) }), _jsx(ProcessListItem, { children: _jsx(ProcessListHeading, { type: "p", className: "font-sans-xl line-height-sans-1", children: t("main3", { ns: ['main', 'home'] }) }) })] }) }) }) })] }), _jsx(FooterComp, {})] }));
}
