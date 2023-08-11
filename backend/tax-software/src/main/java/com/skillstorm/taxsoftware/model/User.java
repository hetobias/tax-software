package com.skillstorm.taxsoftware.model;

import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@NoArgsConstructor
@Document(collection = "users")
public class User {
  @Id
  private String id;
  private String firstName;
  private String middleName;
  private String lastName;
  private Address address;
  private TaxInfo taxInfo;
  private Calc calc;
}

@Data
@NoArgsConstructor
class Address {
  private String streetAddress;
  private String streetAddress2;
  private String city;
  private String state;
  private String zipcode;
}

@Data
@NoArgsConstructor
class TaxInfo {
  private String filingStatus;
  private Form1099 Form1099;
  private W2s W2s;
}

@Data
@NoArgsConstructor
class Form1099 {
  private String ssnOrEin;
  private double totalComp;
}

@Data
@NoArgsConstructor
class W2s {
  private String ein;
  private double wagesTips;
  private double totalComp;
  private double ssWithheld;
  private double medicareWithheld;
  private double federalTaxWithheld;
}

@Data
@NoArgsConstructor
class Calc {
  private double totalWages;
  private double totalTax;
  private double ssTaxObligation;
  private double medicareTaxObligation;
  private double federalTaxObligation;
  private double totalTaxOwed;
  private double totalTaxReturn;
}
