package com.marcony.imdb_android.services.api_backend;


import com.marcony.imdb_android.services.models.tmdb.ListMovie;

import retrofit2.Call;
import retrofit2.http.GET;
import retrofit2.http.Path;
import retrofit2.http.Query;

public interface TMDBService {
    @GET("/3/list/{listId}")
    Call <ListMovie> getListMovie( @Path("listId") int listId, @Query("api_key") String apiKey);
}
