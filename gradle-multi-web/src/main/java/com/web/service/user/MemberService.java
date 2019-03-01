package com.web.service.user;

import com.core.domain.user.Member;
import com.core.domain.user.MemberRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MemberService {

    private MemberRepository memberRepository;

    public MemberService(MemberRepository memberRepository) {
        this.memberRepository = memberRepository;
    }

    public Long signup(Member member) {
        return memberRepository.save(member).getId();
    }

    public List<Member> memberList() {
        return memberRepository.findAll();
    }
}
