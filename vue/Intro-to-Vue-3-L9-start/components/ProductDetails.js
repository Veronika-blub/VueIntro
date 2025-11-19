app.component('product-details', {
    props: {
        details: {
            type: Array,
            required: true
        }
    },
    template:
        /*html */
        `
    <h3>Details</h3>
    <ul>
        <li v-for="detail in details" :key="detail">{{ detail }}</li>
    </ul>`
})