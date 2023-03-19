import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createClient } from "villus";

import vue3GoogleLogin from "vue3-google-login";

import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)

app.use(createClient({
  url: import.meta.env.VITE_GRAPHQL_URL,
}));
app.use(createPinia())
app.use(router)
app.use(vue3GoogleLogin, {
  clientId: import.meta.env.VITE_GOOGLE_OAUTH2_KEY,
});

app.mount('#app')
