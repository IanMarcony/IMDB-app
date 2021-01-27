package com.marcony.imdb_android.services.api;

import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;

public class Api {
    public static Retrofit service = new Retrofit.Builder()
            .baseUrl("http://192.168.0.6:3333")
            .addConverterFactory(GsonConverterFactory.create())
            .build();

}
