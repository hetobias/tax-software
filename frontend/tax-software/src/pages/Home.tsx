import { Address, Button, ExtendedNav, Footer, GridContainer, Header, Logo, NavMenuButton, ProcessList, ProcessListHeading, ProcessListItem } from "@trussworks/react-uswds"
import { useState } from "react"
import { Link } from "react-router-dom";

export default function Home() {

        const [mobileNavOpen, setMobileNavOpen] = useState(false)
        const [expanded, setExpanded] = useState(false)
        const onClick = (): void => setExpanded((prvExpanded) => !prvExpanded)
      
        const toggleMobileNav = (): void => {
          setMobileNavOpen((prevOpen) => !prevOpen)
        }
      
      
        const primaryNavItems = [
        <a>Get your Tax Estimates with Tax Genius!</a>
        ]
      
        const secondaryNavItems = [
          <Link to="signin"><Button type="button">Sign In</Button></Link>,
          <Link to="createaccount"><Button type="button" accentStyle="cool">Create Account</Button></Link>
        ]
      
        const returnToTop = (
          <GridContainer className="usa-footer__return-to-top">
            <a href="#">Return to top</a>
          </GridContainer>
        )

        return (
          <>

            <div className={`usa-overlay ${expanded ? 'is-visible' : ''}`}></div>
            <Header extended={true}>
                <div className="usa-navbar">
                  <br/>
                <img src={"./TaxGenius Logo.png"} alt="Tax Genius"/>
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
      
            <main id="main-content">

            <section>
              <GridContainer>
                <img className="usa-media-block__img" src={"./TaxGenius_Landing.png"} alt="Alt text"></img>
              </GridContainer>
            </section>

            <div style={{ marginTop: '32px', textAlign: 'center' }}>
              <GridContainer>
              <Link to="signin"><Button type="button" size="big" accentStyle="cool">Get Started Today</Button></Link>
              </GridContainer>
            </div>

            <section>
                <GridContainer>
                  <GridContainer>
                      <ProcessList>
                      <ProcessListItem className="padding-bottom-4">
                        <ProcessListHeading type="p" className="font-sans-xl line-height-sans-1">
                          Login or Create an Account.
                        </ProcessListHeading>
                      </ProcessListItem>
                      <ProcessListItem className="padding-bottom-4">
                        <ProcessListHeading type="p" className="font-sans-xl line-height-sans-1">
                          Fill in your Information.
                        </ProcessListHeading>
                      </ProcessListItem>
                      <ProcessListItem>
                        <ProcessListHeading type="p" className="font-sans-xl line-height-sans-1">
                        Review...and Get your Tax Estimate!
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
                  heading={<p className="usa-footer__logo-heading">Tax Genius</p>}
                />
              }
            />
          </>
        )
}