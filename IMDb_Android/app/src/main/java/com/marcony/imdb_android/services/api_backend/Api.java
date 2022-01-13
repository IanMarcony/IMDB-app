package com.marcony.imdb_android.services.api_backend;

import java.util.concurrent.TimeUnit;

import okhttp3.OkHttpClient;
import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;

public class Api {
    private static Retrofit serviceBackend;
    private static Retrofit serviceTMDB;
    private static final String URL_API_BACKEND="http://192.168.0.10:3333/";
    private static final String URL_API_TMDB="https://api.themoviedb.org/";

    private static OkHttpClient getClientTimeout(int timeout){
        return new OkHttpClient.Builder()
                .readTimeout(timeout, TimeUnit.SECONDS)
                .connectTimeout(timeout, TimeUnit.SECONDS)
                .build();
    }

    public static synchronized Retrofit getInstanceBackend(){
        if(serviceBackend==null){
            serviceBackend = new Retrofit.Builder()
                    .baseUrl(URL_API_BACKEND)
                    .addConverterFactory(GsonConverterFactory.create())
                    .build();
        }
        return serviceBackend;
    }

    public static synchronized Retrofit getInstanceTMDB(){
        if(serviceTMDB==null){
            serviceTMDB = new Retrofit.Builder()
                    .baseUrl(URL_API_TMDB)
                    .addConverterFactory(GsonConverterFactory.create())
                    .build();
        }
        return serviceTMDB;
    }

}
