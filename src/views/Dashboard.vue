<template>
   <div id="wrapper">
    <Sidebar />
    <div class="p-3">
      <div id="page-content-wrapper">
        <div class="container-fluid p-0 mt-3">
          <div class="row">
            <div class="col-lg-12">
              <p class="mb-2 text-xs-white">Available balance</p>
              <div class="d-flex align-items-center">
                <p class="custom-badge me-2 mb-2">S$</p>
                <h4 class="fw-bold text-xs-white">3,0000</h4>
                <div class="ms-auto">
                  <b-button class="bg-blue d-flex align-items-center">
                    <img src="../assets/icons/mobAddIcon.svg" class="me-1 d-md-none d-lg-none" />
                    <img src="../assets/icons/plus.svg" class="me-1 d-none d-md-block d-lg-block" />
                    New card
                  </b-button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Tabs />
    </div>
    <MobNavbar/>
  </div>
</template>

<script>
// @ is an alias to /src
import MobNavbar from "@/components/MobNavbar.vue";
import Sidebar from "@/components/Sidebar.vue";
import Tabs from "@/components/Tabs.vue";

export default {
  name: "Dashboard",
  components: {
    Sidebar,
    Tabs,
    MobNavbar
  },
};
</script>
<style scoped lang="scss">
#wrapper {
  padding-left: 350px;
  -webkit-transition: all 0.5s ease;
  -moz-transition: all 0.5s ease;
  -o-transition: all 0.5s ease;
  transition: all 0.5s ease;
}

#wrapper.toggled {
  padding-left: 250px;
}
#wrapper.toggled #sidebar-wrapper {
  width: 250px;
}
.custom-badge{
  display: inline;
  background:#01D167;
  padding: 3px 12px;
  border-radius: 5px;
  font-size: 11px;
  color: #fff;
}
.bg-blue{
  background:#325BAF;
  color:#fff;
  border:0;
}
.bg-blue:hover{
  background:#3a558b;
  color:#fff;
  transition:.5s;
}
button:focus ,button:active{
  box-shadow:none;
  border:none;
}
</style>
