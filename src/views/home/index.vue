<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <!-- Services Section -->
  <section id="services">
    <div class="container">
      <div class="row">
        <div class="text-center col-lg-12">
          <h2 class="section-heading">Features</h2>
          <h3 class="section-subheading text-muted"></h3>
        </div>
      </div>
      <div class="text-center row">
        <div class="col-md-4">
          <div
            class="w-[112px] h-[112px] flex bg-primary place-items-center place-content-center rounded-full m-auto"
          >
            <font-awesome-icon
              size="4x"
              icon="fa-solid fa-arrows-left-right-to-line "
              class="text-white"
            />
          </div>
          <h4 class="service-heading">Consentrated Liquidity</h4>
          <p class="text-muted">
            Users can choose the price ranges of their liquidity to earn more
            swap fees.
          </p>
        </div>
        <div class="col-md-4">
          <div
            class="w-[112px] h-[112px] flex bg-primary place-items-center place-content-center rounded-full m-auto"
          >
            <font-awesome-icon
              size="4x"
              icon="fa-solid fa-arrow-up-wide-short "
              class="text-white"
            />
          </div>
          <h4 class="service-heading">Leveraged Liquidity</h4>
          <p class="text-muted">
            With the novel lending protocol, users can borrow assets from
            protocol to create a leveraged liquidity.
          </p>
        </div>
        <div class="col-md-4">
          <div
            class="w-[112px] h-[112px] flex bg-primary place-items-center place-content-center rounded-full m-auto"
          >
            <font-awesome-icon
              size="4x"
              icon="fa-solid fa-money-bill-trend-up"
              class="text-white"
            />
          </div>
          <h4 class="service-heading">Leveraged Trading</h4>
          <p class="text-muted">
            Uses can use assets like liquidity positions and deposits as the
            collateral to do leveraged trading in swap protocol.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- Roadmap Section -->
  <section id="roundmap">
    <div class="container">
      <div class="row">
        <div class="text-center col-lg-12">
          <h2 class="section-heading">Roadmap</h2>
          <h3 class="section-subheading text-muted"></h3>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12">
          <!-- TODO: replace image 1, 2, 3-->
          <ul class="timeline">
            <li>
              <div class="timeline-image">
               <!--  <img
                  class="img-circle img-responsive"
                  src="@/assets/imgs/about/1.jpg"
                  alt=""
                /> -->
              </div>
              <div class="timeline-panel">
                <div class="timeline-heading">
                  <h4>Q1 2023</h4>
                  <h4 class="subheading">Swap Protocol</h4>
                </div>
                <div class="timeline-body">
                  <p class="text-muted">Swap with consentrated liquidity</p>
                </div>
              </div>
            </li>
            <li class="timeline-inverted">
              <div class="timeline-image">
                <!-- <img
                  class="img-circle img-responsive"
                  src="@/assets/imgs/about/2.jpg"
                  alt=""
                /> -->
              </div>
              <div class="timeline-panel">
                <div class="timeline-heading">
                  <h4>Q3 2023</h4>
                  <h4 class="subheading">Lending Protocol</h4>
                </div>
                <div class="timeline-body">
                  <p class="text-muted">Lend and borrow</p>
                </div>
              </div>
            </li>
            <li>
              <div class="timeline-image">
                <!-- <img
                  class="img-circle img-responsive"
                  src="@/assets/imgs/about/3.jpg"
                  alt=""
                /> -->
              </div>
              <div class="timeline-panel">
                <div class="timeline-heading">
                  <h4>Q4 2023</h4>
                  <h4 class="subheading">Leveraged Liquidity</h4>
                </div>
                <div class="timeline-body">
                  <p class="text-muted">
                    Connect swap and lending to enable leveraged liquidity
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div class="timeline-image">
                <!-- <img
                  class="img-circle img-responsive"
                  src="@/assets/imgs/about/4.jpg"
                  alt=""
                /> -->
              </div>
              <div class="timeline-panel">
                <div class="timeline-heading">
                  <h4>Q2 2024</h4>
                  <h4 class="subheading">Leveraged Trading</h4>
                </div>
                <div class="timeline-body">
                  <p class="text-muted">
                    Connect swap and lending to enable leveraged trading
                  </p>
                </div>
              </div>
            </li>
            <li class="timeline-inverted">
              <div class="timeline-image">
                <h4>
                  <br />
                  More to
                  <br />come
                </h4>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
