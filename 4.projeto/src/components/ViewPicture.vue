<template>
    <div>
        <h1>Picture</h1>
        <img :src="Picture" :alt="Descricao">
        <MudarImagem @mudar-imagem="MudarImagem" />
    </div>
</template>

<script>

    import MudarImagem from './MudarImagem.vue'

    export default {
        name: "ViewPicture",
        data(){
            return{
                Picture: "/images/logo.png",
                Descricao: "Foto bonita",
            }
        }, components: {
            MudarImagem
        }, methods: {
            MudarImagem(){
                if(this.Picture === "/images/logo.png"){
                    this.Picture = "/images/logo2.png";
                }else {
                    this.Picture = "/images/logo.png";
                }
            }
        }
    }

</script>