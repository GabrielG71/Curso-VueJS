<template>
  <div id="BurgerForm">
    <Msg :mensagem="msg"  v-show="msg"/>
    <form id="Form" @submit.prevent="createBurger">
      <div id="input_container">
        <label for="name">Nome do Cliente:</label>
        <input type="text" v-model="nome" name="name" placeholder="Digite seu nome:" />
      </div>

      <div id="input_container">
        <label for="pao">Escolha o pão:</label>
        <select name="pao" id="pao" v-model="pao">
          <option disabled value="">Escolha seu pão</option>
          <option v-for="p in paes" :key="p.id" :value="p">{{ p.tipo }}</option>
        </select>
      </div>

      <div id="input_container">
        <label for="carne">Escolha a carne do seu burger:</label>
        <select name="carne" id="carne" v-model="carne">
          <option disabled value="">Escolha sua carne</option>
          <option v-for="c in carnes" :key="c.id" :value="c">{{ c.tipo }}</option>
        </select>
      </div>

      <div id="input_container">
        <label>Selecione seus opcionais:</label>
      </div>
      <div id="input_container" class="checkbox-group">
        <label v-for="op in opcionaisData" :key="op.id">
          <input type="checkbox" :value="op.tipo" v-model="opcional" />
          {{ op.tipo }}
        </label>
      </div>

      <div id="input_container">
        <input type="submit" class="submitbtn" value="Criar meu Burger!" />
      </div>
    </form>
  </div>
</template>

<script>
import Msg from './Msg.vue';

export default {
  name: "BurgerForm",
  data() {
    return {
      paes: [],
      carnes: [],
      opcionaisData: [],
      nome: "",
      pao: null,
      carne: null,
      opcional: [],
      msg: "",
    };
  }, components: {
    Msg
  },
  methods: {
    async getIngredientes() {
      try {
        const response = await fetch("http://localhost:3000/ingredientes");
        const data = await response.json();
        this.paes = data.paes || [];
        this.carnes = data.carnes || [];
        this.opcionaisData = data.opcionais || [];
      } catch (error) {
        console.error("Erro ao carregar ingredientes:", error);
      }
    },
    async createBurger() {
      if (!this.nome || !this.pao || !this.carne) {
        alert("Preencha todos os campos obrigatórios.");
        return;
      }

      const burger = {
        nome: this.nome,
        pao: this.pao.tipo,
        carne: this.carne.tipo,
        opcional: [...this.opcional],
        status: "Solicitado",
      };

      try {
        const response = await fetch("http://localhost:3000/burgers", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(burger),
        });

        await response.json();

        this.nome = "";
        this.pao = null;
        this.carne = null;
        this.opcional = [];

        this.msg = "Pedido realizado com sucesso"

        setTimeout(() => {
                this.msg = ""    
            }, 3000);

      } catch (error) {
        console.error("Erro ao criar burger:", error);
      }
    },
  },
  mounted() {
    this.getIngredientes();
  },
};
</script>

<style scoped>
#BurgerForm {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
}
#Form {
  padding: 30px;
  border-radius: 8px;
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
#input_container {
  display: flex;
  flex-direction: column;
}
#input_container > label {
  font-weight: bold;
  margin-bottom: 5px;
  color: #333;
  border-left: 4px solid #f5a623;
  padding-left: 8px;
}
input[type="text"],
select {
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
  font-size: 16px;
}
#input_container input[type="checkbox"] {
  margin-right: 8px;
}
#input_container.checkbox-group {
  flex-direction: row;
  flex-wrap: wrap;
  gap: 15px;
  align-items: center;
}
#input_container.checkbox-group label {
  border: none;
  padding: 0;
  font-weight: normal;
  color: #000;
}
.submitbtn {
  background-color: #1a1a1a;
  color: #f5a623;
  padding: 14px;
  border: none;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease, transform 0.2s ease;
}
.submitbtn:hover {
  background-color: #333;
  transform: scale(1.03);
}
</style>