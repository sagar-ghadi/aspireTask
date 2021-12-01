<template>
  <div class="accordion mb-4" role="tablist">
    <b-card no-body class="mb-1 shadow-sm border-0 rounded-5">
      <b-button
        block
        v-b-toggle.accordion-1
        class="rounded-5 text-start arrow-icon p-4 bg-light-blue border-0"
      >
        <img :src="require(`../assets/icons/${mainImageUrl}`)" class="me-2" />
        {{ heading }}</b-button
      >
      <b-collapse id="accordion-1"  accordion="my-accordion" role="tabpanel">
        <b-card-body class="pb-0">
          <b-card-text>
            <AccordionInnercard
              title="Hamleys"
              subImageUrl="FileStorage.svg"
              amount="+ S$ 150"
              date="22/11/1995"
              transactionStatus="Refund on debit card"
            />
            <AccordionInnercard
              title="Hamleys"
              subImageUrl="flights.svg"
              amount="+ S$ 180"
              date="23/11/1995"
              transactionStatus="Charged to debit card"
            />
            <AccordionInnercard
              title="Hamleys"
              subImageUrl="megaphone.svg"
              amount="+ S$ 190"
              date="24/11/1995"
              transactionStatus="Charged to debit card"
            />
            <AccordionInnercard
              title="Hamleys"
              subImageUrl="FileStorage.svg"
              amount="+ S$ 180"
              date="25/11/1995"
              transactionStatus="Charged to debit card"
            />
          </b-card-text>
        </b-card-body>
        <div class="bg-light-blue text-center">
            <p class="mb-0 text-malachite fw-bold p-3 fs-12">
            View all card transactions
            </p>
        </div>
      </b-collapse>
    </b-card>
  </div>
</template>
<script>
import AccordionInnercard from "../components/AccordionInnerCard.vue";
export default {
  name: "Accordion",
  props: ["mainImageUrl", "heading"],
  components: {
    AccordionInnercard,
  },
  data() {
    return {};
  },
};
</script>
<style scoped>
.arrow-icon::after {
  content: url(../assets/icons/DownArrow.svg);
  position: absolute;
  right: 2%;
}
button:focus:not(:focus-visible) {
  outline: none;
  box-shadow: none;
}
</style>
