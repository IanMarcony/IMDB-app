package com.marcony.imdb_android.views;

import androidx.appcompat.app.AppCompatActivity;
import androidx.appcompat.widget.AppCompatButton;

import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.view.inputmethod.InputMethodManager;
import android.widget.EditText;
import android.widget.ProgressBar;
import android.widget.Toast;

import com.marcony.imdb_android.R;
import com.marcony.imdb_android.services.api.Api;
import com.marcony.imdb_android.services.api.BackendService;
import com.marcony.imdb_android.services.models.User;
import com.marcony.imdb_android.services.models.UserToken;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class RegisterActivity extends AppCompatActivity {

    private EditText inputName, inputEmail, inputPassword;
    private SharedPreferences storage;
    private AppCompatButton btn_create, btn_back;

    private ProgressBar loading;



    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_register);

        inputName= findViewById(R.id.input_name_register);
        inputEmail= findViewById(R.id.input_email_register);
        inputPassword = findViewById(R.id.input_password_register);

        storage = getSharedPreferences("imdb",MODE_PRIVATE);

        btn_create= findViewById(R.id.button_create_register);
        btn_back = findViewById(R.id.button_back_register);

        loading= findViewById(R.id.loading_register);
        loading.setVisibility(View.GONE);

        btn_back.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                startActivity(new Intent(getApplicationContext(),MainActivity.class));
                finish();
            }
        });

        btn_create.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                handleCreateUser();
            }
        });

        inputPassword.setOnFocusChangeListener(new View.OnFocusChangeListener()
        {
            @Override
            public void onFocusChange(View v, boolean hasFocus)
            {
                if (!hasFocus) {
                    ((InputMethodManager) getApplicationContext().getSystemService(Context.INPUT_METHOD_SERVICE)).hideSoftInputFromWindow(
                            inputPassword.getWindowToken(), 0);
                }
            }
        });

    }

    private void handleCreateUser(){
        loading.setVisibility(View.VISIBLE);
        btn_back.setClickable(false);
        btn_create.setClickable(false );
        String name = inputName.getText().toString();
        String email = inputEmail.getText().toString();
        String password = inputPassword.getText().toString();

        if(!email.contains("@")){
            loading.setVisibility(View.GONE);
            btn_back.setClickable(true);
            btn_create.setClickable(true);
            Toast.makeText(getApplicationContext(), "Digite um email!", Toast.LENGTH_SHORT).show();
            return;
        }
        if(email.isEmpty()&&password.isEmpty()&&name.isEmpty()) {
            loading.setVisibility(View.GONE);
            btn_back.setClickable(true);
            btn_create.setClickable(true);
            Toast.makeText(getApplicationContext(), "Preencha todos os campos", Toast.LENGTH_SHORT).show();
            return;
        }

        User user  = new User(name,email, password);

        BackendService service = Api.service.create(BackendService.class);

        Call<UserToken> response = service.createUser(user);

        response.enqueue(new Callback<UserToken>() {
            @Override
            public void onResponse(Call<UserToken> call, Response<UserToken> response) {
                if(!response.isSuccessful()){

                    loading.setVisibility(View.GONE);
                    btn_back.setClickable(true);
                    btn_create.setClickable(true);
                   Toast.makeText(getApplicationContext(), "Não foi possível criar a sua conta. ", Toast.LENGTH_SHORT).show();
                    return;

                }

                UserToken  userToken = response.body();

                SharedPreferences.Editor editor  = storage.edit();
                editor.putString("imdb:token",userToken.getToken());
                editor.apply();
                loading.setVisibility(View.GONE);
                btn_back.setClickable(true);
                btn_create.setClickable(true);
                startActivity(new Intent(getApplicationContext(),HomeActivity.class));

                finish();

            }

            @Override
            public void onFailure(Call<UserToken> call, Throwable t) {
                loading.setVisibility(View.GONE);
                t.printStackTrace();

                btn_back.setClickable(true);
                btn_create.setClickable(true);
                Toast.makeText(getApplicationContext(),"Houve algum erro ao acessar o  serviço",Toast.LENGTH_SHORT).show();
            }
        });

    }
}