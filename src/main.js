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
	warnHtmlMessage: false,
});

const app = createApp(App).use(i18n);

if (window.innerWidth > 768) {
	app.use(VueFullPage)
}

app.config.globalProperties.lang = i18n.global.t;
app.mount('#app');
