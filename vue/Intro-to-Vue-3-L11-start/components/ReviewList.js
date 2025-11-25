app.component("review-list", {
  props: {
    reviews: {
      type: Array,
      required: true,
    },
  },
  template:
    /*html*/
    `
    <div class="review-container">
        <h3>Reviews:</h3>
        <ul>
            <li v-for="(review, index) in reviews" :key="index">
                "Recommanderiez-vous ce produit ?" -  "{{ review.recommend }}""
                {{ review.name }} gave this produit {{ review.rating }} stars
                <br/>
                "{{ review.review }}"
                <br/>
            </li>
        </ul>
    </div>
`,
});