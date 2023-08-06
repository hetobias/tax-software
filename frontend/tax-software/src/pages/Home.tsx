import { Address, Button, Footer, GridContainer, Logo, ProcessList, ProcessListHeading, ProcessListItem } from "@trussworks/react-uswds"
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
import HeaderComp from "../components/HeaderComp"

export default function Home() {

        const { t } = useTranslation(['main', 'home']); 
      
        const returnToTop = (
          <GridContainer className="usa-footer__return-to-top">
            <a href="#">{t("returnToTop", {ns: ['main', 'home']})}</a>
          </GridContainer>
        )

        return (
          <>
            <HeaderComp />
      
            <main id="main-content">

            <section>
              <GridContainer>
                <img className="usa-media-block__img" src={"./TaxGenius_Landing.png"} alt="Alt text"></img>
              </GridContainer>
            </section>

            <div style={{ marginTop: '32px', textAlign: 'center' }}>
              <GridContainer>
              <Link to="signin"><Button type="button" size="big" accentStyle="cool">{t("getStartedToday", {ns: ['main', 'home']})}</Button></Link>
              </GridContainer>
            </div>

            <section>
                <GridContainer>
                  <GridContainer>
                      <ProcessList>
                      <ProcessListItem className="padding-bottom-4">
                        <ProcessListHeading type="p" className="font-sans-xl line-height-sans-1">
                        {t("main1", {ns: ['main', 'home']})}
                        </ProcessListHeading>
                      </ProcessListItem>
                      <ProcessListItem className="padding-bottom-4">
                        <ProcessListHeading type="p" className="font-sans-xl line-height-sans-1">
                        {t("main2", {ns: ['main', 'home']})}
                        </ProcessListHeading>
                      </ProcessListItem>
                      <ProcessListItem>
                        <ProcessListHeading type="p" className="font-sans-xl line-height-sans-1">
                        {t("main3", {ns: ['main', 'home']})}
                        </ProcessListHeading>
                      </ProcessListItem>
                    </ProcessList>
                  </GridContainer>
                </GridContainer>
              </section>

            </main>
      
            <Footer
              size="slim"
              returnToTop={returnToTop}
              primary={
                <div className="usa-footer__primary-container grid-row">

                  <div className="tablet:grid-col-4">
                    <Address
                      size="slim"
                      items={[
                        <a key="telephone" href="tel:1-800-555-5555">
                          (800) CALL-GOVT
                        </a>,
                        <a key="email" href="mailto:info@agency.gov">
                          info@agency.gov
                        </a>,
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