// Tax Rates
const TAX_RATES: Record<string, number> = {
    TAX_RATE_10: 0.10,
    TAX_RATE_12: 0.12,
    TAX_RATE_22: 0.22,
    TAX_RATE_24: 0.24,
    TAX_RATE_32: 0.32,
    TAX_RATE_35: 0.35,
    TAX_RATE_37: 0.37,
};

const MARRIED_JOINT_FILING_BRACKETS: Record<string, number> = {
    // Married Joint Filing bracket
    MARRIED_JOINT_BRACKET_10: 20550.00,
    MARRIED_JOINT_BRACKET_12: 83550.00,
    MARRIED_JOINT_BRACKET_22: 178150.00,
    MARRIED_JOINT_BRACKET_24: 340100.00,
    MARRIED_JOINT_BRACKET_32: 431900.00,
    MARRIED_JOINT_BRACKET_35: 647850.00,
};

export default function MarriedJointCalculation() {

const SOCIAL_SECURITY_MAX_WAGE = 142800.00;
const MEDICARE_SURTAX_MARRIED = 250000;
const SOCIAL_SECURITY_TAX_RATE = 0.062;
const MEDICARE_TAX_RATE = 0.0145;
const MEDICARE_ADDITIONAL_SURTAX_RATE = 0.009;

const marriedJointDeduction = 25900.00;
const childTaxCredit = 2000.00;


const calculateIncomeTax = (income: number) => {
    income = income - marriedJointDeduction;
    let result = 0.0;

    for (let i = 1; i < Object.keys(MARRIED_JOINT_FILING_BRACKETS).length; i++) {
        const bracketKey = `MARRIED_JOINT_FILING_BRACKET_${i}`;
        if (income <= MARRIED_JOINT_FILING_BRACKETS[bracketKey]) {
            result += (income - MARRIED_JOINT_FILING_BRACKETS[`MARRIED_JOINT_FILING_BRACKET_${i - 1}`]) * TAX_RATES[`TAX_RATE_${i - 1}`];
            break;
        } else {
            result += (MARRIED_JOINT_FILING_BRACKETS[bracketKey] - MARRIED_JOINT_FILING_BRACKETS[`MARRIED_JOINT_FILING_BRACKET_${i - 1}`]) * TAX_RATES[`TAX_RATE_${i - 1}`];
        }
    }

    return result;
};

// Calculate Social Security Tax
const calculateSocialSecurityTax = (income: number): number => {
    if (income >= SOCIAL_SECURITY_MAX_WAGE) {
        return SOCIAL_SECURITY_MAX_WAGE * SOCIAL_SECURITY_TAX_RATE;
    } else {
        return income * SOCIAL_SECURITY_TAX_RATE;
    }
};

// Calculate Medicare Tax
const calculateMedicareTax = (income: number): number => {
    if (income <= MEDICARE_SURTAX_MARRIED) {
        return income * MEDICARE_TAX_RATE;
    } else {
        return MEDICARE_ADDITIONAL_SURTAX_RATE * (income - MEDICARE_SURTAX_MARRIED);
    }
};

// Calculate Total Tax
const calculateTotalTax = (income: number): number => {
    return (
        calculateIncomeTax(income) +
        calculateSocialSecurityTax(income) +
        calculateMedicareTax(income)
    );
};

return (
    <>
    
    </>
)
}