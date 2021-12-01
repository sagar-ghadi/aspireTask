<template>
  <div class="d-flex border-bottom border-light py-3">
    <div class="flex-shrink-0">
      <div class="main-icons-bg">
        <img :src="require(`../assets/icons/${subImageUrl}`)" />
      </div>
    </div>
    <div class="flex-grow-1 ms-3">
      <div class="pb-2 small lh-sm">
        <strong class="text-gray-dark">{{ title }}</strong>
        <span class="float-end d-flex align-items-center">
          <span class="text-malachite fw-bold">{{ amount }}</span>
          <img src="../assets/icons/next.svg" class="ms-2" />
        </span>
        <p class="my-2 text-muted">{{ date }}</p>
      </div>
      <div class="d-flex align-items-center">
        <div class="sub-icons-bg me-2">
          <img src="../assets/icons/BusinessFinance.svg" />
        </div>
        <span class="text-dark-blue">{{ transactionStatus }}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name :"AccordionInnercard",
  props:["mainImageUrl","heading","title", "subImageUrl","amount","date","transactionStatus"],
  data() {
    return {};
  },
};
</script>
<style scoped>
.main-icons-bg {
  background: #edf3ff;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  line-height: 3;
  text-align: center;
}
.sub-icons-bg {
  background: #325baf;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  line-height: 1.7;
  text-align: center;
}
.text-dark-blue {
  color: #325baf;
}
</style>
