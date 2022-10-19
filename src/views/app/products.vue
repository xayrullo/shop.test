<template>
  <div>
    <div>
      <v-row
        class="mb-6"
        no-gutters
      >
        <v-col v-for="(product, index) in products" :key="index"  class="mx-2">
          <card :data="product"/>
        </v-col>
      </v-row>
    </div>
  </div>
</template>
<script>
import Card from '@/components/product-card.vue'
import { mapGetters } from 'vuex'
export default {
  components: {
    Card,
  },
  data() {
    return {}
  },
  created() {
    this.$store.dispatch('getProducts')
  },
  computed: {
    ...mapGetters({
      products: "getProducts",
    })
  },
  mounted() {}
}
</script>