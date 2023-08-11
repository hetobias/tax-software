import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Button, ExtendedNav, Header, NavMenuButton } from "@trussworks/react-uswds";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
export default function HeaderComp() {
    const { t, i18n } = useTranslation(['home', 'main']);
    const onClickLanguageChange = (lng) => {
        i18n.changeLanguage(lng); // change the language
    };
    const [mobileNavOpen, setMobileNavOpen] = useState(false);
    const [expanded, setExpanded] = useState(false);
    const onClick = () => setExpanded((prvExpanded) => !prvExpanded);
    const toggleMobileNav = () => {
        setMobileNavOpen((prevOpen) => !prevOpen);
    };
    const primaryNavItems = [
        _jsxs("div", { children: [_jsx(Button, { type: "button", onClick: () => onClickLanguageChange("en"), children: "English" }), _jsx(Button, { type: "button", onClick: () => onClickLanguageChange("es"), children: "Spanish" }), _jsx(Button, { type: "button", onClick: () => onClickLanguageChange("ko"), children: "Korean" }), _jsx(Button, { type: "button", onClick: () => onClickLanguageChange("zh"), children: "Chinese" }), _jsx(Link, { to: "/user", children: _jsx(Button, { type: "button", children: "User Page" }) })] })
    ];
    const secondaryNavItems = [
        _jsx(Link, { to: "/sign_in", children: _jsx(Button, { type: "button", children: t("signIn", { ns: ['main', 'home'] }) }) }),
        _jsx(Link, { to: "/create_account", children: _jsx(Button, { type: "button", accentStyle: "cool", children: t("createAccount", { ns: ['main', 'home'] }) }) })
    ];
    return (_jsxs(_Fragment, { children: [_jsx("div", { className: `usa-overlay ${expanded ? 'is-visible' : ''}` }), _jsxs(Header, { extended: true, children: [_jsxs("div", { className: "usa-navbar", children: [_jsx("br", {}), _jsx(Link, { to: "/", children: _jsx("img", { src: "./TaxGenius Logo.png", alt: "Tax Genius" }) }), _jsx(NavMenuButton, { onClick: onClick, label: "Menu" })] }), _jsx(ExtendedNav, { "aria-label": "Primary navigation", primaryItems: primaryNavItems, secondaryItems: secondaryNavItems, onToggleMobileNav: toggleMobileNav, mobileExpanded: mobileNavOpen })] })] }));
}
