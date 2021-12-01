<template>
  <div>
    <carousel
      :per-page="1"
      :mouse-drag="false"
    >
      <slide> <card/> </slide>
      <slide> <card/> </slide>
      <slide> <card/> </slide>
    </carousel>
  </div>
</template>

<script>
import card from "./CustomCard.vue";
export default {
  name: "CustomCarousel",
  components: {
    card,
  },
  data() {
    return {};
  }
};
</script>
<style>
  .VueCarousel-dot-container{
    margin-top:-12px !important;
  }
  .VueCarousel-dot--active{
    background-color:rgb(1 209 103) !important;
  }
</style>
