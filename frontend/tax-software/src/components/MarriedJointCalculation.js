// Constants for Tax Rates
const TAX_RATES = {
    TAX_RATE_10: 0.10,
    TAX_RATE_12: 0.12,
    TAX_RATE_22: 0.22,
    TAX_RATE_24: 0.24,
    TAX_RATE_32: 0.32,
    TAX_RATE_35: 0.35,
    TAX_RATE_37: 0.37,
    SOCIAL_SECURITY_MAX_WAGE: 142800.00,
    MEDICARE_SURTAX_SINGLE: 200000,
    MEDICARE_SURTAX_MARRIED: 250000,
    SOCIAL_SECURITY_TAX_RATE: 0.062,
    MEDICARE_TAX_RATE: 0.0145,
    MEDICARE_ADDITIONAL_SURTAX_RATE: 0.009,
};
const MARRIED_JOINT_BRACKETS = [
    0, 20550.00, 83550.00, 178150.00, 340100.00, 431900.00, 647850.00
];
const MARRIED_JOINT_DEDUCTION = 25900.00;
export const calculateIncomeTaxMarriedJoint = (income) => {
    income -= MARRIED_JOINT_DEDUCTION;
    let result = 0.0;
    const rates = [
        TAX_RATES.TAX_RATE_10,
        TAX_RATES.TAX_RATE_12,
        TAX_RATES.TAX_RATE_22,
        TAX_RATES.TAX_RATE_24,
        TAX_RATES.TAX_RATE_32,
        TAX_RATES.TAX_RATE_35,
        TAX_RATES.TAX_RATE_37
    ];
    for (let i = 1; i < MARRIED_JOINT_BRACKETS.length; i++) {
        if (income <= MARRIED_JOINT_BRACKETS[i]) {
            result += (income - MARRIED_JOINT_BRACKETS[i - 1]) * rates[i - 1];
            break;
        }
        else {
            result += (MARRIED_JOINT_BRACKETS[i] - MARRIED_JOINT_BRACKETS[i - 1]) * rates[i - 1];
        }
    }
    return result;
};
export const calculateSocialSecurityTaxMarriedJoint = (income) => {
    if (income >= TAX_RATES.SOCIAL_SECURITY_MAX_WAGE) {
        return TAX_RATES.SOCIAL_SECURITY_MAX_WAGE * TAX_RATES.SOCIAL_SECURITY_TAX_RATE;
    }
    else {
        return income * TAX_RATES.SOCIAL_SECURITY_TAX_RATE;
    }
};
export const calculateMedicareTaxMarriedJoint = (income) => {
    if (income <= TAX_RATES.MEDICARE_SURTAX_MARRIED) {
        return income * TAX_RATES.MEDICARE_TAX_RATE;
    }
    else {
        return TAX_RATES.MEDICARE_ADDITIONAL_SURTAX_RATE * (income - TAX_RATES.MEDICARE_SURTAX_MARRIED);
    }
};
export const calculateTotalTaxMarriedJoint = (income) => {
    return calculateIncomeTaxMarriedJoint(income) + calculateSocialSecurityTaxMarriedJoint(income) + calculateMedicareTaxMarriedJoint(income);
};
