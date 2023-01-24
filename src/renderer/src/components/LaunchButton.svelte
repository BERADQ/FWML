<script lang="ts">
	const launch = () => {
		window.electron.ipcRenderer.invoke("launch")
	};
</script>

<div class="btnBox">
    <span class="btnText" on:click={launch}>{"发 射"}</span>
</div>

<style lang="postcss">
    .btnBox {
        user-select: none;
        height: 145px;
        width: 270px;
        background-color: #ffffff13;
        box-shadow: 0 0 2px #0003, 0 0 1px #fff3 inset;
        border-radius: 8px;
        display: flex;
        justify-content: center;
        align-items: center;

        & .btnText {
            font-family: HarmoyOS_Sans;
            letter-spacing: 3px;
            color: #fff9;
            font-weight: bold;
            font-size: 55px;
        }
        transition: all 200ms;
        &:hover{
            transform: scale(1.02);
            box-shadow: 0 0 6px #0006, 0 0 3px #fff3 inset;
        }
        &:active{
            transform: scale(0.98);
            box-shadow: 0 0 2px #0003, 0 0 2px #fff3 inset;
        }
    }
</style>