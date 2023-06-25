
import { createApp } from 'vue';

import App from './components/Index.vue';
import router from './router';
import store from './store';

import 'bootstrap';

const main = createApp(App);

main.use(store);
main.use(router);

main.mount("#app");
