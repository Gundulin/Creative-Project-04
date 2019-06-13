var app = new Vue ({
    el: '#unit',
    data: {
        units: [],
        loading: true,
    },
    created() {
        this.getUnits();
    },
    methods: {
        async getUnits() {
            try {
                this.loading = true;
                let response = await axios.get("/api/units");
                this.units = response.data;
                this.loading = false;
                console.log(response);
            } catch (error) {
                console.log(error);
            }
        }
    }
});