<template>
    <div>
        <div>
            <ViewPicture />
        </div>
        <div>
            <h1>Idade: {{ idade }}</h1>
            <p v-if="idade >= 18">Pode beber alccol.</p>
            <p v-else>Não pode beber alcool</p>
        </div>
            <h1>E-mail</h1>
            <button @click="showEmail"> {{ email_mensagem }}</button>
            <p v-if="mostrar_email">O email é: {{ email }}.</p>
        <div>
            <p>O link do site é esse: <a :href="link" target="_blank">LINK</a></p>
        </div>
    </div>
</template>

<script>

    import ViewPicture from './ViewPicture.vue';

    export default {
        name: "ViewInfo",
        components: {
            ViewPicture
        }, props: {
            email: String
        },
        data(){
            return{
                idade: 18,
                mostrar_email: false,
                link: "https://gabrielgon.com.br",
                email_mensagem: "Mostrar email",
            }
        }, methods: {
            showEmail() {
                this.mostrar_email = !this.mostrar_email;
                if(this.mostrar_email){
                    this.email_mensagem = "Esconder e-mail.";
                }else {
                    this.email_mensagem = "Mostrar email"
                }
            }
        }
    }

</script>