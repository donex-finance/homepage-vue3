<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <iframe
    :src="src"
    frameborder="0"
    class="w-full min-h-[900px] overflow-hidden p-20"
  ></iframe>
</template>

<script lang="ts">
import { baseStaticUrl } from "@/libs/utils";
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    const src = baseStaticUrl("pages/faq.html");
    return { src };
  },
});
</script>

<style>
#ss360-smartFaq {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
