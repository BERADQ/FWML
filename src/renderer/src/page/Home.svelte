<script lang="ts">
	import AccountCard from "../components/AccountCard.svelte";
	import VersionCard from "../components/VersionCard.svelte";
	import LaunchButton from "../components/LaunchButton.svelte";
	import JavaSwitcher from "../components/JavaSwitcher.svelte";
	import '../components/general.pcss';
</script>

<div class="main">
    <div class="lT">
        <AccountCard/>
        <VersionCard/>
    </div>
    <div class="rB">
        <LaunchButton/>
    </div>
    <div class="lB">
        <JavaSwitcher/>
    </div>
</div>

<style lang="postcss">
    .main {
        box-sizing: border-box;
        height: 100%;
        padding: 6px 12px;
        position: relative;
        & .rB {
            position: absolute;
            right: 12px;
            bottom: 12px;

        }
        & .lB{
            position: absolute;
            left: 12px;
            bottom: 12px;
        }
    }
</style>