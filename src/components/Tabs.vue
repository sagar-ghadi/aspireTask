<template>
  <div class="custom-nav-line">
    <b-tabs pills class="my-3">
      <b-tab title="My debit cards" active>
        <b-card-text class="p-2 p-md-5 p-lg-5 mt-3 rounded-5 tab-card-shadow">
          <div
            class="d-flex align-items-center justify-content-center show-card-number-btn"
          >
            <img src="../assets/icons/EyeIcon.svg" alt="eye-icon" />
            <p class="text-malachite mb-0 ms-1 fw-bold fs-12">
              Show card number
            </p>
          </div>
          <div class="row mt-2">
            <div class="col">
              <CustomCarousel />
              <div class="my-4">
                <b-card class="bg-light-blue border-0 rounded-5">
                  <b-card-text>
                    <div class="text-center">
                      <div class="row">
                        <div class="col">
                          <img
                            src="../assets/icons/FreezeCard.svg"
                            alt="eye-icon"
                          />
                          <p class="fs-12 mb-0 mt-2">Freeze card</p>
                        </div>
                        <div class="col">
                          <img
                            src="../assets/icons/SetSpendLimit.svg"
                            alt="eye-icon"
                          />
                          <p class="fs-12 mb-0 mt-2">Set spend limit</p>
                        </div>
                        <div class="col">
                          <img src="../assets/icons/GPay.svg" alt="eye-icon" />
                          <p class="fs-12 mb-0 mt-2">Add to GPay</p>
                        </div>
                        <div class="col">
                          <img
                            src="../assets/icons/ReplaceCard.svg"
                            alt="eye-icon"
                          />
                          <p class="fs-12 mb-0 mt-2">Replace card</p>
                        </div>
                        <div class="col">
                          <img
                            src="../assets/icons/DeactivateCard.svg"
                            alt="eye-icon"
                          />
                          <p class="fs-12 mb-0 mt-2">Cancel card</p>
                        </div>
                      </div>
                    </div>
                  </b-card-text>
                </b-card>
              </div>
            </div>
            <div class="col">
              <Accordion mainImageUrl="Details.svg" heading="Card details" />
              <Accordion
                mainImageUrl="Transaction.svg"
                heading="Recent transactions"
              />
            </div>
          </div>
        </b-card-text>
      </b-tab>
      <b-tab title="All company cards"
        ><b-card-text class="p-4 mt-3 rounded tab-card-shadow text-xs-white"
          >Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting.</b-card-text
        ></b-tab
      >
    </b-tabs>
  </div>
</template>

<script>
import CustomCarousel from "./CustomCarousel.vue";
import Accordion from "./Accordion.vue";
export default {
  name: "Tabs",
  components: {
    CustomCarousel,
    Accordion,
  },
  data() {
    return {};
  },
};
</script>

<style>
.custom-nav-line .nav-link {
  color: #0000;
  font-weight: 500;
}
.custom-nav-line .nav-pills .nav-link.active {
  color: #000;
  background-color: #fff;
  border-bottom: 3px solid #34d5e0;
  border-radius: 0 !important;
  font-weight: 600;
  font-size: 15px;
}
.custom-nav-line .nav-pills .nav-link {
  color: #858080 !important;
  font-size: 15px;
}
.nav-link:hover,
.nav-link:focus {
  color: #000 !important;
}
.nav-link:first-child {
  padding-left: 0px;
}
.tab-card-shadow {
  box-shadow: 0 1px 6px #dcdcdc;
}
.text-malachite {
  color: #01d167;
}
.bg-malachite {
  background: #01d167 !important;
  color: #fff;
}
.bg-light-blue {
  background: #edf3ff !important;
  color: #0c365a !important;
}
.rounded-5 {
  border-radius: 0.6rem !important;
}
.fs-12 {
  font-size: 12px;
}
</style>
