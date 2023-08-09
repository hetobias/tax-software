package com.skillstorm.taxsoftware;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;

@SpringBootApplication(exclude = { DataSourceAutoConfiguration.class })
public class TaxSoftwareApplication {

	public static void main(String[] args) {
		SpringApplication.run(TaxSoftwareApplication.class, args);
	}
}