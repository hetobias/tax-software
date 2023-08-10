import { Dropdown, Fieldset, Form, GridContainer, Label, TextInput } from "@trussworks/react-uswds";
import { useTranslation } from "react-i18next"

export default function AddressForm({
    streetAddress, 
    setStreetAddress,
    streetAddress2, 
    setStreetAddress2,
    state, 
    setState,
    city, 
    setCity,
    zip,
    setZip
}) {

    const { t, i18n } = useTranslation(['home', 'main']);



    const handleCityChange = (event) => {
        const newValue = event.target.value.replace(/[0-9]/g, '');
        setCity(newValue);  // Using the destructured setters directly
    }

    const handleZipChange = (event) => {
        const newValue = event.target.value.replace(/[^0-9]/g, '');
        setZip(newValue); // Using the destructured setters directly
    }

    function handleSubmit() {
        // event.preventDefault();

    }
    return (
        <>
        <GridContainer>
            <div style={{backgroundColor: "white", boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", borderRadius: "8px", padding: "2em"}}>
            <Form onSubmit={handleSubmit} large>
                <Fieldset legend={t("address", {ns: ['main', 'home']})} legendStyle="large" style={{minWidth: "25vw"}}>
                        <p>
                            {t("requiredFields", {ns: ['main', 'home']})} (
                            <abbr title="required" className="usa-hint usa-hint--required">
                            *
                            </abbr>
                            ).
                        </p>
                        <Label htmlFor="mailing-address-1">{t("streetAddress", {ns: ['main', 'home']})}{' '}
                            <abbr title="required" className="usa-hint usa-hint--required">
                            *
                            </abbr></Label>
                        <TextInput 
                            id="mailing-address-1" 
                            name="mailing-address-1" 
                            type="text"
                            value={streetAddress}
                            onChange={(e) => setStreetAddress(e.target.value)}
                             />

                        <Label htmlFor="mailing-address-2">{t("streetAddress2", {ns: ['main', 'home']})}</Label>
                        <TextInput 
                            id="mailing-address-2" 
                            name="mailing-address-2" 
                            type="text"
                            value={streetAddress2}
                            onChange={(e) => setStreetAddress2(e.target.value)}
                             />

                        <Label htmlFor="city">
                        {t("city", {ns: ['main', 'home']})}{' '}
                            <abbr title="required" className="usa-hint usa-hint--required">
                            *
                            </abbr>
                        </Label>
                        <TextInput 
                            id="city" 
                            name="city" 
                            type="text" 
                            value={city}
                            onChange={handleCityChange} 
                            required
                             />

                        <Label htmlFor="state">
                        {t("state", {ns: ['main', 'home']})}{' '}
                            <abbr title="required" className="usa-hint usa-hint--required">
                            *
                            </abbr>
                        </Label>
                        <Dropdown 
                            id="state" 
                            name="state" 
                            value={state}
                            onChange={(e) => setState(e.target.value)}
                            required>
                            <option>- {t("select", {ns: ['main', 'home']})} -</option>
                            <option value="AL">Alabama</option>
                            <option value="AK">Alaska</option>
                            <option value="AZ">Arizona</option>
                            <option value="AR">Arkansas</option>
                            <option value="CA">California</option>
                            <option value="CO">Colorado</option>
                            <option value="CT">Connecticut</option>
                            <option value="DE">Delaware</option>
                            <option value="DC">District of Columbia</option>
                            <option value="FL">Florida</option>
                            <option value="GA">Georgia</option>
                            <option value="HI">Hawaii</option>
                            <option value="ID">Idaho</option>
                            <option value="IL">Illinois</option>
                            <option value="IN">Indiana</option>
                            <option value="IA">Iowa</option>
                            <option value="KS">Kansas</option>
                            <option value="KY">Kentucky</option>
                            <option value="LA">Louisiana</option>
                            <option value="ME">Maine</option>
                            <option value="MD">Maryland</option>
                            <option value="MA">Massachusetts</option>
                            <option value="MI">Michigan</option>
                            <option value="MN">Minnesota</option>
                            <option value="MS">Mississippi</option>
                            <option value="MO">Missouri</option>
                            <option value="MT">Montana</option>
                            <option value="NE">Nebraska</option>
                            <option value="NV">Nevada</option>
                            <option value="NH">New Hampshire</option>
                            <option value="NJ">New Jersey</option>
                            <option value="NM">New Mexico</option>
                            <option value="NY">New York</option>
                            <option value="NC">North Carolina</option>
                            <option value="ND">North Dakota</option>
                            <option value="OH">Ohio</option>
                            <option value="OK">Oklahoma</option>
                            <option value="OR">Oregon</option>
                            <option value="PA">Pennsylvania</option>
                            <option value="RI">Rhode Island</option>
                            <option value="SC">South Carolina</option>
                            <option value="SD">South Dakota</option>
                            <option value="TN">Tennessee</option>
                            <option value="TX">Texas</option>
                            <option value="UT">Utah</option>
                            <option value="VT">Vermont</option>
                            <option value="VA">Virginia</option>
                            <option value="WA">Washington</option>
                            <option value="WV">West Virginia</option>
                            <option value="WI">Wisconsin</option>
                            <option value="WY">Wyoming</option>
                            <option value="AA">AA - Armed Forces Americas</option>
                            <option value="AE">AE - Armed Forces Africa</option>
                            <option value="AE">AE - Armed Forces Canada</option>
                            <option value="AE">AE - Armed Forces Europe</option>
                            <option value="AE">AE - Armed Forces Middle East</option>
                            <option value="AP">AP - Armed Forces Pacific</option>
                        </Dropdown>

                        <Label htmlFor="zip">{t("zip", {ns: ['main', 'home']})}</Label>
                        <TextInput
                            id="zip"
                            name="zip"
                            type="text"
                            inputSize="medium"
                            pattern="[\d]{5}(-[\d]{4})?"
                            value={zip}
                            onChange={handleZipChange}
                        />
                        </Fieldset>
                    </Form>
                </div>
            </GridContainer>
        </>
    )
}