<script lang="ts">
	let javaPath = '...';
	window.electron.ipcRenderer.invoke("getJavaPath").then(e => {
		console.log(e);
		javaPath = e;
	});
	function choose() {
		window.electron.ipcRenderer.invoke("selectAVersion").then(e => {
			console.log(e);
			javaPath = e;
		});
	}
</script>

<div class="main">
    <div class="java">
        爪哇
    </div>
    <div class="sw">
        {javaPath}
    </div>
    <div class="swBtn iconfont" on:click={choose}>&#xe66d;</div>
</div>

<style lang="postcss">
    .main {
        user-select: none;
        height: 24px;
        width: 270px;
        background-color: #ffffff13;
        box-shadow: 0 0 2px #0003, 0 0 1px #fff3 inset;
        border-radius: 8px;
        display: flex;
        justify-content: flex-start;
        align-items: center;

        & .java {
            white-space: nowrap;
            border-right: 2px solid #fff3;
            padding: 0 6px;
        }

        & .sw {
            direction: rtl;
            padding-left: 6px;
            padding-right: 6px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        & .swBtn {
            margin-right: 6px;
            margin-left: auto;
            padding-left: 6px;
            border-left: 2px solid #fff3;
        }
    }
</style>