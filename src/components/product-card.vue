<template>
  <v-card v-if="data" class="mx-auto my-12" width="350" height="410">
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img height="250" :src="data.images[0]" cover></v-img>

    <v-card-title>{{ data.title }}</v-card-title>
    <v-card-text class="text-left">
      <div>{{ data.description | textWrap }}</div>
    </v-card-text>
  </v-card>
</template>
  <script>
export default {
  props: {
    data: {
        type: Object,
        default: () => {}
    },
  },
  filters: {
    textWrap(text) {
      if (text.length <= 200) return text;
      return text.slice(0, 200) + "...";
    },
  },
};
</script>