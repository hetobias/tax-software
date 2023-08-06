import { Button, ExtendedNav, Header, NavMenuButton } from "@trussworks/react-uswds";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next"

export default function HeaderComp() {

    const { t, i18n } = useTranslation(['home', 'main']);

    const onClickLanguageChange = (lng: string) => {
      i18n.changeLanguage(lng);    // change the language
    }
    

    const [mobileNavOpen, setMobileNavOpen] = useState(false)
    const [expanded, setExpanded] = useState(false)
    const onClick = (): void => setExpanded((prvExpanded) => !prvExpanded)
  
    const toggleMobileNav = (): void => {
      setMobileNavOpen((prevOpen) => !prevOpen)
    }
  
  
    const primaryNavItems = [
    // <a>Get your Tax Estimates with Tax Genius!</a>
    <div>

        <Button type="button" onClick={() => onClickLanguageChange("en")}>English</Button>
        <Button type="button" onClick={() => onClickLanguageChange("es")}>Spanish</Button>
        <Button type="button" onClick={() => onClickLanguageChange("ko")}>Korean</Button>
        <Button type="button" onClick={() => onClickLanguageChange("zh")}>Chinese</Button>

    </div>
    ]
  
    const secondaryNavItems = [
      <Link to="signin"><Button type="button">{t("signIn", {ns: ['main', 'home']})}</Button></Link>,
      <Link to="createaccount"><Button type="button" accentStyle="cool">{t("createAccount", {ns: ['main', 'home']})}</Button></Link>
    ]

    return (
        <>
            <div className={`usa-overlay ${expanded ? 'is-visible' : ''}`}></div>
            <Header extended={true}>
                <div className="usa-navbar">
                  <br/>
                <Link to="/"><img src={"./TaxGenius Logo.png"} alt="Tax Genius"/></Link>
                <NavMenuButton onClick={onClick} label="Menu" />
            </div>
              <ExtendedNav
                aria-label="Primary navigation"
                primaryItems={primaryNavItems}
                secondaryItems={secondaryNavItems}
                onToggleMobileNav={toggleMobileNav}
                mobileExpanded={mobileNavOpen}>

              </ExtendedNav>
            </Header>
        </>
    )
}