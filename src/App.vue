<template>
  <div class="wrapper" >
    <Header/>
    <div class="content">
      <video autoplay="autoplay" loop="loop" src="/public/gif.mp4"></video>
      <img src="/public/sigma.gif" alt="">
      <video autoplay="autoplay" loop="loop" src="/public/papi4.mp4"></video>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default {
  components: { Header, Footer },
  data() {
    return {

    };
  },
  methods: {

  }
}

</script>

<style scoped>

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;    
  }
  .wrapper {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
  .content {
    flex: 1 0 auto;
    background-color: #FFF;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    align-items: center;
  }
  .content > * {
    width: 320px;
  }
</style>

