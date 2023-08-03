package com.skillstorm.taxsoftware.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.skillstorm.taxsoftware.model.User;
import com.skillstorm.taxsoftware.service.UserService;

@RestController
@RequestMapping("/api/users")
public class UserController {
  @Autowired
  private UserService userService;

  @GetMapping("/{oauthId}")
  public User findByOauthId(@PathVariable String oauthId) {
    return userService.findByOauthId(oauthId);
  }

  // Additional endpoints as required...
}
