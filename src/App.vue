<template>
  <div class="wrapper" >
    <Header/>
    <div class="content"></div>
    <!-- <RouterLink to="/"></RouterLink> -->
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
  }
</style>

