// Constants
export const TAX_RATES = {
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
    MEDICARE_ADDITIONAL_SURTAX_RATE: 0.009
};

const HEAD_OF_HOUSEHOLD_BRACKETS = [
    0, // Starting at 0
    14650.00,
    55900.00,
    89050.00,
    170050.00,
    215950.00,
    539900.00
];

const HEAD_OF_HOUSEHOLD_DEDUCTION = 19400.00;

export const calculateIncomeTax = (income) => {
    income -= HEAD_OF_HOUSEHOLD_DEDUCTION;
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

    for (let i = 1; i < HEAD_OF_HOUSEHOLD_BRACKETS.length; i++) {
        if (income <= HEAD_OF_HOUSEHOLD_BRACKETS[i]) {
            result += (income - HEAD_OF_HOUSEHOLD_BRACKETS[i - 1]) * rates[i - 1];
            break;
        } else {
            result += (HEAD_OF_HOUSEHOLD_BRACKETS[i] - HEAD_OF_HOUSEHOLD_BRACKETS[i - 1]) * rates[i - 1];
        }
    }
    return result;
};

export const calculateSocialSecurityTax = (income) => {
    if (income >= TAX_RATES.SOCIAL_SECURITY_MAX_WAGE) {
        return TAX_RATES.SOCIAL_SECURITY_MAX_WAGE * TAX_RATES.SOCIAL_SECURITY_TAX_RATE;
    } else {
        return income * TAX_RATES.SOCIAL_SECURITY_TAX_RATE;
    }
};

export const calculateMedicareTax = (income) => {
    if (income <= TAX_RATES.MEDICARE_SURTAX_SINGLE) {
        return income * TAX_RATES.MEDICARE_TAX_RATE;
    } else {
        return TAX_RATES.MEDICARE_ADDITIONAL_SURTAX_RATE * (income - TAX_RATES.MEDICARE_SURTAX_SINGLE);
    }
};

export const calculateTotalTax = (income) => {
    return calculateIncomeTax(income) + calculateSocialSecurityTax(income) + calculateMedicareTax(income);
};
