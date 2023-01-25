<script lang="ts">
	let javaPath = '...';
	window.electron.ipcRenderer.invoke("getJavaPath").then(e => {
		console.log(e);
		javaPath = e;
	});

	function choose() {
		window.electron.ipcRenderer.invoke("selectAJava").then(e => {
			console.log(e);
			javaPath = e;
		});
	}
	function set() {
		window.electron.ipcRenderer.invoke("setJavaPath",javaPath).then(e => {
			console.log(e);
			javaPath = e;
		});
	}

	window.electron.ipcRenderer.on("lloog",()=>{
		console.log("aabbcc");
    })
</script>

<div class="main">
    <div class="java">
        爪哇
    </div>
    <input type="text" class="sw" contenteditable="true" bind:value={javaPath} on:blur={set}/>
    <div class="swBtn iconfont" on:click={choose}>&#xe66d;</div>
</div>

<style lang="postcss">
    .main {
        user-select: none;
        height: 28px;
        width: 270px;
        background-color: #ffffff13;
        box-shadow: 0 0 2px #0003, 0 0 1px #fff3 inset;
        border-radius: 8px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        color: #fff9;

        & .java {
            font-family: HarmoyOS_Sans;
            white-space: nowrap;
            border-right: 2px solid #fff3;
            padding: 0 6px;
        }

        & .sw {
            height: 100%;
            font-size: 16px;
            background-color: transparent;
            border: 0;
            color: #fff9;
            font-family: HarmoyOS_Sans;
            font-weight: 2;
            padding-left: 6px;
            padding-right: 6px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            outline: none;
        }

        & .swBtn {
            margin-right: 6px;
            margin-left: auto;
            padding-left: 6px;
            border-left: 2px solid #fff3;
        }
    }
</style>