package com.skillstorm.taxsoftware.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skillstorm.taxsoftware.model.User;
import com.skillstorm.taxsoftware.repository.UserRepository;

@Service
public class UserService {

  private final UserRepository userRepository;

  @Autowired
  public UserService(UserRepository userRepository) {
    this.userRepository = userRepository;
  }

  // Custom business logic for user-related operations can be added here.
  public User createUser(User user) {
    // Add any necessary validation or business logic here before saving the user.
    return userRepository.save(user);
  }

  public User getUserById(String userId) {
    return userRepository.findById(userId).orElse(null);
  }

  // Add more methods as needed...
}