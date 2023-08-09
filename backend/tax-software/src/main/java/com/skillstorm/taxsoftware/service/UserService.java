package com.skillstorm.taxsoftware.service;

import com.skillstorm.taxsoftware.model.User;
import com.skillstorm.taxsoftware.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserService {

  private final UserRepository userRepository;

  public User createUser(User user) {
    return userRepository.save(user);
  }

  public List<User> getAllUsers() {
    return userRepository.findAll();
  }

  public Optional<User> getUserById(String id) {
    return userRepository.findById(id);
  }

  public User updateUser(User user) {
    boolean exists = userRepository.existsById(user.getId());
    System.out.println("Checking existence of user with ID: " + user.getId() + ". Exists: " + exists);
    if (exists) {
      return userRepository.save(user);
    }
    return null;
  }

  public void deleteUser(String id) {
    userRepository.deleteById(id);
  }
}
