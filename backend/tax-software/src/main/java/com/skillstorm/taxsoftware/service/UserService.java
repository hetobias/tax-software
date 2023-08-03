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
    return userRepository.findByOauthId(oauthId);
  }

  // More service methods as required...
}