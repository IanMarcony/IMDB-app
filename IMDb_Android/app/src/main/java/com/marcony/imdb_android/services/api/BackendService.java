package com.marcony.imdb_android.services.api;

import com.marcony.imdb_android.services.models.User;
import com.marcony.imdb_android.services.models.UserToken;

import java.util.List;

import retrofit2.Call;
import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;
import retrofit2.http.Body;
import retrofit2.http.GET;
import retrofit2.http.Header;
import retrofit2.http.POST;

public interface BackendService {

    @GET("/user")
    Call <List<User>> indexUsers(@Header("Authorization") String authorization);

    @POST("/user/register")
    Call <User> createUser(@Body User user);

    @POST("/user/auth")
    Call <UserToken> logoUser(@Body User user);

}
