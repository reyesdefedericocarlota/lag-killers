package com.lagkillers.backend.repository;

import com.lagkillers.backend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}