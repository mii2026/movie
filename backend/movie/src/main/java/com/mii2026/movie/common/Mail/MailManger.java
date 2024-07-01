package com.mii2026.movie.common.Mail;

import lombok.RequiredArgsConstructor;
import lombok.Value;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class MailManger {
    private final JavaMailSender mailSender;

    @Value("${spring.mail.username}")
    private String send_address;

    public send
}
