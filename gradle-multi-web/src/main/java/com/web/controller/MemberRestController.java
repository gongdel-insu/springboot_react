package com.web.controller;

import com.core.domain.user.Member;
import com.core.domain.user.MemberRepository;
import com.web.service.user.MemberService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@AllArgsConstructor
public class MemberRestController {

    private MemberService memberService;

    @GetMapping("/test")
    public Member get() {
        return new Member("gongdel", "gongdel@gmail.com");
    }
}
