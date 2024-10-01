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
import { useAuth } from './Config/UseAuth';




const app = createApp(App);

app.use(Toast);

app.use(PrimeVue);

app.use(router);



const {ready} = useAuth();

ready.then(() =>{
    console.log('Firebase auth are ready');
    app.mount('#app');
}).catch((error) =>{
console.error('Firebase auth are not initialized', error)
});