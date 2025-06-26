<template>
    <div>
        <h1>Backend</h1>
        <ul>
            <li v-for="(tech, index) in Backend" :key="index"> {{ tech }}</li>
        </ul>
        <h1>Frontend</h1>
        <ul>
            <li v-for="tech in Frontend" :key="tech.id">{{ tech.language }}</li>
        </ul>
    </div>
</template>

<script>

    export default {
        name: "Tech",
        data() {
            return {
                Backend: ["PHP", "JS", "Java"],
                Frontend: [
                    {id: 1, language: "CSS"},
                    {id: 2, language: "HTML"},
                    {id: 3, language: "Markdown"},
                ]
            }
        }
    }

</script>