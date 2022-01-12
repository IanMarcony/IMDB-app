package com.marcony.imdb_android.services.models.tmdb;

import java.util.List;

public class ListMovie {
    private String name;
    private String description;
    private List<Movie> items;

    public ListMovie(String name, String description, List<Movie> items) {
        this.name = name;
        this.description = description;
        this.items = items;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public List<Movie> getItems() {
        return items;
    }

    public void setItems(List<Movie> items) {
        this.items = items;
    }

    @Override
    public String toString() {
        return "ListMovie{" +
                "name='" + name + '\'' +
                ", description='" + description + '\'' +
                ", items=" + items +
                '}';
    }
}
