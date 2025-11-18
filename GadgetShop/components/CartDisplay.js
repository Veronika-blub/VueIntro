app.component("cart-display", {
    props: ["cart", "cartTotal"], // Le cart et cartTotal sont passés en tant que props depuis le parent
    template: /*html*/ `

        <div class="cart">
            <h2>🛒 Mon Panier {{cart.length}}</h2>

            <ul>
                <li v-for="item in cart" :key="item.id">
                    <p>{{item.name}}</p>
                    <button class="remove-btn" @click="removeFromCart(item, index)">❌</button>
                </li>
            </ul>

            <!-- Affichage du total -->
            <h3>
                💰 Total : <span>{{cartTotal}}€</span>
            
            <span v-if="cartTotal > 1000">
                <s>{{cartTotal}}€</s> ➝
                <strong>{{discountedTotal}}€ (-10%)</strong>
            </span>
            </h3>

            <p v-if="cart.length === 0">Votre panier est vide.</p>
        </div>
    `,

    methods: {
        removeFromCart(item, index) {
            this.$emit("remove-from-cart", item, index);
        }
    },
    computed: {
        discountedTotal() {
            return (this.cartTotal * 0.9).toFixed(2);
        }
    }
}
);