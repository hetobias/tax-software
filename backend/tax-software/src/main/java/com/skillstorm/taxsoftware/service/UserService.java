package com.skillstorm.taxsoftware.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skillstorm.taxsoftware.model.User;
import com.skillstorm.taxsoftware.repository.UserRepository;

@Service
public class UserService {
  @Autowired
  private UserRepository userRepository;

  public User findByOauthId(String oauthId) {
    User user = userRepository.findByOauthId(oauthId);
    System.out.println("findByOauthId - oauthId: " + oauthId + ", User: " + user);
    return user;
  }

  // More service methods as required...
}