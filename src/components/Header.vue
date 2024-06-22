<template>
    <header>
      <h1>KPTC Disc</h1>
      <div class="button-section">
        <button type = "button" onclick="location.href='authorization';" @click ="this.info = 'Авторизация'">Войти</button>
        <button type = "button" onclick="location.href='FileWindow';" @click ="this.info = 'Диск'">Открыть диск</button>
      </div>
    </header>
  </template>
  
  <script>
  export default {
    name: 'HeaderComponent'
  }
  </script>
  
  <style scoped>
  body {
    background-color: #FFF;
  }
  header {
    background-color: #42b983;
    color: white;
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
  }
  h1 {
    background-color: #FFF;
    color: #000;
    width: 120px;
    height: 120px;
    padding: 12px;
    text-align: center;
    border-radius: 50%;
    font-size: 28px;
    font-weight: bold;
    user-select: none;
  }
  a {
    text-decoration: none;
    color: #000;
  }
  button {
    border: none;
    border-radius: 4px;
    margin-right: 16px;
    padding: 4px 20px;
    cursor: pointer;
    font-size: 24px;
  }
  button:hover {
    background-color: #cacaca;
    transform: scale(1.01);
    transform:translateY(-1px) ;
    transition: background-color 250ms ease-in-out;
  }
  .button-section {
    margin: auto 0;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  </style>