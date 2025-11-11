const app = Vue.createApp({
    data() {
        return {
            details: ["Free Shipping", "30-day Return", "1 Year Warranty"],
            title: "Gadget Shop",
        }
    },
    methods: {
        title(){
            return "Gadget Shop"
        }
    },
    computed:{

    }
})