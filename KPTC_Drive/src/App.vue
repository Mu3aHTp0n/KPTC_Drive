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
      <button type="button" class="in" @click="login">Войти</button>
      <button type="button" class="backgo" @click="back">Назад</button>
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
      // для бэка
    }
  }
};
</script>

<style scoped>

h2 {
  font-size: 20px;
}

.auth-container {
  font-family: 'Roboto', sans-serif;
  background-color: #ffffff;
  padding: 20px;
  border: #ffffff;
  border-radius: 5px;
  width: 300px;
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
  border: 1px solid #000000;
  border-radius: 4px;
  font-size: 16px;
}

.in {
  width: 268px;
  margin-right: 30px;
  margin-bottom: -20px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #3f6fff;
  color: white;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  
}

.in:hover {
  background-color: #009da8;
}
.backgo{
  position: absolute;
  width: 75px;
  padding: 10px;
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
  margin-top: 30px;
  
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
  margin-top: 30px;
}
</style>

