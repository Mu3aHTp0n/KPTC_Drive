<template>
    <div class="auth-container" >
      <h2>Авторизация твоей личности</h2>
        <div class="user">
          <label for="username">Лицо попроще сделай! Логин давай:</label>
          <input type="text" id="username" v-model="credentials.username" required>
        </div>
        <div class="pass">
          <label for="password">Что там скрываешь? Показывай! :</label>
          <input type="password" id="password" v-model="credentials.password" required>
        </div>
        <div class="section">
          <button type="button" class="in" @click="login">Войти</button>
          <button type="button" class="backgo" @click="back">Назад</button>
        </div>
        <img src="\public\3.png" class="image">
        <img src="\public\2.png" class="image_av">
        <img src="\public\1.png" class="st_image">
        <p v-if="errorMessage">{{ errorMessage }}</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        credentials: {
          username: '',
          password: ''
        },
        errorMessage: ''
      };
    },
    methods: {
      back() {
        window.history.back();
      },
      login() {
        if (!this.credentials.username || !this.credentials.password) {
          this.errorMessage = 'Пожалуйста, заполните все поля.';
          return;
        }
        
        const sendRequest = (method, url, body = null) => {
          const headers = {
            'Content-Type': 'application/json'
          };
  
          return fetch(url, {
            method: method,
            body: JSON.stringify(body),
            headers: headers
          }).then(response => {
            if (response.ok) {
              return response.json();
            }
  
            return response.json().then(error => {
              const e = new Error('Что-то пошло не так');
              e.data = error;
              throw e;
            });
          });
        };
  
        const body = {
          username: this.credentials.username,
          password: this.credentials.password
        };
  
        sendRequest('POST', //'https://jsonplaceholder.typicode.com/users' (fake ссылка) бэк должен обратиться к бз, я не могу,
         body)
        .then(data => {console.log('Успешный вход:', data)})
        location.replace('FileWindow')
         //.catch(err => {console.error('Ошибка входа:', err)});
          //this.errorMessage = 'Неверные данные. Пожалуйста, повторите попытку.';
      }
    }
  };
  </script>
  
  <style scoped>
  
  h2 {
    font-size: 20px;
    margin-bottom: 20px;
  }
  
  .auth-container {
    font-family: 'Roboto', sans-serif;
    background-color: #ffffff;
    color: black;
    padding: 20px;
    border: #ffffff;
    border-radius: 5px;
    width: 320px;
    margin: auto;
    font-size: 13px;
  }
  
  .user {
    margin-bottom: 20px;
  }
  .pass {
    margin-bottom: 20px;
  }
  
  input[type="text"],
  input[type="password"] {
    width: 250px;
    padding: 8px;
    margin-top: 6px;
    color:black;
    border: 1px solid #000000;
    border-radius: 4px;
    font-size: 16px;
  }
  
  .in {
      padding: 10px 52px; 
      border: none; 
      border-radius: 5px; 
      background-color: #3f6fff; 
      color: white; 
      font-size: 16px; 
      cursor: pointer; 
      margin-right: 15px;
      transition: background-color 0.3s ease;
    
  }
  
  .in:hover {
    background-color: #009da8;
  }
  .backgo{
    padding: 10px 20px; 
      border: none; 
      border-radius: 5px; 
      background-color: #3f6fff; 
      font-size: 16px; 
      cursor: pointer; 
      color: white; 
      transition: background-color 0.3s ease; 
  
  }
  .backgo:hover {
    background-color: #009da8;
  }
  
  .image {
    position: absolute;
    width: 150px; 
    height: 150px; 
    margin: -200px;
    display: block;
    margin-top: -126px
    
  }
  .image_av{
    position: absolute;
    width: 150px; 
    height: 150px; 
    margin: 90px ;
    display: block;
    margin-top: 40px;
    
  }
  
  .st_image{
    position: absolute;
    width: 150px; 
    height: 150px; 
    margin: 100px;
    display: block;
    margin-left: -100px;
    background-color: #ffffff;
    transform: scaleY(-1);
    margin-top: 40px;
  
  }
  .section{
  display: flex; 
  flex-direction: row;
  }
  
  </style>