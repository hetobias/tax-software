import { Address, Button, ExtendedNav, Footer, FooterNav, GovBanner, Grid, GridContainer, Header, Icon, IconList, IconListContent, IconListIcon, IconListItem, IconListTitle, Logo, MediaBlockBody, Menu, NavDropDownButton, NavMenuButton, ProcessList, ProcessListHeading, ProcessListItem, Search, SocialLink, SocialLinks, Title } from "@trussworks/react-uswds"
import { useState } from "react"

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
          <Button type="button">Login</Button>,
          <Button type="button" accentStyle="cool">Create Account</Button>
        ]
      
        const returnToTop = (
          <GridContainer className="usa-footer__return-to-top">
            <a href="#">Return to top</a>
          </GridContainer>
        )
      
        const socialLinkItems = [
          <SocialLink key="facebook" name="Facebook" href="#" />,
          <SocialLink key="twitter" name="Twitter" href="#" />,
          <SocialLink key="youtube" name="YouTube" href="#" />,
          <SocialLink key="instagram" name="Instagram" href="#" />,
          <SocialLink key="rss" name="RSS" href="#" />,
        ]
      
        const footerPrimary = (
          <FooterNav
            aria-label="Footer navigation"
            size="medium"
            links={Array(5).fill(
              <a href="javascript:void(0)" className="usa-footer__primary-link">
                Primary link
              </a>
            )}
          />
        )
      
        const footerSecondary = (
          <>
            <Grid row gap>
              <Logo
                size="medium"
                image={<img className="usa-footer__logo-img" src={"./20945248.jpg"} alt="" />}
                heading={<p className="usa-footer__logo-heading">Name of Agency</p>}
              />
              <Grid className="usa-footer__contact-links" mobileLg={{ col: 6 }}>
                <SocialLinks links={socialLinkItems} />
                <h3 className="usa-footer__contact-heading">Agency Contact Center</h3>
                <Address
                  size="medium"
                  items={[
                    <a key="telephone" href="tel:1-800-555-5555">
                      (800) CALL-GOVT
                    </a>,
                    <a key="email" href="mailto:info@agency.gov">
                      info@agency.gov
                    </a>,
                  ]}
                />
              </Grid>
            </Grid>
          </>
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
                <Button type="button" size="big" accentStyle="cool">Get Started Today</Button>
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
              returnToTop={returnToTop}
              primary={footerPrimary}
              secondary={footerSecondary}
            />
          </>
        )
}