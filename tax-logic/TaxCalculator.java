

public class TaxCalculator {

    
public static void main(String[] args) {


    SingleFiling singleFiling = new SingleFiling();
    MarriedSeparateFiling MarriedSeparateFiling = new MarriedSeparateFiling();
    MarriedJointFiling MarriedJointFiling = new MarriedJointFiling();
    HeadOfHouseholdFiling HeadOfHouseholdFiling = new HeadOfHouseholdFiling();

    double income = 100000;

    System.out.println("\n******************* SINGLE FILING *******************\n");

    System.out.println("Income Tax: " + singleFiling.calculateIncomeTax(income));
    System.out.println("Social Security Tax: " + singleFiling.calculateSocialSecurityTax(income));
    System.out.println("Medicare Tax: " + singleFiling.calculateMedicareTax(income));
    System.out.println("Total Tax: " + singleFiling.calculateTotalTax(income));

    System.out.println("\n******************* MARRIED SEPARATE FILING *******************\n");

    System.out.println("Income Tax: " + MarriedSeparateFiling.calculateIncomeTax(income));
    System.out.println("Social Security Tax: " + MarriedSeparateFiling.calculateSocialSecurityTax(income));
    System.out.println("Medicare Tax: " + MarriedSeparateFiling.calculateMedicareTax(income));
    System.out.println("Total Tax: " + MarriedSeparateFiling.calculateTotalTax(income));

    System.out.println("\n******************* MARRIED JOINT FILING *******************\n");

    System.out.println("Income Tax: " + MarriedJointFiling.calculateIncomeTax(income));
    System.out.println("Social Security Tax: " + MarriedJointFiling.calculateSocialSecurityTax(income));
    System.out.println("Medicare Tax: " + MarriedJointFiling.calculateMedicareTax(income));
    System.out.println("Total Tax: " + MarriedJointFiling.calculateTotalTax(income));

    System.out.println("\n******************* HEAD OF HOUSEHOLD FILING *******************\n");

    System.out.println("Income Tax: " + HeadOfHouseholdFiling.calculateIncomeTax(income));
    System.out.println("Social Security Tax: " + HeadOfHouseholdFiling.calculateSocialSecurityTax(income));
    System.out.println("Medicare Tax: " + HeadOfHouseholdFiling.calculateMedicareTax(income));
    System.out.println("Total Tax: " + HeadOfHouseholdFiling.calculateTotalTax(income));


    

}


}