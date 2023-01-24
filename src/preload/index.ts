import {contextBridge} from 'electron';
import {electronAPI} from '@electron-toolkit/preload';
// Custom APIs for renderer
const api = {};

electronAPI.ipcRenderer.invoke("getIsWindows11").then((isWindows11) => {
	//给window说，系统是不是Windows11
	console.log(isWindows11);
	contextBridge.exposeInMainWorld('isWindows11', isWindows11);
	console.log("Windows11:", isWindows11);
});

// Use `contextBridge` APIs to expose Electron APIs to
// renderer only if context isolation is enabled, otherwise
// just add to the DOM global.
if (process.contextIsolated) {
	try {
		contextBridge.exposeInMainWorld('electron', electronAPI);
		contextBridge.exposeInMainWorld('api', api);
	} catch (error) {
		console.error(error);
	}
} else {
	// @ts-ignore (define in dts)
	window.electron = electronAPI;
	// @ts-ignore (define in dts)
	window.api = api;
}
