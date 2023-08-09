package com.skillstorm.taxsoftware.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.oauth2.client.userinfo.DefaultOAuth2UserService;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserRequest;
import org.springframework.security.oauth2.core.OAuth2AuthenticationException;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.stereotype.Service;

import com.skillstorm.taxsoftware.model.User;
import com.skillstorm.taxsoftware.repository.UserRepository;

@Service
public class CustomOAuth2UserService extends DefaultOAuth2UserService {

  @Autowired
  private UserRepository userRepository;

  @Override
  public OAuth2User loadUser(OAuth2UserRequest userRequest) throws OAuth2AuthenticationException {
    OAuth2User oAuth2User = super.loadUser(userRequest);

    String googleId = oAuth2User.getAttribute("sub");
    String email = oAuth2User.getAttribute("email");

    Optional<User> userOptional = userRepository.findByGoogleId(googleId);

    if (userOptional.isEmpty()) {
      User newUser = new User();
      newUser.setGoogleId(googleId);
      newUser.setEmail(email);
      userRepository.save(newUser);
    }

    return oAuth2User;
  }
}
