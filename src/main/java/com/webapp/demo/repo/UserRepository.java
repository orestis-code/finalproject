package com.webapp.demo.repo;

import com.webapp.demo.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {


    Optional<User> findUserById(Long id);
    Optional<User> findUserByUsername(String username);
    List<User> findByUsernameContainingIgnoreCaseOrderByUsernameAsc(String username);
}
