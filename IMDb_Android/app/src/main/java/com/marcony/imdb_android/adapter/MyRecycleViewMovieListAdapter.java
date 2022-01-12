package com.marcony.imdb_android.adapter;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import com.marcony.imdb_android.R;
import com.marcony.imdb_android.services.models.tmdb.Movie;
import com.squareup.picasso.Picasso;

import java.util.List;

public class MyRecycleViewMovieListAdapter extends RecyclerView.Adapter<MyRecycleViewMovieListAdapter.ViewHolder> {

    private List<Movie> moviesList;

    public MyRecycleViewMovieListAdapter(List<Movie> moviesList) {
        this.moviesList = moviesList;
    }

    public static class ViewHolder extends RecyclerView.ViewHolder{
        private TextView titlePoster;
        private ImageView imagePoster;

        public  ViewHolder(@NonNull View itemView){
            super(itemView);
            titlePoster = itemView.findViewById(R.id.text_poster);
            imagePoster = itemView.findViewById(R.id.image_poster);

        }

    }

    @NonNull
    @Override
    public MyRecycleViewMovieListAdapter.ViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        View view = LayoutInflater.from(parent.getContext()).inflate(R.layout.base_item_movie,parent,false);
        ViewHolder viewHolder = new ViewHolder(view);
        return viewHolder;
    }

    @Override
    public void onBindViewHolder(@NonNull MyRecycleViewMovieListAdapter.ViewHolder holder, int position) {
        holder.titlePoster.setText(moviesList.get(position).getTitle());
        Picasso.get()
                .load("https://image.tmdb.org/t/p/original"+moviesList.get(position).getPoster_path())
                .into(holder.imagePoster);
    }

    @Override
    public int getItemCount() {
        return moviesList.size();
    }
}
