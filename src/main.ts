import { createApp } from "vue";
import { createPinia } from "pinia";

import { library } from "@fortawesome/fontawesome-svg-core"; // import the fontawesome core
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"; // import font awesome icon component
import {
  faUserSecret,
  faArrowsLeftRightToLine,
  faCircle,
  faArrowUpWideShort,
  faMoneyBillTrendUp,
} from "@fortawesome/free-solid-svg-icons"; // import specific icons/* add some free styles */
import { faTwitter, faDiscord } from "@fortawesome/free-brands-svg-icons";

import App from "./App.vue";
import router from "./router";

// css
import "@/styles/bootstrap.css";
import "@/styles/agency.css";
import "@/styles/tailwind.css";

/* add icons to the library */
library.add(
  faUserSecret,
  faArrowsLeftRightToLine,
  faCircle,
  faArrowUpWideShort,
  faMoneyBillTrendUp
);
library.add(faTwitter, faDiscord);

const app = createApp(App);

app.component("font-awesome-icon", FontAwesomeIcon);

app.use(createPinia());
app.use(router);

app.mount("#app");
