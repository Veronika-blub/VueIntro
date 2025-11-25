const app = Vue.createApp({
    data() {
        return {
            details: "Découvrez les derniers gadgets électroniques de haute technologie!",
            title: "Vue Gadget Shop",
            cart: [],
            total: 0,
            gadgets: [
                { id: 1, name: "Smartphone XZ", price: 799, image: "./assets/phone.jpg", inStock: true },
                { id: 2, name: "Laptop Mat' shatal", price: 999, image: "./assets/laptop.jpg", inStock: false },
                { id: 3, name: "Earbuds Proty abortov", price: 199, image: "./assets/earbuds.jpg", inStock: true }
            ]
        }
    },
    methods: {
        addToCart(gadget) {
            const existingItem = this.cart.find(item => item.id === gadget.id);
                existingItem.quantity++;
            this.cart.push({...gadget, quantity: 1})
        },
        removeFromCart(gadget, index) {
            this.cart.splice(index, 1)
        },
        formatStock(inStock) {
            return inStock ? '✅ En stock' : '❌ En rupture de stock'
        }
    },
    computed: {
        price() {
            return this.priceInit + ' €'
        },
        cartTotal() {
            return this.cart.reduce((total, gadget) => total += gadget.price * gadget.quantity, 0) 
        },

    }
})