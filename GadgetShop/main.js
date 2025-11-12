const app = Vue.createApp({
    data() {
        return {
            details: "Découvrez les derniers gadgets électroniques de haute technologie!",
            //["Free Shipping", "30-day Return", "1 Year Warranty"],
            title: "Vue Gadget Shop",
            name: 'Smartphone XZ',
            priceInit: 799,
            image: "./assets/phone.jpg",
        }
    },
    methods: {
        
    },
    computed:{
        price() {
            return this.priceInit + ' €'
        }
    }
})