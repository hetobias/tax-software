package com.skillstorm.taxsoftware.controller;

import com.skillstorm.taxsoftware.model.User;
import com.skillstorm.taxsoftware.service.UserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://therkim.s3-website-us-east-1.amazonaws.com")
@RestController
@RequestMapping("/api/users")
@RequiredArgsConstructor
@Slf4j
public class UserController {

  private final UserService userService;

  @PostMapping
  public User createUser(@RequestBody User user) {
    return userService.createUser(user);
  }

  @GetMapping
  public List<User> getAllUsers() {
    return userService.getAllUsers();
  }

  @GetMapping("/{id}")
  public User getUserById(@PathVariable String id) {
    User user = userService.getUserById(id).orElse(null);
    if (user != null) {
      log.info("Successfully retrieved user with ID: {}", id);
    } else {
      log.warn("User with ID: {} not found!", id);
    }
    return userService.getUserById(id).orElse(null);
  }

  @PutMapping("/{id}")
  public User updateUser(@PathVariable String id, @RequestBody User user) {
    if (!id.equals(user.getId())) {
      System.out.println("User with ID: " + id + " not found!");
      return null;
    }
    System.out.println("Update request received for ID: " + id);
    user.setId(id);
    return userService.updateUser(user);
  }

  @DeleteMapping("/{id}")
  public void deleteUser(@PathVariable String id) {
    if (userService.existsById(id)) {
      userService.deleteUser(id);
      log.info("Successfully deleted user with ID: {}", id);
    } else {
      log.warn("User with ID: {} not found. Nothing to delete.", id);
    }
  }
}
