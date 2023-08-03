package com.skillstorm.taxsoftware.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "taxgenius")

public class User {
  @Id
  private String id;
  private String oauthId;
  private String firstName;
  private String lastName;
}
