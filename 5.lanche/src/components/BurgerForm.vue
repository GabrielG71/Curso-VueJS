<template>
    <div id="BurgerForm">
        <span>Componente de sucesso</span>
        <form id="Form">
            <div id="input_container">
                <label for="name">Nome do Cliente:</label>
                <input type="text" v-model="input_name" name="name" placeholder="Digite seu nome:">
            </div>
            <div id="input_container">
                <label for="pao">Escolha o pão:</label>
                <select name="pao" id="pao" v-model="input_pao">
                    <option disabled value="">Escolha seu pão</option>
                    <option :value="pao.id" v-for="pao in paes" :key="pao.id" > {{ pao.tipo }} </option>
            </select>
            </div>

            <div id="input_container">
                <label for="carne">Escolha a carne do seu burger:</label>
                <select name="carne" id="carne" v-model="input_carne">
                    <option disabled value="">Escolha sua carne</option>
                    <option :value="carne.id" v-for="carne in carnes" :key="carne.id">{{ carne.tipo }}</option>
                </select>
            </div>
            <div id="input_container">
                <label for="optional">Selecione seus opcionais:</label>
            </div>
            <div id="input_container" class="checkbox-group">
                <label v-for="opcional in opcionaldata" :key="opcional.id">
                    <input type="checkbox" :value="opcional.tipo" v-model="form_opcional" />
                    {{ opcional.tipo }}
                </label>
            </div>


            <div id="input_container">
                <input type="submit" class="submitbtn" value="Criar meu Burger!">
            </div>
        </form>
    </div>
</template>

<script>

    export default {
        name: "BurgerForm",
        data() {
            return {
                paes: null,
                carnes: null,
                opcionaldata: null,
                nome: null,
                pao: null,
                carne: null,
                opcional: [],
                status: "Solicitado",
                msg: null
            }
        }, methods: {
            async getIngredientes(){
                const req = await fetch("http://localhost:3000/ingredientes");
                const data = await req.json();

                this.paes = data.paes;
                this.carnes = data.carnes;
                this.opcionaldata = data.opcionais;
            }
        }, mounted() {
            this.getIngredientes();
        }
    }

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

    /* Botão */
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