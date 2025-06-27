<template>
    <div>
        <button @click="Primeiro(), Segundo(), Terceiro()">Ativar Evento</button>
        <p>{{ evento }}</p>

        <Reult />
        <Reult />
        <Reult />
        <Reult />
    </div>
</template>

<script>

    import Reult from './Reult.vue'

    export default {
        name: "Multi",
        components: {
            Reult
        },
        data(){
            return{
                evento: "",
            }
        }, methods: {
            Primeiro() {
                this.evento = "Primeiro evento ativado!";
            },
            Segundo() {
                setTimeout(() => {
                    this.evento = "Segundo evento ativado!";
                }, 1000);
            }, Terceiro() {
                setTimeout(() => {
                    this.evento = "";
                }, 2000);
            }
        }
    }

</script>

<style scoped>

    * {
        margin: 50px;
    }

</style>