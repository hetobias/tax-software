package com.skillstorm.taxsoftware.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.skillstorm.taxsoftware.model.User;
import com.skillstorm.taxsoftware.service.UserService;

@RestController
@RequestMapping("/api/users")
public class UserController {

  private final UserService userService;

  @Autowired
  public UserController(UserService userService) {
    this.userService = userService;
  }

  @PostMapping("/register")
  public User registerUser(@RequestBody User user) {
    // Here, you can perform any additional validation or processing before calling
    // the service method.
    return userService.createUser(user);
  }

  @GetMapping("/{userId}")
  public User getUser(@PathVariable String userId) {
    return userService.getUserById(userId);
  }

  // Add more endpoints and request mappings as needed...
}
