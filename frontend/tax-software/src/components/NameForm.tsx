import { Fieldset, Form, GridContainer, Label, TextInput } from "@trussworks/react-uswds";
import { useTranslation } from "react-i18next"

export default function NameForm({ firstName, setFirstName, middleName, setMiddleName, lastName, setLastName }) {

    const { t, i18n } = useTranslation(['home', 'main']);

    function handleSubmit() {
        // event.preventDefault();

    }
    return (
        <>
        <GridContainer>
            <div style={{backgroundColor: "white", boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", borderRadius: "8px", padding: "2em"}}>
              <Form onSubmit={handleSubmit} >
                
                    <Fieldset legend={t("name", {ns: ['main', 'home']})} legendStyle="large" style={{minWidth: "25vw"}}>
                        <div>
                            <Label htmlFor="first-name">{t("firstName", {ns: ['main', 'home']})}{' '}
                            <abbr title="required" className="usa-hint usa-hint--required">
                            *
                            </abbr></Label>
                            <span className="usa-hint">{t("exampleFirstName", {ns: ['main', 'home']})}</span>
                            <TextInput 
                                id="first-name" 
                                name="first-name" 
                                type="text"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                 />
                        </div>

                        <div>
                            <Label htmlFor="middle-name">{t("middleName", {ns: ['main', 'home']})}</Label>
                            <TextInput 
                                id="middle-name" 
                                name="middle-name" 
                                type="text"
                                value={middleName}
                                onChange={(e) => setMiddleName(e.target.value)}
                                 />
                        </div>

                        <div>
                            <Label htmlFor="last-name">{t("lastName", {ns: ['main', 'home']})}{' '}
                            <abbr title="required" className="usa-hint usa-hint--required">
                            *
                            </abbr></Label>
                            <span className="usa-hint">
                            {t("exampleLastName", {ns: ['main', 'home']})}
                            </span>
                            <TextInput 
                                id="last-name" 
                                name="last-name" 
                                type="text"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)} />
                        </div>
                    </Fieldset>
                
                </Form>
                </div>
            </GridContainer>
        </>
    )
}