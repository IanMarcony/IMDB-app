package com.marcony.imdb_android.services.api_backend;

import com.marcony.imdb_android.services.models.backend.User;
import com.marcony.imdb_android.services.models.backend.UserToken;

import java.util.List;

import retrofit2.Call;
import retrofit2.http.Body;
import retrofit2.http.GET;
import retrofit2.http.Header;
import retrofit2.http.POST;

public interface BackendService {
    @GET("/users")
    Call<List<User>> indexUsers(@Header("Authorization") String authorization);

    @POST("/users/register")
    Call <UserToken> createUser(@Body User user);

    @POST("/users/auth")
    Call <UserToken> logoUser(@Body User user);
}
