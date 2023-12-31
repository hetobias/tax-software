// @ts-nocheck
import { Button, GridContainer } from "@trussworks/react-uswds";
import { useTranslation } from "react-i18next"

interface TaxChoiceProps {
    onTaxChoice: (choice: string) => void;
}

export default function TaxChoice({ onTaxChoice }: TaxChoiceProps) {

    const { t, i18n } = useTranslation(['home', 'main']);

    const handleTaxChoice = (choice: any) => {
        onTaxChoice(choice);
    }

    return (
        <>
            <GridContainer>
                <br/>
                <div style={{backgroundColor: "white", boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", borderRadius: "8px", padding: "2em"}}>
                    <h2 style={{textAlign: "center", marginTop: "2rem"}}>{t("TaxChoiceQuestion", {ns: ['main', 'home']})}</h2>
                    <div style={{display: "flex", justifyContent: "space-evenly", margin: "5rem"}}>
                        <Button type="button" size="big" accentStyle="cool" onClick={() => handleTaxChoice("w2")}>W2</Button>
                        <Button type="button" size="big" accentStyle="cool" onClick={() => handleTaxChoice("1099")}>1099</Button>
                    </div>
                </div>
                <br/>
                
            </GridContainer>
        </>
    )
}