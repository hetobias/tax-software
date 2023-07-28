public interface TaxRate {

    public final double TAX_RATE_10 = 0.10;
    public final double TAX_RATE_12 = 0.12;
    public final double TAX_RATE_22 = 0.22;
    public final double TAX_RATE_24 = 0.24;
    public final double TAX_RATE_32 = 0.32;
    public final double TAX_RATE_35 = 0.35;
    public final double TAX_RATE_37 = 0.37;

    public final double SOCIAL_SECURITY_MAX_WAGE = 142800.00;
    public final double MEDICARE_SURTAX_SINGLE = 200000;
    public final double MEDICARE_SURTAX_MARRIED = 250000;

    public final double SOCIAL_SECURITY_TAX_RATE = 0.062;
    public final double MEDICARE_TAX_RATE = 0.0145;
    public final double MEDICARE_ADDITIONAL_SURTAX_RATE = 0.009;

    // methods to Override in implemented Classes
    public double calculateIncomeTax(double income);
    public double calculateSocialSecurityTax(double income);
    public double calculateMedicareTax(double income);
    public double calculateTotalTax(double income);

}
