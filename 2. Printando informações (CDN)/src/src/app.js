const app = {
    data(){
        return{
            name: "",
            tech: "",
            input_name: "",
            input_tech: "",
        }
    }, methods: {
        formSubmit(e) {
            e.preventDefault();

            this.name = this.input_name;
            this.tech = this.input_tech;

        }
    }
}

Vue.createApp(app).mount("#app");