package com.webapp.demo.domain.dto.response;

import lombok.*;

@Setter
@Getter
@Data
@Builder
public class AuthenticationResponse {

    private String token;

    public AuthenticationResponse(String token) {
        this.token = token;
    }

}
