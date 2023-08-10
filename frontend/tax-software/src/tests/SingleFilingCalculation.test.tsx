import { calculateIncomeTax, calculateMedicareTax, calculateSocialSecurityTax, calculateTotalTax } from "../components/SingleFilingCalculation";

describe('SingleFilingCalculation', () => {
    it('calculates income tax correctly', () => {
      expect(calculateIncomeTax(60000)).toBe(5968);
      // Add more test cases for different income values
    });
  
    it('calculates social security tax correctly', () => {
      expect(calculateSocialSecurityTax(60000)).toBe(3720.0);
      // Add more test cases for different income values
    });
  
    it('calculates medicare tax correctly', () => {
      expect(calculateMedicareTax(60000)).toBe(870.0);
      // Add more test cases for different income values
    });
  
    it('calculates total tax correctly', () => {
      expect(calculateTotalTax(60000)).toBe(10558.0);
      // Add more test cases for different income values
    });
  });


