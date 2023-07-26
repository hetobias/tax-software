

public class TaxCalculator {

    static final double taxRate10 = 0.10;
    static final double taxRate12 = 0.12;
    static final double taxRate22 = 0.22;
    static final double taxRate24 = 0.24;
    static final double taxRate32 = 0.32;
    static final double taxRate35 = 0.35;
    static final double taxRate37 = 0.37;

    static final double singleBracket10 = 10275.00;
    static final double singleBracket12 = 41775.00;
    static final double singleBracket22 = 89075.00;
    static final double singleBracket24 = 170050.00;
    static final double singleBracket32 = 215950.00;
    static final double singleBracket35 = 539900.00;

    static final double marriedJointBracket10 = 20550.00;
    static final double marriedJointBracket12 = 83550.00;
    static final double marriedJointBracket22 = 178150.00;
    static final double marriedJointBracket24 = 340100.00;
    static final double marriedJointBracket32 = 431900.00;
    static final double marriedJointBracket35 = 647850.00;

    static final double marriedSeparateBracket10 = 10275.00;
    static final double marriedSeparateBracket12 = 41775.00;
    static final double marriedSeparateBracket22 = 89075.00;
    static final double marriedSeparateBracket24 = 170050.00;
    static final double marriedSeparateBracket32 = 215950.00;
    static final double marriedSeparateBracket35 = 323925.00;

    static final double headOfHouseholdBracket10 = 14650.00;
    static final double headOfHouseholdBracket12 = 55900.00;
    static final double headOfHouseholdBracket22 = 89050.00;
    static final double headOfHouseholdBracket24 = 170050.00;
    static final double headOfHouseholdBracket32 = 215950.00;
    static final double headOfHouseholdBracket35 = 539900.00;

    static final double singleDeduction = 12950.00;
    static final double marriedJointDeduction = 25900.00;
    static final double marriedSeparateDeduction = 12950.00;
    static final double headOfHouseholdDeduction = 19400.00;

    
public static void main(String[] args) {

    System.out.println("For Single Tax Rate: $" + singleTaxRate(60000));
    System.out.println(marriedJointTaxRate(60000));
    System.out.println(marriedSeparateTaxRate(60000));
    System.out.println(headOfHouseholdTaxRate(60000));

}

    public static double singleTaxRate(double income) {

        double result = 0.0;

        if (income >= singleBracket10) {
            result = singleBracket10 * taxRate10;
        }

        if (income >= singleBracket12) {
            double difference = singleBracket12 - singleBracket10;
            result = result + (difference * taxRate12);
        } else if (income < singleBracket22) {
            double difference = income - singleBracket10;
            result = result + (difference * taxRate12);
        }

        if (income >= singleBracket22) {
            double difference = singleBracket22 - singleBracket12;
            result = result + (difference * taxRate22);
        } else if (income >= singleBracket22 && income < singleBracket24) {
            double difference = income - singleBracket12;
            result = result + (difference * taxRate22);
        }

        if (income >= singleBracket24) {
            double difference = singleBracket24 - taxRate22;
            result = result + (difference * taxRate24);
        } else if (income >= singleBracket24 && income < singleBracket32) {
            double difference = income - taxRate22;
            result = result + (difference * taxRate24);
        }

        if (income >= singleBracket32) {
            double difference = singleBracket32 - taxRate24;
            result = result + (difference * taxRate32);
        } else if (income >= singleBracket32 && income < singleBracket35) {
            double difference = income - taxRate24;
            result = result + (difference * taxRate32);
        }

        if (income >= singleBracket35) {
            double difference = singleBracket35 - taxRate32;
            result = result + (difference * taxRate35);
        } 
        
        if (income > singleBracket35) {
            double difference = income - singleBracket35;
            result = result + (difference * taxRate37);
        }

        return result;
    }


    public static double marriedJointTaxRate(double income) {

        double result = 0.0;

        if (income >= marriedJointBracket10) {
            result = marriedJointBracket10 * taxRate10;
        }

        if (income >= marriedJointBracket12) {
            double difference = marriedJointBracket12 - marriedJointBracket10;
            result = result + (difference * taxRate12);
        } else if (income < marriedJointBracket22) {
            double difference = income - marriedJointBracket10;
            result = result + (difference * taxRate12);
        }

        if (income >= marriedJointBracket22) {
            double difference = marriedJointBracket22 - marriedJointBracket12;
            result = result + (difference * taxRate22);
        } else if (income >= marriedJointBracket22 && income < marriedJointBracket24) {
            double difference = income - marriedJointBracket12;
            result = result + (difference * taxRate22);
        }

        if (income >= marriedJointBracket24) {
            double difference = marriedJointBracket24 - taxRate22;
            result = result + (difference * taxRate24);
        } else if (income >= marriedJointBracket24 && income < marriedJointBracket32) {
            double difference = income - taxRate22;
            result = result + (difference * taxRate24);
        }

        if (income >= marriedJointBracket32) {
            double difference = marriedJointBracket32 - taxRate24;
            result = result + (difference * taxRate32);
        } else if (income >= marriedJointBracket32 && income < marriedJointBracket35) {
            double difference = income - taxRate24;
            result = result + (difference * taxRate32);
        }

        if (income >= marriedJointBracket35) {
            double difference = marriedJointBracket35 - taxRate32;
            result = result + (difference * taxRate35);
        } 
        
        if (income > marriedJointBracket35) {
            double difference = income - marriedJointBracket35;
            result = result + (difference * taxRate37);
        }

        return result;
    }


    public static double marriedSeparateTaxRate(double income) {

        double result = 0.0;

        if (income >= marriedSeparateBracket10) {
            result = marriedSeparateBracket10 * taxRate10;
        }

        if (income >= marriedSeparateBracket12) {
            double difference = marriedSeparateBracket12 - marriedSeparateBracket10;
            result = result + (difference * taxRate12);
        } else if (income < marriedSeparateBracket22) {
            double difference = income - marriedSeparateBracket10;
            result = result + (difference * taxRate12);
        }

        if (income >= marriedSeparateBracket22) {
            double difference = marriedSeparateBracket22 - marriedSeparateBracket12;
            result = result + (difference * taxRate22);
        } else if (income >= marriedSeparateBracket22 && income < marriedSeparateBracket24) {
            double difference = income - marriedSeparateBracket12;
            result = result + (difference * taxRate22);
        }

        if (income >= marriedSeparateBracket24) {
            double difference = marriedSeparateBracket24 - taxRate22;
            result = result + (difference * taxRate24);
        } else if (income >= marriedSeparateBracket24 && income < marriedSeparateBracket32) {
            double difference = income - taxRate22;
            result = result + (difference * taxRate24);
        }

        if (income >= marriedSeparateBracket32) {
            double difference = marriedSeparateBracket32 - taxRate24;
            result = result + (difference * taxRate32);
        } else if (income >= marriedSeparateBracket32 && income < marriedSeparateBracket35) {
            double difference = income - taxRate24;
            result = result + (difference * taxRate32);
        }

        if (income >= marriedSeparateBracket35) {
            double difference = marriedSeparateBracket35 - taxRate32;
            result = result + (difference * taxRate35);
        } 
        
        if (income > marriedSeparateBracket35) {
            double difference = income - marriedSeparateBracket35;
            result = result + (difference * taxRate37);
        }

        return result;
    }


    public static double headOfHouseholdTaxRate(double income) {

        double result = 0.0;

        if (income >= headOfHouseholdBracket10) {
            result = headOfHouseholdBracket10 * taxRate10;
        }

        if (income >= headOfHouseholdBracket12) {
            double difference = headOfHouseholdBracket12 - headOfHouseholdBracket10;
            result = result + (difference * taxRate12);
        } else if (income < headOfHouseholdBracket22) {
            double difference = income - headOfHouseholdBracket10;
            result = result + (difference * taxRate12);
        }

        if (income >= headOfHouseholdBracket22) {
            double difference = headOfHouseholdBracket22 - headOfHouseholdBracket12;
            result = result + (difference * taxRate22);
        } else if (income >= headOfHouseholdBracket22 && income < headOfHouseholdBracket24) {
            double difference = income - headOfHouseholdBracket12;
            result = result + (difference * taxRate22);
        }

        if (income >= headOfHouseholdBracket24) {
            double difference = headOfHouseholdBracket24 - taxRate22;
            result = result + (difference * taxRate24);
        } else if (income >= headOfHouseholdBracket24 && income < headOfHouseholdBracket32) {
            double difference = income - taxRate22;
            result = result + (difference * taxRate24);
        }

        if (income >= headOfHouseholdBracket32) {
            double difference = headOfHouseholdBracket32 - taxRate24;
            result = result + (difference * taxRate32);
        } else if (income >= headOfHouseholdBracket32 && income < headOfHouseholdBracket35) {
            double difference = income - taxRate24;
            result = result + (difference * taxRate32);
        }

        if (income >= headOfHouseholdBracket35) {
            double difference = headOfHouseholdBracket35 - taxRate32;
            result = result + (difference * taxRate35);
        } 
        
        if (income > headOfHouseholdBracket35) {
            double difference = income - headOfHouseholdBracket35;
            result = result + (difference * taxRate37);
        }

        return result;
    }

}