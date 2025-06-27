<template>
    <div class="success-message">
        <strong>{{ mensagem }}</strong>
    </div>
</template>

<script>
    export default {
        name: "Msg",
        props: {
            mensagem: String,
        }
    }

</script>

<style scoped>
.success-message {
  background-color: #d4edda;
  color: #155724;
  border: 2px solid #c3e6cb;
  padding: 15px 20px;
  border-radius: 8px;
  font-family: Arial, sans-serif;
  font-size: 16px;
  margin: 20px 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.success-message::before {
  content: "✔";
  color: #28a745;
  font-weight: bold;
  margin-right: 10px;
}
</style>