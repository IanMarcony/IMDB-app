package com.marcony.imdb_android.services.models.backend;

import com.marcony.imdb_android.services.models.backend.User;

public class UserToken {
    private User user;
    private String token;

public UserToken(){}
    public UserToken(User user, String token) {
        this.user = user;
        this.token = token;
    }



    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }
}
