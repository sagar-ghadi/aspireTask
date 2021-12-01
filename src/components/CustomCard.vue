<template>
  <div>
    <b-card class="bg-malachite border-0 rounded-5">
      <b-card-text>
        <div class="p-1 p-md-3 p-lg-3">
          <div class="d-flex justify-content-end">
            <img src="../assets/icons/AspireLogo.svg" alt="aspireLogo" />
          </div>
          <h4 class="text-white fw-bold mt-3">Mark Henry</h4>
          <div class="row d-flex align-items-center mt-4">
            <div class="col-3">
              <div class="me-3 d-flex">
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
              </div>
            </div>
            <div class="col-3">
              <div class="me-3 d-flex">
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
              </div>
            </div>
            <div class="col-3">
              <div class="me-3 d-flex">
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
              </div>
            </div>
            <div class="col-3">
              <div class="d-flex fs-6 letter-spacing-4">
                2020
              </div>
            </div>
          </div>
          <div class="row d-flex align-items-center mt-3">
            <div class="col-4">
              <span class="fs-14">Thru: 12/20</span>
            </div>
            <div class="col-4">
              <span class="fs-14">CVV :* * *</span>
            </div>
          </div>
          <div class="d-flex justify-content-end">
            <img src="../assets/icons/VisaLogo.svg" alt="visaLogo" />
          </div>
        </div>
      </b-card-text>
    </b-card>
  </div>
</template>
<script>
export default {
  name: "Card",
  data() {
    return {};
  },
};
</script>
<style scoped>
.dot {
  background: #fff;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  margin-right: 8px;
}
.letter-spacing-4{
    letter-spacing: 4px;
}
.fs-14{
  font-size: 14px;
}
</style>
