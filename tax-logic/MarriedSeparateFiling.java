public class MarriedSeparateFiling implements TaxRate{

    final double MARRIED_SEPARATE_BRACKET_10 = 10275.00;
    final double MARRIED_SEPARATE_BRACKET_12 = 41775.00;
    final double MARRIED_SEPARATE_BRACKET_22 = 89075.00;
    final double MARRIED_SEPARATE_BRACKET_24 = 170050.00;
    final double MARRIED_SEPARATE_BRACKET_32 = 215950.00;
    final double MARRIED_SEPARATE_BRACKET_35 = 323925.00;

    final double marriedSeparateDeduction = 12950.00;

    // Constructor
    public MarriedSeparateFiling() {}
    
    /************************ METHODS *******************************/

    // Tax Calculator for a Married but separate filer, takes the income as input
    public double calculateIncomeTax(double income) {

        // Subtracts the income from the deduction defined
        income = income - marriedSeparateDeduction;
        double result = 0.0;

        // Iterates through an array of income brackets and their corresponding tax rates
        double[] brackets = {0, MARRIED_SEPARATE_BRACKET_10, MARRIED_SEPARATE_BRACKET_12, MARRIED_SEPARATE_BRACKET_22, MARRIED_SEPARATE_BRACKET_24, MARRIED_SEPARATE_BRACKET_32, MARRIED_SEPARATE_BRACKET_35};
        double[] rates = {TAX_RATE_10, TAX_RATE_12, TAX_RATE_22, TAX_RATE_24, TAX_RATE_32, TAX_RATE_35, TAX_RATE_37};

        
        /*
         * TAX LOGIC
         * 
         * For each bracket, it checks if the income falls within that bracket range. 
         * If so, it calculates the tax amount for that bracket by taking the difference between the current income 
         *  and the previous bracket's upper limit, and then multiplies it by the corresponding tax rate. 
         * 
         * The process continues until the income is within the last bracket, where it calculates the tax for that remaining amount.
         */

        for (int i = 1; i < brackets.length; i++) {
            if (income <= brackets[i]) {
                result += (income - brackets[i - 1]) * rates[i - 1];
                break;
            } else {
                result += (brackets[i] - brackets[i - 1]) * rates[i - 1];
            }
        }
        
        return result;
    }

    // All variables from implementing TaxRate

    public double calculateSocialSecurityTax(double income) {

        if (income >= SOCIAL_SECURITY_MAX_WAGE) {
            return SOCIAL_SECURITY_MAX_WAGE * SOCIAL_SECURITY_TAX_RATE;
        } else {
            return income * SOCIAL_SECURITY_TAX_RATE;
        }
        
    }

    // Medical Surtax charged for Single because filed separately
    public double calculateMedicareTax(double income) {

        if (income <= MEDICARE_SURTAX_SINGLE) {
            return income * MEDICARE_TAX_RATE;
        } else {
            return MEDICARE_ADDITIONAL_SURTAX_RATE * (income - MEDICARE_SURTAX_SINGLE);
        }
    }

    public double calculateTotalTax(double income) {
        return calculateIncomeTax(income) + calculateSocialSecurityTax(income) + calculateMedicareTax(income);
    }

    /************************ END of METHODS *******************************/

    // Getters (NO Setters --> all variables are defined and FINAL)
    public double getMARRIED_SEPARATE_BRACKET_10() {
        return MARRIED_SEPARATE_BRACKET_10;
    }

    public double getMARRIED_SEPARATE_BRACKET_12() {
        return MARRIED_SEPARATE_BRACKET_12;
    }

    public double getMARRIED_SEPARATE_BRACKET_22() {
        return MARRIED_SEPARATE_BRACKET_22;
    }

    public double getMARRIED_SEPARATE_BRACKET_24() {
        return MARRIED_SEPARATE_BRACKET_24;
    }

    public double getMARRIED_SEPARATE_BRACKET_32() {
        return MARRIED_SEPARATE_BRACKET_32;
    }

    public double getMARRIED_SEPARATE_BRACKET_35() {
        return MARRIED_SEPARATE_BRACKET_35;
    }

    public double getMarriedSeparateDeduction() {
        return marriedSeparateDeduction;
    }

    // Hash Codes and Equals
    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        long temp;
        temp = Double.doubleToLongBits(MARRIED_SEPARATE_BRACKET_10);
        result = prime * result + (int) (temp ^ (temp >>> 32));
        temp = Double.doubleToLongBits(MARRIED_SEPARATE_BRACKET_12);
        result = prime * result + (int) (temp ^ (temp >>> 32));
        temp = Double.doubleToLongBits(MARRIED_SEPARATE_BRACKET_22);
        result = prime * result + (int) (temp ^ (temp >>> 32));
        temp = Double.doubleToLongBits(MARRIED_SEPARATE_BRACKET_24);
        result = prime * result + (int) (temp ^ (temp >>> 32));
        temp = Double.doubleToLongBits(MARRIED_SEPARATE_BRACKET_32);
        result = prime * result + (int) (temp ^ (temp >>> 32));
        temp = Double.doubleToLongBits(MARRIED_SEPARATE_BRACKET_35);
        result = prime * result + (int) (temp ^ (temp >>> 32));
        temp = Double.doubleToLongBits(marriedSeparateDeduction);
        result = prime * result + (int) (temp ^ (temp >>> 32));
        return result;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj)
            return true;
        if (obj == null)
            return false;
        if (getClass() != obj.getClass())
            return false;
        MarriedSeparateFiling other = (MarriedSeparateFiling) obj;
        if (Double.doubleToLongBits(MARRIED_SEPARATE_BRACKET_10) != Double
                .doubleToLongBits(other.MARRIED_SEPARATE_BRACKET_10))
            return false;
        if (Double.doubleToLongBits(MARRIED_SEPARATE_BRACKET_12) != Double
                .doubleToLongBits(other.MARRIED_SEPARATE_BRACKET_12))
            return false;
        if (Double.doubleToLongBits(MARRIED_SEPARATE_BRACKET_22) != Double
                .doubleToLongBits(other.MARRIED_SEPARATE_BRACKET_22))
            return false;
        if (Double.doubleToLongBits(MARRIED_SEPARATE_BRACKET_24) != Double
                .doubleToLongBits(other.MARRIED_SEPARATE_BRACKET_24))
            return false;
        if (Double.doubleToLongBits(MARRIED_SEPARATE_BRACKET_32) != Double
                .doubleToLongBits(other.MARRIED_SEPARATE_BRACKET_32))
            return false;
        if (Double.doubleToLongBits(MARRIED_SEPARATE_BRACKET_35) != Double
                .doubleToLongBits(other.MARRIED_SEPARATE_BRACKET_35))
            return false;
        if (Double.doubleToLongBits(marriedSeparateDeduction) != Double
                .doubleToLongBits(other.marriedSeparateDeduction))
            return false;
        return true;
    }

    // toString
    @Override
    public String toString() {
        return "MarriedSeparateFiling [MARRIED_SEPARATE_BRACKET_10=" + MARRIED_SEPARATE_BRACKET_10
                + ", MARRIED_SEPARATE_BRACKET_12=" + MARRIED_SEPARATE_BRACKET_12 + ", MARRIED_SEPARATE_BRACKET_22="
                + MARRIED_SEPARATE_BRACKET_22 + ", MARRIED_SEPARATE_BRACKET_24=" + MARRIED_SEPARATE_BRACKET_24
                + ", MARRIED_SEPARATE_BRACKET_32=" + MARRIED_SEPARATE_BRACKET_32 + ", MARRIED_SEPARATE_BRACKET_35="
                + MARRIED_SEPARATE_BRACKET_35 + ", marriedSeparateDeduction=" + marriedSeparateDeduction + "]";
    }

    
}
