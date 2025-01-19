package com.webapp.demo.service;

import com.webapp.demo.domain.User;
import com.webapp.demo.domain.dto.UserDto;
import com.webapp.demo.repo.UserRepository;
import com.webapp.demo.transform.UserMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;
    private final UserMapper userMapper;

    public List<UserDto> searchUsers(String username) {
        return userMapper.toDtoList(
                userRepository.findByUsernameContainingIgnoreCaseOrderByUsernameAsc(username));
    }

    public UserDto getUserById(Long id) {
        return userMapper.toDto(userRepository.findUserById(id)
                .orElseThrow(() -> new ResourceNotFoundException("User not found")));
    }

    public void saveUser(UserDto dto) {
        User user = userMapper.toEntity(dto);
        userRepository.save(user);
    }

}
