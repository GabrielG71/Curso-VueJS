<template>

    <div>
        <button @click="ativar">Clique aqui!</button>
        <p>{{ msg_ativo }}</p>
    </div>

</template>

<script>

    export default {
        name: "Reult",
        data() {
            return {
                ativou: false,
                msg_ativo: "Desativado",
            }
        }, methods: {
            ativar() {
                this.ativou  = !this.ativou;
                if(this.ativou){
                    this.msg_ativo = "Ativado";
                }else{
                    this.msg_ativo = "Desativado";
                }
            }
        }
    }

</script>