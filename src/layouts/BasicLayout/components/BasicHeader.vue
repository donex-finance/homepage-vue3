<template>
  <!-- Navigation -->
  <nav
    :class="[
      'navbar navbar-default navbar-fixed-top',
      scrollY >= 300 ? 'navbar-shrink' : '',
    ]"
  >
    <div class="container">
      <!-- Brand and toggle get grouped for better mobile display -->
      <div class="navbar-header page-scroll">
        <button
          type="button"
          class="navbar-toggle"
          data-toggle="collapse"
          data-target="#bs-example-navbar-collapse-1"
        >
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand page-scroll" href="#header">Donex Finance</a>
      </div>

      <!-- TODO: 用类似aave.com的动态效果代替header-bg.jpg -->

      <!-- Collect the nav links, forms, and other content for toggling -->
      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav navbar-right">
          <!-- TODO: FAQ page -->
          <li>
            <a class="page-scroll" href="#faq">FAQ</a>
          </li>
          <li>
            <a class="page-scroll btn btn-xl" href="#enterapp">Launch App</a>
          </li>
        </ul>
      </div>
      <!-- /.navbar-collapse -->
    </div>
    <!-- /.container-fluid -->
  </nav>
  <header>
    <div class="relative md:h-[690px] h-[335px] w-full">
      <!-- <div class="absolute top-0 left-0 w-full h-full opacity-40 mask"></div> -->
      <!-- <iframe
        :src="src"
        frameborder="0"
        class="absolute top-0 left-0 w-full h-full overflow-hidden opacity-30"
      ></iframe> -->

      <div class="absolute top-0 left-0 z-10 w-full h-full">
        <div id="header">
          <div class="intro-text mask bg-clip-text">
            <div class="text-transparent intro-heading">Donex Protocol</div>
            <div class="text-transparent intro-lead-in">
              Swap, earn, lend, borrow with the most capital efficiency.
            </div>
          </div>
        </div>
      </div>
      <canvas
        id="granim-canvas"
        ref="headerBg"
        class="absolute top-0 left-0 w-full h-full opacity-60"
      ></canvas>
    </div>
  </header>
</template>

<script lang="ts">
import { reactive } from "vue-demi";
import { onBeforeUnmount, onMounted, ref, toRefs } from "vue";
import Granim from "granim";
import { baseStaticUrl } from "@/libs/utils";

export default {
  name: "BaseHeader",
  setup() {
    const docElem = document.documentElement;
    const datas = reactive({
      changeHeaderOn: 300,
      scrollY: 0,
      src: baseStaticUrl("nebula.html"),
    });

    const scrollHandler = () => {
      datas.scrollY = window.pageYOffset || docElem.scrollTop;
    };

    const headerBg = ref();

    const initGranim = () => {
      return new Granim({
        element: headerBg.value,
        name: "second-gradient",
        // image: {
        //   source: imgUrl,
        //   position: ['center', 'center'],
        //   stretchMode: ['stretch-if-bigger', 'stretch-if-smaller'],
        //   blendingMode: 'multiply',
        // },
        direction: "custom",
        customDirection: {
          x0: "40%",
          y0: "10px",
          x1: "60%",
          y1: "50%",
        },
        states: {
          "default-state": {
            gradients: [
              ["#B3FFAB", "#12FFF7"],
              ["#ADD100", "#7B920A"],
              ["#1A2980", "#26D0CE"],
              ["#9D50BB", "#6E48AA"],
              ["#4776E6", "#8E54E9"],
              ["#FF4E50", "#F9D423"],
            ],
            transitionSpeed: 2000,
          },
        },
      });
    };

    onMounted(() => {
      // const imgUrl = baseStaticUrl('src/assets/imgs/header-bg.jpg');
      initGranim();

      window.addEventListener("scroll", scrollHandler, false);
    });

    onBeforeUnmount(() => {
      window.removeEventListener("scroll", scrollHandler);
    });

    return {
      headerBg,
      ...toRefs(datas),
    };
  },
};
</script>
