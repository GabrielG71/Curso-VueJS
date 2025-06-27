<template>
    <div>
        <Header :logado="true" />
        <h1>App</h1>
        <NameForm />
        <LifeCycle />
        <Multi />
        <PessoaView />
        <ViewInfo :email=email />
        <Tech />
    </div>
</template>

<script>

    import Multi from './components/Multi.vue'
    import Tech from './components/Tech.vue'
    import Header from './components/Header.vue'
    import NameForm from './components/NameForm.vue'
    import LifeCycle from './components/LifeCycle.vue'
    import PessoaView from './components/PessoaView.vue'
    import ViewInfo from './components/ViewInfo.vue'

    export default {
        name: "App",
        components: {
            Header,
            NameForm,
            LifeCycle,
            PessoaView,
            ViewInfo,
            Tech,
            Multi,
        }, data(){
            return{
                email: "gabriel@gmail.com",
            }
        }
    }

</script>


<style>

    * {
        background-color: black;
        color: white;
    }

    a{
        background-color: white;
        color: black;
        text-decoration: none;
    }

    a:hover{
        font-size: 20px;
        text-decoration: underline;
    }

</style>