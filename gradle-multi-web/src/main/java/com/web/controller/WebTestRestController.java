package com.web.controller;

import com.core.domain.user.Member;
import com.core.domain.user.MemberRepository;
import com.web.service.user.MemberService;
import lombok.AllArgsConstructor;
import org.springframework.core.env.Environment;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;

@RestController
@AllArgsConstructor
public class WebTestRestController {

    private MemberService memberService;
    private Environment environment;

    @GetMapping("/test")
    public ResponseEntity<?> getMembers() {
        return ResponseEntity.ok(memberService.memberList());
    }

    @GetMapping("/profile")
    public String getProfile() {
        return Arrays.stream(environment.getActiveProfiles())
                .findFirst()
                .orElse("");
    }
}
