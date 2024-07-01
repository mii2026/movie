package com.mii2026.movie.user.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Builder;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import java.time.LocalDate;

@Entity
@Setter
@NoArgsConstructor
@ToString
public class User {
    @Id
    private Long userId;
    private String email;
    private String pw;
    private String name;
    private LocalDate birthday;
    private Boolean admin;

    @Builder
    public User(String email, String pw, String name, LocalDate birthday, Boolean admin){
        this.email = email;
        this.pw = pw;
        this.name = name;
        this.birthday = birthday;
        this.admin = admin;
    }
}
