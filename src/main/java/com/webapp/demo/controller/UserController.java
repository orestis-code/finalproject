package com.webapp.demo.controller;

import com.webapp.demo.domain.dto.UserDto;
import com.webapp.demo.service.UserService;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/user")
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;

    @GetMapping("/users")
    public List<UserDto> search(@RequestParam String username) {
        return userService.searchUsers(username);
    }

    @GetMapping("/get-all-users")
    public List<UserDto> getAllUsers() {
        return userService.searchUsers("");
    }

    @GetMapping("/get-user/{id}")
    public ResponseEntity<UserDto> getUserById(@PathVariable Long id) {

        UserDto dto = userService.getUserById(id);

        return new ResponseEntity<>(dto, HttpStatusCode.valueOf(HttpServletResponse.SC_OK));
    }

    @PostMapping("/save-user")
    public ResponseEntity<Void> saveUser(@RequestBody UserDto dto) {
        userService.saveUser(dto);
        return ResponseEntity.ok().build();
    }

}
