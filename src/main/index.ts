import {app, shell, BrowserWindow, ipcMain, BrowserWindowConstructorOptions, dialog} from 'electron';
import {join} from 'path';
import {electronApp, optimizer, is} from '@electron-toolkit/utils';
import icon from '../../resources/icon.png?asset';
import {IS_WINDOWS_11, MicaBrowserWindow} from 'mica-electron';
import {Client as MCC, Authenticator as MCAu, ILauncherOptions} from 'minecraft-launcher-core';

function createWindow(): void {
	// 创建浏览器窗口
	const opts: BrowserWindowConstructorOptions = {
		width: 900,
		height: 670,
		show: false,
		autoHideMenuBar: true,
		...(process.platform === 'linux' ? {icon} : {}),
		webPreferences: {
			preload: join(__dirname, '../preload/index.js'),
			sandbox: false
		}
	};
	//合并类型（只是形式一下
	let mainWindow: BrowserWindow & MicaBrowserWindow;
	//如果是win11则改用MicaBrowserWindow创建
	if (IS_WINDOWS_11) {
		mainWindow = new MicaBrowserWindow(opts);
		mainWindow.setDarkTheme();
		//mainWindow.setLightTheme();
		mainWindow.setMicaAcrylicEffect();
		//mainWindow.setMicaEffect();
		//mainWindow.setMicaTabbedEffect();
	} else {
		mainWindow = new BrowserWindow(opts);
	}
	mainWindow.on('ready-to-show', () => {
		mainWindow.show();
	});
	
	mainWindow.webContents.setWindowOpenHandler((details) => {
		shell.openExternal(details.url);
		return {action: 'deny'};
	});
	
	// 开发环境就是url，生产环境就是file
	if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
		mainWindow.loadURL(process.env['ELECTRON_RENDERER_URL']);
	} else {
		mainWindow.loadFile(join(__dirname, '../renderer/index.html'));
	}
	initializeTheLauncher();
}

// 加载完成后执行以下内容
app.whenReady().then(() => {
	// 设置 app user model id 是为了让Windows知道这是同一个程序的进程
	electronApp.setAppUserModelId('top.ninnana.fw.ml');
	
	// 开发环境使用F12打开开发者工具
	// 让生成环境忽略开发者工具和浏览器默认快捷键
	// 详情可见 https://github.com/alex8088/electron-toolkit/tree/master/packages/utils
	app.on('browser-window-created', (_, window) => {
		optimizer.watchWindowShortcuts(window);
	});
	
	createWindow();
	
	app.on('activate', function () {
		// 在macOS上如果在dock上被点击，当前没有窗口则启动一个窗口
		if (BrowserWindow.getAllWindows().length === 0) createWindow();
	});
});

// 如果不是darwin系统，关闭所有窗口即结束进程
app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		console.log("我结束了");
		app.quit();
	}
});
//处理mc启动
const initializeTheLauncher = () => {
	console.log("MC启动器部分初始化");
	let opts: ILauncherOptions = {
		//游戏根目录
		root: 'C:/Users/adqbe/AppData/Roaming/.minecraft',
		version: {
			number: '1.19.2',
			type: 'release',
			custom: '1.19.2',
		},
		//内存配置
		memory: {
			max: '6G',
			min: '4G'
		},
		authorization: MCAu.getAuth("developer"),
		javaPath: 'J:/zulu17.38.21-ca-jdk17.0.5-win_x64/bin/java.exe'
	};
	const launcher = new MCC();
	ipcMain.handle("launch", (_) => {
		console.log("尝试启动");
		launcher.launch(opts);
		launcher.on('debug', (e) => console.log(e));
		launcher.on('data', (e) => console.log(e));
	});
	ipcMain.handle("selectAVersion", async (_) => {
		const e = await dialog.showOpenDialog({
			title: '拣出爪哇',
			buttonLabel: '捡出',
			filters: [{name: 'java', extensions: ['exe']}]
		});
		if (!e.canceled) {
			opts.javaPath = e.filePaths?.[0] ?? '';
			console.log(opts.javaPath);
		}
		return opts.javaPath;
	});
	ipcMain.handle("getJavaPath", () => {
		return opts.javaPath;
	});
};