var app = new Vue ({
    el: '#rule',
    data: {
        rules: [],
        loading: true,
    },
    created() {
        this.getRules();
    },
    methods: {
        async getRules() {
            try {
                this.loading = true;
                let response = await axios.get("/api/rules");
                this.rules = response.data;
                this.loading = false;
                console.log(response);
            } catch (error) {
                console.log(error);
            }
        }
    }
});