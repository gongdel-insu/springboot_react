package com.web.service;

import com.core.domain.user.Member;
import com.web.service.user.MemberService;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import static org.hamcrest.core.Is.is;
import static org.junit.Assert.assertThat;

@RunWith(SpringRunner.class)
@SpringBootTest
public class MemberServiceTest {

    @Autowired
    private MemberService memberService;


    @Test
    public void member_signup_test() {
        Member member = new Member("gongdel", "gongdel@gmail.com");
        Long id  = memberService.signup(member);
        assertThat(id,is(1L));
    }
}
