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

const MARRIED_SEPARATE_FILING_BRACKETS: Record<string, number> = {
    // Married Separate Filing bracket
    MARRIED_SEPARATE_BRACKET_10: 10275.00,
    MARRIED_SEPARATE_BRACKET_12: 41775.00,
    MARRIED_SEPARATE_BRACKET_22: 89075.00,
    MARRIED_SEPARATE_BRACKET_24: 170050.00,
    MARRIED_SEPARATE_BRACKET_32: 215950.00,
    MARRIED_SEPARATE_BRACKET_35: 323925.00,
};

export default function MarriedSeparateCalculation() {

const SOCIAL_SECURITY_MAX_WAGE = 142800.00;
const MEDICARE_SURTAX_SINGLE = 200000;
const SOCIAL_SECURITY_TAX_RATE = 0.062;
const MEDICARE_TAX_RATE = 0.0145;
const MEDICARE_ADDITIONAL_SURTAX_RATE = 0.009;

const marriedSeparateDeduction = 12950.00;
const childTaxCredit = 2000.00;


const calculateIncomeTax = (income: number) => {
    income = income - marriedSeparateDeduction;
    let result = 0.0;

    for (let i = 1; i < Object.keys(MARRIED_SEPARATE_FILING_BRACKETS).length; i++) {
        const bracketKey = `MARRIED_SEPARATE_FILING_BRACKET_${i}`;
        if (income <= MARRIED_SEPARATE_FILING_BRACKETS[bracketKey]) {
            result += (income - MARRIED_SEPARATE_FILING_BRACKETS[`MARRIED_SEPARATE_FILING_BRACKET_${i - 1}`]) * TAX_RATES[`TAX_RATE_${i - 1}`];
            break;
        } else {
            result += (MARRIED_SEPARATE_FILING_BRACKETS[bracketKey] - MARRIED_SEPARATE_FILING_BRACKETS[`MARRIED_SEPARATE_FILING_BRACKET_${i - 1}`]) * TAX_RATES[`TAX_RATE_${i - 1}`];
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
    if (income <= MEDICARE_SURTAX_SINGLE) {
        return income * MEDICARE_TAX_RATE;
    } else {
        return MEDICARE_ADDITIONAL_SURTAX_RATE * (income - MEDICARE_SURTAX_SINGLE);
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