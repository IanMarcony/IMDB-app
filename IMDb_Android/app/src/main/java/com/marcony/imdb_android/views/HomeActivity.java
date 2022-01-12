package com.marcony.imdb_android.views;

import androidx.appcompat.app.AppCompatActivity;
import androidx.appcompat.widget.AppCompatImageButton;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import android.content.Intent;
import android.content.SharedPreferences;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.ProgressBar;
import android.widget.TextView;
import android.widget.Toast;

import com.marcony.imdb_android.R;
import com.marcony.imdb_android.adapter.MyRecycleViewMovieListAdapter;
import com.marcony.imdb_android.adapter.MyRecycleViewUserListAdapter;
import com.marcony.imdb_android.services.api_backend.Api;
import com.marcony.imdb_android.services.api_backend.BackendService;
import com.marcony.imdb_android.services.api_backend.TMDBService;
import com.marcony.imdb_android.services.models.backend.User;
import com.marcony.imdb_android.services.models.tmdb.ListMovie;

import java.util.ArrayList;
import java.util.List;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class HomeActivity extends AppCompatActivity {

    private AppCompatImageButton btn_logout;
    private RecyclerView listView;
    private RecyclerView listMoviesView;
    private RecyclerView.LayoutManager layoutManager;
    private RecyclerView.LayoutManager layoutMovieManager;

    private SharedPreferences storage;

    private ProgressBar loading;
    private ProgressBar loadingTMDB;

    private TextView titleList;
    private TextView overviewList;

    private static final String TAG = "HomeActivity";

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_home);

        btn_logout = findViewById(R.id.logout_button_home);

        loading = findViewById(R.id.loading_home);
        loading.setVisibility(View.GONE);
        loadingTMDB = findViewById(R.id.loading_list_home);
        loadingTMDB.setVisibility(View.GONE);


        storage = getSharedPreferences("imdb",MODE_PRIVATE);

        btn_logout.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                handleLogout();
            }
        });
        listView = findViewById(R.id.list_users_home);
        listMoviesView = findViewById(R.id.list_movies_home);

        titleList = findViewById(R.id.title_list);
        overviewList = findViewById(R.id.overviews_list);

        layoutManager = new LinearLayoutManager(getApplicationContext(),LinearLayoutManager.HORIZONTAL,
                false);
        layoutMovieManager = new LinearLayoutManager(getApplicationContext(),LinearLayoutManager.HORIZONTAL,
                false);
        listView.setLayoutManager(layoutManager);
        listMoviesView.setLayoutManager(layoutMovieManager);
        getAllUsers();
        getAllMovies();
    }

    private  void getAllUsers(){
        loading.setVisibility(View.VISIBLE);
        String token = storage.getString("imdb:token","");
        String auth  = "Bearer "+token;

        BackendService service = Api.getInstanceBackend().create(BackendService.class);

        Call<List<User>> response = service.indexUsers(auth);
        response.enqueue(new Callback<List<User>>() {
            @Override
            public void onResponse(Call<List<User>> call, Response<List<User>> response) {
                if(!response.isSuccessful()){
                    loading.setVisibility(View.GONE);
                    Toast.makeText(getApplicationContext(),"Tente fazer login novamente",Toast.LENGTH_SHORT).show();
                    startActivity(new Intent(getApplicationContext(),MainActivity.class));
                    finish();

                }

                List<User> users = response.body();

                MyRecycleViewUserListAdapter adapter = new MyRecycleViewUserListAdapter(users);

                listView.setAdapter(adapter);
                loading.setVisibility(View.GONE);
            }

            @Override
            public void onFailure(Call<List<User>> call, Throwable t) {
                t.printStackTrace();
                loading.setVisibility(View.GONE);
                Toast.makeText(getApplicationContext(),"Houve algum erro ao acessar o  serviço",Toast.LENGTH_SHORT).show();

            }
        });

    }

    private void getAllMovies(){
        loading.setVisibility(View.VISIBLE);

        TMDBService tmdbService = Api.getInstanceTMDB().create(TMDBService.class);

        Call<ListMovie> request =  tmdbService.getListMovie( 1, getString(R.string.api_token));

        request.enqueue(new Callback<ListMovie>() {
            @Override
            public void onResponse(Call<ListMovie> call, Response<ListMovie> response) {
                if(!response.isSuccessful()){
                    loading.setVisibility(View.GONE);
                    Toast.makeText(getApplicationContext(), "Ocorreu algum erro ao acessar TMDB", Toast.LENGTH_SHORT).show();
                    return;
                }

                titleList.setText(response.body().getName());
                overviewList.setText(response.body().getDescription());


                MyRecycleViewMovieListAdapter adapter = new MyRecycleViewMovieListAdapter(response.body().getItems());

                listMoviesView.setAdapter(adapter);
                loading.setVisibility(View.GONE);

            }

            @Override
            public void onFailure(Call<ListMovie> call, Throwable t) {
                t.printStackTrace();
                loading.setVisibility(View.GONE);

            }
        });

    }

    private void handleLogout(){
        storage.edit().remove("imdb:token").apply();

        startActivity(new Intent(getApplicationContext(),MainActivity.class));

        finish();

    }

    @Override
    protected void onStart() {
        super.onStart();
        if(!storage.contains("imdb:token")){
            startActivity(new Intent(getApplicationContext(),MainActivity.class));

            finish();
        }
    }
}