package com.mii2026.movie.user.service;

import com.mii2026.movie.user.entity.User;
import com.mii2026.movie.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class userService {
    private final UserRepository userRepository;

    public void sendCode(String email){
        if(checkDuplicateEmail(email))
            throw new IllegalArgumentException("이미 존재하는 이메일입니다.");


    }

    public boolean checkDuplicateEmail(String email){
        Optional< User> ouser = userRepository.findByEmail(email);
        return ouser.isPresent();
    }
}
