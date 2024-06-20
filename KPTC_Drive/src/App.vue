<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
  <button @click="goHome()" class="backbutton">⭠</button> 
  <div class = 'container'>
      <h1>Настройка пользователя</h1>
      <input type="text" placeholder="Введите фамилию" v-model="lastName">
      <input type="text" placeholder="Введите имя" v-model="firstName">
      <input type="text" placeholder="Введите отчество" v-model="middleName">
      <input type="password" placeholder="Введите старый пароль" v-model="useroldPassword">
      <input type="password" placeholder="Введите новый пароль" v-model="userPassword">
      <input type="password" placeholder="Подтвердите пароль" v-model="userconfirmPassword">
      <button @click="saveData()" class="saveButton">Сохранить</button>
      
    </div>
  </header>
  
</template>

<script>
export default {
  data() {
    return {
        lastName: '',
        firstName: '',
        middleName: '',
        useroldPassword: '',
        userPassword: '',
        userconfirmPassword: '',
    };
    },
    methods:{
      saveData(){ // метод кнопкни Сохранить
        
      },
      goHome(){
        window.open("https://www.youtube.com/watch?v=i_gCg5Tp-rs"); // Тут крч нужен метод открытия главного окна, а я не шарю его название, сами добавите
      }
    }
}



  
  
</script>

<style scoped>
.user-form {
  max-width: 300px;
  margin: auto;
}

header {
  line-height: 1.5;
  max-height: 100vh;

}

 .container{
  font-family: 'Roboto', sans-serif;
  background-color: #f9f9f9;
  padding: 20px;
  border: #ffffff;
  border-radius: 5px;
  width: 300px;
  margin: auto;
  font-size: 13px;
  text-align: center;
 }
 .container input{
  width: 100%;
  background: transparent;
  padding: 8px;
  margin: 5px 0;
  display: inline-block;
  border: 0;
  outline: none;
  border-bottom: 2px solid hsla(160, 100%, 37%, 1);
  box-sizing: border-box;
 }
 .backbutton{
  background-color: hsla(160, 100%, 37%, 1);
  color: white;
  border: 2px solid hsla(160, 100%, 37%, 1);
  text-align: center;
  font-size: 16px;
  border-radius: 5px;
  position: fixed;
}
.saveButton{
  background-color: hsla(160, 100%, 37%, 1);
  color: white;
  padding: 20px;
  border: 2px solid hsla(160, 100%, 37%, 1);
  text-align: center;
  font-size: 16px;
  margin: auto; 
  border-radius: 5px;
  width: 260px;
}

.container h1{
  color: hsla(160, 100%, 37%, 1);
  text-align: center;
}

</style>



