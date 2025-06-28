<template>
  <div id="dashboard">
    <Msg :mensagem="msg" v-show="msg" />
    <table>
      <thead>
        <tr>
          <th>#:</th>
          <th>Cliente:</th>
          <th>Pão:</th>
          <th>Carne:</th>
          <th>Opcionais:</th>
          <th>Ações:</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="burger in burgers" :key="burger.id">
          <td>{{ burger.id }}</td>
          <td>{{ burger.nome }}</td>
          <td>{{ burger.pao }}</td>
          <td>{{ burger.carne }}</td>
          <td>
            <ul>
              <li v-for="(opcional, index) in burger.opcional" :key="index">{{ opcional }}</li>
            </ul>
          </td>
          <td class="acoes">
            <select v-model="burger.status" @change="updateStatus(burger)">
              <option disabled value="">Selecione o Status</option>
              <option v-for="s in status" :key="s.tipo" :value="s.tipo">
                {{ s.tipo }}
              </option>
            </select>
            <button @click="deleteBurger(burger.id)">Cancelar</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Msg from './Msg.vue'

export default {
  name: "Dashboard",
  data() {
    return {
      burgers: null,
      status: [],
      msg: "",
    }
  },
  components: {
    Msg
  },
  methods: {
    async getBurgers() {
      const req = await fetch("http://localhost:3000/burgers")
      const data = await req.json()
      this.burgers = data
      this.getStatus()
    },
    async getStatus() {
      const req = await fetch("http://localhost:3000/status")
      const data = await req.json()
      this.status = data
    },
    async deleteBurger(id) {
      await fetch(`http://localhost:3000/burgers/${id}`, {
        method: "DELETE"
      })
      this.getBurgers()
      this.msg = "Pedido cancelado com sucesso!"
      setTimeout(() => {
        this.msg = ""
      }, 3000)
    },
    async updateStatus(burger) {
      await fetch(`http://localhost:3000/burgers/${burger.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ status: burger.status })
      })
    }
  },
  mounted() {
    this.getBurgers()
  }
}
</script>

<style scoped>
#dashboard {
  max-width: 95%;
  margin: 60px auto;
  padding: 0 20px;
  font-family: sans-serif;
}

h2 {
  font-size: 32px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 40px;
}

table {
  width: 100%;
  border-collapse: collapse;
  font-size: 20px;
}

thead th {
  text-align: left;
  padding: 20px 12px;
  font-weight: bold;
  border-bottom: 3px solid #333;
}

tbody td {
  padding: 18px 12px;
  border-bottom: 1px solid #ddd;
  vertical-align: top;
}

ul {
  margin: 0;
  padding-left: 20px;
  font-size: 18px;
}

select {
  padding: 10px 14px;
  margin-right: 12px;
  border: 1px solid #aaa;
  border-radius: 6px;
  font-size: 18px;
  min-width: 180px;
}

button {
  background-color: #222;
  color: #FCBA03;
  padding: 10px 20px;
  font-size: 18px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

button:hover {
  background-color: #444;
}

@media (max-width: 768px) {
  table,
  thead,
  tbody,
  th,
  td,
  tr {
    display: block;
    width: 100%;
  }

  thead {
    display: none;
  }

  tbody tr {
    margin-bottom: 20px;
    border-bottom: 2px solid #ccc;
    padding-bottom: 10px;
  }

  tbody td {
    padding: 10px 12px;
    text-align: left;
    position: relative;
  }

  tbody td::before {
    content: attr(data-label);
    position: absolute;
    left: 12px;
    top: 10px;
    font-weight: bold;
    color: #333;
  }

  tbody td {
    padding-left: 120px;
    min-height: 40px;
  }

  select, button {
    width: 100%;
    margin: 10px 0 0;
  }
}
</style>