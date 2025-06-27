<template>
  <div id="dashboard">
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
        <tr>
          <td>1</td>
          <td>João</td>
          <td>Pão de Trigo</td>
          <td>Maminha</td>
          <td>
            <ul>
              <li>Salame</li>
              <li>Tomate</li>
            </ul>
          </td>
          <td class="acoes">
            <select>
              <option value="1">Solicitado</option>
              <option value="2">Em produção</option>
              <option value="3">Realizado</option>
            </select>
            <button>Cancelar</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "Dashboard",
};
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
</style>