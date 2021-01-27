package com.marcony.imdb_android.views;

import androidx.appcompat.app.AppCompatActivity;
import androidx.appcompat.widget.AppCompatImageButton;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import android.content.Intent;
import android.content.SharedPreferences;
import android.os.Bundle;
import android.view.View;
import android.widget.ProgressBar;
import android.widget.Toast;

import com.marcony.imdb_android.R;
import com.marcony.imdb_android.adapter.MyRecycleViewAdapter;
import com.marcony.imdb_android.services.api.Api;
import com.marcony.imdb_android.services.api.BackendService;
import com.marcony.imdb_android.services.models.User;

import java.util.ArrayList;
import java.util.List;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class HomeActivity extends AppCompatActivity {

    private AppCompatImageButton btn_logout;
    private List<User> usersList;
    private RecyclerView listView;
    private  RecyclerView.LayoutManager layoutManager;

    private SharedPreferences storage;

    private ProgressBar loading;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_home);

        btn_logout = findViewById(R.id.logout_button_home);

        loading = findViewById(R.id.loading_home);
        loading.setVisibility(View.GONE);


        storage = getSharedPreferences("imdb",MODE_PRIVATE);

        btn_logout.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                handleLogout();
            }
        });
        usersList = new ArrayList<User>();
        listView = findViewById(R.id.list_users_home);

        layoutManager = new LinearLayoutManager(getApplicationContext(),LinearLayoutManager.HORIZONTAL,
                false);
        listView.setLayoutManager(layoutManager);
        getAllUsers();
    }

    private  void getAllUsers(){
        loading.setVisibility(View.VISIBLE);
        String token = storage.getString("imdb:token","");
        String auth  = "Bearer "+token;

        BackendService service = Api.service.create(BackendService.class);

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

                MyRecycleViewAdapter adapter = new MyRecycleViewAdapter(users);

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