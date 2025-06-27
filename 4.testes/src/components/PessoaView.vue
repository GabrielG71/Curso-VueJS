<template>
    <div>
        <form action="" @submit="enviarForm">
            <div><input type="text" v-model="input_name" placeholder="Digite o nome:"></div>
            <div><input type="text" v-model="input_num" placeholder="Digite o número:"></div>
            <div>
                <PessoaSubmit />
            </div>
        </form>
        <p>{{ nome }} e {{ num }}.</p>
    </div>
</template>

<script>
    
    import PessoaSubmit from './Pessoa/PessoaSubmit.vue'

    export default {
        name: "PessoaView",
        components: {
            PessoaSubmit
        }, data(){
            return {
                nome: "",
                num: "",
                input_name: "",
                input_num: "",
            }
        }, methods: {
            enviarForm(e) {
                e.preventDefault();

                this.nome = this.input_name;
                this.num = this.input_num;


            }
        }
    }

</script>