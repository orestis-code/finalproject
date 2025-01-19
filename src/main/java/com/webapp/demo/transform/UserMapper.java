package com.webapp.demo.transform;

import com.webapp.demo.domain.User;
import com.webapp.demo.domain.dto.UserDto;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface UserMapper {
    User toEntity(UserDto dto);
    UserDto toDto(User entity);

    List<User> toEntityList(List<UserDto> dtos);
    List<UserDto> toDtoList(List<User> entities);
}
