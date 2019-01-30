package com.domain.user;

import com.core.domain.user.Member;
import com.core.domain.user.MemberRepository;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.context.junit4.SpringRunner;

import static org.hamcrest.core.Is.is;
import static org.junit.Assert.assertThat;

@RunWith(SpringRunner.class)
@DataJpaTest // entity와 repository만 테스트 따라서 @SpringBootTest 대체
public class MemberRepositoryTest {

    @Autowired
    private MemberRepository memberRepository;

    @Test
    public void Member_저장_테스트() {
        memberRepository.save(new Member("gongdel", "gongdel@gmail.com"));
        Member saved = memberRepository.getOne(1L);
        assertThat(saved.getName(), is("gongdel"));
    }
}
