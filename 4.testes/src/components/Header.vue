<template>
    <nav>
        <ul>
            <li>HOME</li>
            <li>PROJETOS</li>
            <li>CONTATO</li>
            <li v-if="logado">MEU PERFIL</li>
        </ul>
    </nav>
</template>

<script>

    export default {
        name: "Header",
        props: ["logado"]
    }

</script>

<style scoped>

    ul {
        list-style: none;
        display: flex;
        padding: 10px;
    }

    li {
        padding: 10px;
    }

    li:hover {
        background: purple;
        color: white;
        text-decoration: underline;
    }

</style>