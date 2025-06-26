<template>
  <Banner />
  <h1>Monte seu pedido</h1>
  <burger-form />
</template>

<script>
  import BurgerForm from '@/components/BurgerForm.vue'
  import Banner from '../components/Banner.vue'
  
  export default {
    name: "Home",
    components: {
      Banner,
      BurgerForm
    }
  }
</script>
