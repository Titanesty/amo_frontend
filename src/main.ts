import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";

import "./assets/main.css";

// const app = require("https-localhost")();
const app = createApp(App);

app.use(createPinia());
app.mount("#app");
