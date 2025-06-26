<template>
    <h1>A tecnologia utilizada foi é: {{ tech }}.</h1>
</template>

<script>

   export default {
        name: "LifeCycle",
        data(){
            return{
                tech: "Vue",
            }
        }, created(){
            setTimeout(() => {
                this.tech = "JS"
            }, 1500);
            this.troquei();
        }, mounted() {
            setTimeout(() => {
                this.tech = "Laravel"    
            }, 3000);
            this.troquei();
        }, methods: {
            troquei() {
                console.log ("Troquei");
            }
        }
   }

</script>