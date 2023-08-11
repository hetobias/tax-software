import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { Address, Footer, GridContainer, Logo } from "@trussworks/react-uswds";
import { useTranslation } from "react-i18next";
export default function FooterComp() {
    const { t } = useTranslation(['main', 'home']);
    const returnToTop = (_jsx(GridContainer, { className: "usa-footer__return-to-top", children: _jsx("a", { href: "#", children: t("returnToTop", { ns: ['main', 'home'] }) }) }));
    return (_jsx(_Fragment, { children: _jsx(Footer, { size: "slim", returnToTop: returnToTop, primary: _jsx("div", { className: "usa-footer__primary-container grid-row", children: _jsx("div", { className: "tablet:grid-col-4", children: _jsx(Address, { size: "slim", items: [
                            _jsx("a", { children: t("headerLine", { ns: ['main', 'home'] }) })
                        ] }) }) }), secondary: _jsx(Logo, { size: "slim", image: _jsx("img", { className: "usa-footer__logo-img", alt: "gear", src: "./gear.png" }), heading: _jsx("p", { className: "usa-footer__logo-heading", children: t("taxGenius", { ns: ['main', 'home'] }) }) }) }) }));
}
