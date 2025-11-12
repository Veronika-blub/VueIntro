const app = Vue.createApp({
    data() {
        return {
            details: "Découvrez les derniers gadgets électroniques de haute technologie!",
            //["Free Shipping", "30-day Return", "1 Year Warranty"],
            title: "Vue Gadget Shop",
            // name: 'Smartphone XZ',
            // priceInit: 799,
            // image: "./assets/phone.jpg",
            // inStock: true,
            gadgets: [
                { id: 1, name: "Smartphone XZ", price: 799, image: "./assets/phone.jpg", inStock: true },
                { id: 2, name: "Laptop Mat' shatal", price: 999, image: "./assets/laptop.jpg", inStock: false },
                { id: 3, name: "Earbuds Proty abortov", price: 199, image: "./assets/earbuds.jpg", inStock: true }
            ]
        }
    },
    methods: {
        
    },
    computed:{
        price() {
            return this.priceInit + ' €'
        },
        stock() {
            return this.inStock ? '✅ En stock' : '❌ En rupture de stock'
        }
    }
})