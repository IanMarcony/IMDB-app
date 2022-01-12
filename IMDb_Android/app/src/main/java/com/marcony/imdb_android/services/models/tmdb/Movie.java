package com.marcony.imdb_android.services.models.tmdb;

public class Movie {
    private String title;
    private String poster_path;

    public Movie(String title, String overview, String poster_path) {
        this.title = title;
        this.poster_path = poster_path;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }



    public String getPoster_path() {
        return poster_path;
    }

    public void setPoster_path(String poster_path) {
        this.poster_path = poster_path;
    }

    @Override
    public String toString() {
        return "Movie{" +
                "title='" + title + '\'' +
                ", poster_path='" + poster_path + '\'' +
                '}';
    }
}
