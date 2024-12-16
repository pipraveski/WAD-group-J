import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
window.__VUE_OPTIONS_API__ = true;
window.__VUE_PROD_HYDRATION_MISMATCH_DETAILS__ = false; //ei töötanud muidu

createApp(App).use(store).use(router).mount('#app');
