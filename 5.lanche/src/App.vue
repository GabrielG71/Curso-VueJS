<template>
  <div id="app">
    <Header :logo="logo_src" :alt="alt_src" />
    <main>
      <router-view/>
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer
  },
  data() {
    return {
      logo_src: "img/logo.png",
      alt_src: "Rango Brabo"
    };
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Arial, Helvetica, sans-serif;
}

html, body {
  height: 100%;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex: 1;
  padding: 20px;
}
</style>