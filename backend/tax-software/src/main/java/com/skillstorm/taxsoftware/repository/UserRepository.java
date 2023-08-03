package com.skillstorm.taxsoftware.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import com.skillstorm.taxsoftware.model.User;

@Repository
public interface UserRepository extends MongoRepository<User, String> {
  User findByOauthId(String oauthId);
}