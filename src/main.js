import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
// Import PrimeVue
import PrimeVue from 'primevue/config';
import 'primeicons/primeicons.css';                     
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';
import './main.css';
import Toast from 'vue-toastification';
import 'vue-toastification/dist/index.css';




const app = createApp(App);
app.use(Toast);

app.use(PrimeVue);

app.use(router);

app.mount('#app');
