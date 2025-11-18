app.component("gadget-display", {
    props: ["gadget"], // Le gadget est passé en tant que prop depuis le parent
    template: /*html*/ `

            <div class="gadget">
                <img :src="gadget.image" :alt="gadget.name" />
                <h2>{{ gadget.name }}</h2>
                <p>{{ gadget.price }} €</p>
                <p>{{ formatStock(gadget.inStock) }}</p>
                <button @click="addToCart(gadget)" :disabled="!gadget.inStock" >Ajouter au panier</button>
            </div>
    `,
    methods: {
        formatStock(inStock) {
            return inStock ? '✅ En stock' : '❌ En rupture de stock'
        },

        addToCart() {
            this.$emit("add-to-cart", this.gadget); // Émet un événement pour ajouter au panier
        }

    }
});
