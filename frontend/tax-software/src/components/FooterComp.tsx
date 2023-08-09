import { Address, Footer, GridContainer, Logo } from "@trussworks/react-uswds"
import { useTranslation } from "react-i18next"

export default function FooterComp() {

    const { t } = useTranslation(['main', 'home']); 

    const returnToTop = (
        <GridContainer className="usa-footer__return-to-top">
          <a href="#">{t("returnToTop", {ns: ['main', 'home']})}</a>
        </GridContainer>
      )
      
    return (
        <>
            <Footer
              size="slim"
              returnToTop={returnToTop}
              primary={
                <div className="usa-footer__primary-container grid-row">

                  <div className="tablet:grid-col-4">
                    <Address
                      size="slim"
                      items={[
                        <a>
                          {t("headerLine", {ns: ['main', 'home']})}
                        </a>
                      ]}
                    />
                  </div>

                </div>
              }
              secondary={
                <Logo
                  size="slim"
                  image={
                    <img
                      className="usa-footer__logo-img"
                      alt="gear"
                      src={"./gear.png"}
                    />
                  }
                  heading={<p className="usa-footer__logo-heading">{t("taxGenius", {ns: ['main', 'home']})}</p>}
                />
              }
            />
        </>
    )
}