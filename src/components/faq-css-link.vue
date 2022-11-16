<script lang="ts">
import { baseStaticUrl } from "@/libs/utils";
import { defineComponent, h } from "vue";

export default defineComponent({
  setup() {
    return {};
  },
  render() {
    return h("link", {
      attrs: {
        rel: "stylesheet",
        type: "text/css",
        href: baseStaticUrl("faq.css"),
      },
    });
  },
});
</script>

<style scoped></style>
