<template>
  <div id="banner">
    <div class="text-box">
      <h1>Rango Brabo</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "Banner",
};
</script>

<style scoped>
#banner {
  background-image: url('../../public/img/burger.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 800px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.text-box {
  background-color: rgba(0, 0, 0, 0.6);
  padding: 20px 30px;
  margin-left: 50px;
  border-radius: 5px;
}

.text-box h1 {
  color: #fcba03;
  font-size: 3rem;
  font-weight: bold;
  margin: 0;
}
</style>