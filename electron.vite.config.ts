import {defineConfig, externalizeDepsPlugin} from 'electron-vite';
import {svelte} from '@sveltejs/vite-plugin-svelte';
import cssnext from 'postcss-cssnext';
//import presetEnv from 'postcss-preset-env';

export default defineConfig(() => {
	console.log("初始化");
	return {
		main: {
			plugins: [externalizeDepsPlugin()]
		},
		preload: {
			plugins: [externalizeDepsPlugin()]
		},
		renderer: {
			plugins: [svelte()],
			css: {
				postcss: cssnext()
			}
		}
	};
});
