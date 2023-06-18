
import { createApp } from 'vue';

import App from './components/Index.vue';
import router from './router';

import 'bootstrap';

const main = createApp(App);

main.use(router);

main.mount("#app");
