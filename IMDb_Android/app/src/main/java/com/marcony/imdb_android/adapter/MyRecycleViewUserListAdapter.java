package com.marcony.imdb_android.adapter;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import com.marcony.imdb_android.R;
import com.marcony.imdb_android.services.models.backend.User;

import java.util.List;

public class MyRecycleViewUserListAdapter extends RecyclerView.Adapter<MyRecycleViewUserListAdapter.ViewHolder> {

    private List<User> usersList;

    public MyRecycleViewUserListAdapter(List<User> usersList) {
        this.usersList = usersList;
    }

    public static class ViewHolder extends RecyclerView.ViewHolder{
        private TextView nameUser;
        private ImageView imageUser;

        public  ViewHolder(@NonNull View itemView){
            super(itemView);
            nameUser = itemView.findViewById(R.id.name_user_item);
            imageUser = itemView.findViewById(R.id.image_user_item);

        }

    }

    @NonNull
    @Override
    public MyRecycleViewUserListAdapter.ViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        View view = LayoutInflater.from(parent.getContext()).inflate(R.layout.base_item_user,parent,false);
        ViewHolder viewHolder = new ViewHolder(view);
        return viewHolder;
    }

    @Override
    public void onBindViewHolder(@NonNull MyRecycleViewUserListAdapter.ViewHolder holder, int position) {
        holder.nameUser.setText(usersList.get(position).getName());
//        if(!usersList.get(position).getImage().isEmpty()){
//            //holder.imageUser.setImageBitmap(); //Aqui usará o Picasso futuramente
//        }
    }

    @Override
    public int getItemCount() {
        return usersList.size();
    }
}
