<template>
  <nav id="navbar">
    <router-link to="/" id="logo">
      <img :src="logo" :alt="alt" />
    </router-link>
    <div class="nav-links">
      <router-link to="/">Home</router-link>
      <router-link to="/pedidos">Pedidos</router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Header",
  props: ["logo", "alt"]
};
</script>

<style scoped>
#navbar {
  background-color: #222;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  padding: 0 30px;
}

#logo img {
  width: 40px;
  height: 40px;
}

.nav-links {
  display: flex;
  gap: 20px;
}

.nav-links a {
  text-decoration: none;
  color: #fcba03;
  padding: 8px 12px;
  transition: 0.3s;
  font-weight: bold;
}

.nav-links a:hover {
  color: #fff;
  background-color: #444;
  border-radius: 5px;
}
</style>