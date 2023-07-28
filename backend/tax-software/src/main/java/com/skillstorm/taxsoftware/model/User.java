package com.skillstorm.taxsoftware.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.AllArgsConstructor;
import lombok.Getter;

@Document(collection = "users")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class User {
  @Id
  private String id;
  private String firstName;
  private String lastName;
  private String email;
  private String address;
  private String city;
  private String state;
  private String postalCode;
}
