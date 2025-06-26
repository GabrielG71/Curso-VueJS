<template>
    
    <div>
        
        <form div="appForm">
            <input type="text" v-model="input_name" placeholder="Digite seu nome:">
            <input type="submit" value="Enviar" v-on:click="formSubmit">
        </form>
        
        <p>Meu nome é {{ nome }}</p>

    </div>

</template>

<script>

    export default {
        name: "NameForm",
        data(){
            return{
               nome: "",
               input_name: "",     
            }
        }, methods: {
            formSubmit(e) {
                e.preventDefault();

                this.nome = this.input_name;
            }
        }
    }

</script>