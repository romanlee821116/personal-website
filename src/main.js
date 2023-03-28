import { createApp } from 'vue';
import App from './App.vue';
import VueFullPage from 'vue-fullpage.js';
import {createI18n} from 'vue-i18n';
import {tw, en} from './config/lang.js';
import './style.css';

const messages = {
	tw,
	en,
};

const i18n = createI18n({
	legacy: false,
	locale: sessionStorage.getItem('currentLang') ?? 'tw',
	fallbackLocale: 'tw',
	messages,
	globalInjection: true,
});

const app = createApp(App)
	.use(VueFullPage)
	.use(i18n);

app.config.globalProperties.lang = i18n.global.t;
app.mount('#app');
