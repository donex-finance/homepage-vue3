<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <iframe
    name="iframe"
    :src="src"
    frameborder="0"
    class="w-full min-h-[900px] overflow-hidden p-20"
  ></iframe>
</template>

<script lang="ts">
import { baseStaticUrl } from "@/libs/utils";
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const src = baseStaticUrl("pages/faq.html");
    const iframe = ref();

    // onMounted(() => {
    //   const linkElem = document.createElement("link");
    //   linkElem.setAttribute("rel", "stylesheet");
    //   linkElem.setAttribute("href", "faq.css");
    //   // @ts-ignore
    //   window.frames["iframe"].document
    //     .getElementsByTagName("head")[0]
    //     .appendChild(linkElem);
    // });

    return { src, iframe };
  },
});
</script>
