package com.marcony.imdb_android.views;

import androidx.appcompat.app.AppCompatActivity;
import androidx.appcompat.widget.AppCompatButton;

import android.content.Intent;
import android.content.SharedPreferences;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.EditText;
import android.widget.TextView;
import android.widget.Toast;

import com.marcony.imdb_android.R;
import com.marcony.imdb_android.services.api.Api;
import com.marcony.imdb_android.services.api.BackendService;
import com.marcony.imdb_android.services.models.User;
import com.marcony.imdb_android.services.models.UserToken;

import org.json.JSONException;
import org.json.JSONObject;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class MainActivity extends AppCompatActivity {

    private EditText emailInput;
    private EditText passwordInput;
    private AppCompatButton btn_enter, btn_create;
    private SharedPreferences storage ;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        emailInput = findViewById(R.id.input_email_login);
        passwordInput = findViewById(R.id.input_password_login);
        btn_enter= findViewById(R.id.button_enter_login);
        btn_create= findViewById(R.id.button_create_login);
        storage = getSharedPreferences("imdb",MODE_PRIVATE);
        btn_enter.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                hanldeLogin();
            }
        });

        btn_create.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                startActivity(new Intent(getApplicationContext(),RegisterActivity.class));
                finish();
            }
        });



    }

    private void hanldeLogin(){
        String email = emailInput.getText().toString();
        String password = passwordInput.getText().toString();
        if(email.isEmpty()&&password.isEmpty()) {
            Toast.makeText(getApplicationContext(), "Preencha todos os campos", Toast.LENGTH_SHORT).show();
            return;
        }

        User user = new User(email,password);

        BackendService service = Api.service.create(BackendService.class);

        Call<UserToken> response = service.logoUser(user);

        response.enqueue(new Callback<UserToken>() {
            @Override
            public void onResponse(Call<UserToken> call, Response<UserToken> response) {
                if(!response.isSuccessful()){
                    Toast.makeText(getApplicationContext(),"Houve algum erro a fazer login",Toast.LENGTH_SHORT).show();
                    return;
                }
                UserToken userToken = response.body();
                Log.d("DEBUG", "onResponse: "+ "Name User:"+ userToken.getUser().getName());
                storage.edit().putString("imdb:token",userToken.getToken());
                startActivity(new Intent(getApplicationContext(),HomeActivity.class));
                finish();

            }

            @Override
            public void onFailure(Call<UserToken> call, Throwable t) {
                t.printStackTrace();
                Toast.makeText(getApplicationContext(),"Houve algum erro ao acessar o  serviço",Toast.LENGTH_SHORT).show();
            }
        });

    }
}