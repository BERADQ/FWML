import './assets/index.pcss';
import App from './App.svelte';
import 'normalize.css';
import './assets/font.css';
import './assets/iconfont.css';

const app = new App({
	target: document.getElementById('app')
});
export default app;
